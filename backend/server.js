
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
  fs.mkdirSync('uploads/images');
  fs.mkdirSync('uploads/videos');
}

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/propertydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

// Property Schema
const propertySchema = new mongoose.Schema({
  location: { type: String, required: true },
  area: { type: String, required: true },
  price: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  squareFootage: { type: String, required: true },
  images: [String],
  video: String,
  propertyType: { type: String, required: true },
  listingType: { type: String, enum: ['buy', 'rent'], required: true },
  status: { type: String, enum: ['available', 'sold', 'rented'], default: 'available' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  agent: {
    name: { type: String, default: 'Property Owner' },
    image: { type: String, default: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80' }
  },
  createdAt: { type: Date, default: Date.now }
});

const Property = mongoose.model('Property', propertySchema);

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === 'images') {
      cb(null, 'uploads/images/');
    } else if (file.fieldname === 'video') {
      cb(null, 'uploads/videos/');
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === 'images') {
      if (file.mimetype.startsWith('image/')) {
        cb(null, true);
      } else {
        cb(new Error('Only image files are allowed for images'), false);
      }
    } else if (file.fieldname === 'video') {
      if (file.mimetype.startsWith('video/')) {
        cb(null, true);
      } else {
        cb(new Error('Only video files are allowed for video'), false);
      }
    } else {
      cb(new Error('Unexpected field'), false);
    }
  }
});

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone
    });

    await user.save();

    // Generate token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User created successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/auth/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Property Routes
app.get('/api/properties', async (req, res) => {
  try {
    const { status = 'available' } = req.query;
    const properties = await Property.find({ status }).populate('owner', 'name email').sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/properties/user/:userId', authenticateToken, async (req, res) => {
  try {
    const properties = await Property.find({ owner: req.params.userId }).sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/properties/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate('owner', 'name email phone');
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/properties', authenticateToken, upload.fields([
  { name: 'images', maxCount: 7 },
  { name: 'video', maxCount: 1 }
]), async (req, res) => {
  try {
    const {
      location,
      area,
      price,
      bedrooms,
      bathrooms,
      squareFootage,
      propertyType,
      listingType
    } = req.body;

    // Validate required fields
    if (!location || !area || !price || !bedrooms || !bathrooms || !squareFootage || !propertyType || !listingType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate file uploads
    if (!req.files || !req.files.images || req.files.images.length < 5) {
      return res.status(400).json({ error: 'At least 5 images are required' });
    }

    if (!req.files.video || req.files.video.length === 0) {
      return res.status(400).json({ error: 'Video is required' });
    }

    // Process uploaded files
    const imagePaths = req.files.images.map(file => `/uploads/images/${file.filename}`);
    const videoPath = `/uploads/videos/${req.files.video[0].filename}`;

    const property = new Property({
      location,
      area,
      price,
      bedrooms: parseInt(bedrooms),
      bathrooms: parseInt(bathrooms),
      squareFootage,
      images: imagePaths,
      video: videoPath,
      propertyType,
      listingType,
      owner: req.user.userId,
      agent: {
        name: 'Property Owner',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
      }
    });

    const savedProperty = await property.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/properties/:id/status', authenticateToken, async (req, res) => {
  try {
    const { status } = req.body;
    const property = await Property.findById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    // Check if user owns the property
    if (property.owner.toString() !== req.user.userId) {
      return res.status(403).json({ error: 'Not authorized to update this property' });
    }
    
    property.status = status;
    await property.save();
    
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/properties/:id', authenticateToken, async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    
    // Check if user owns the property
    if (property.owner.toString() !== req.user.userId) {
      return res.status(403).json({ error: 'Not authorized to delete this property' });
    }
    
    // Delete associated files
    if (property.images) {
      property.images.forEach(imagePath => {
        const fullPath = path.join(__dirname, imagePath);
        if (fs.existsSync(fullPath)) {
          fs.unlinkSync(fullPath);
        }
      });
    }
    
    if (property.video) {
      const fullPath = path.join(__dirname, property.video);
      if (fs.existsSync(fullPath)) {
        fs.unlinkSync(fullPath);
      }
    }
    
    await Property.findByIdAndDelete(req.params.id);
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Filter properties
app.get('/api/properties/filter', async (req, res) => {
  try {
    const { lookingFor, propertyType, location, budget } = req.query;
    
    let filter = { status: 'available' };
    
    if (lookingFor && (lookingFor === 'buy' || lookingFor === 'rent')) {
      filter.listingType = lookingFor;
    }
    
    if (propertyType && propertyType !== 'any') {
      filter.propertyType = propertyType;
    }
    
    if (location) {
      filter.$or = [
        { location: { $regex: location, $options: 'i' } },
        { area: { $regex: location, $options: 'i' } }
      ];
    }
    
    const properties = await Property.find(filter).populate('owner', 'name email').sort({ createdAt: -1 });
    
    // Filter by budget if provided
    let filteredProperties = properties;
    if (budget) {
      const budgetNum = parseInt(budget.toString().replace(/[^\d]/g, ''));
      filteredProperties = properties.filter(property => {
        const priceNum = parseInt(property.price.replace(/[^\d]/g, ''));
        return priceNum <= budgetNum;
      });
    }
    
    res.json(filteredProperties);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Footer content endpoint
app.get('/api/footer', (req, res) => {
  res.json({
    copyright: '© 2025 Pondy. All rights reserved.',
    links: [
      { name: 'Privacy Policy', url: '/privacy' },
      { name: 'Terms of Service', url: '/terms' }
    ]
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File too large' });
    }
  }
  res.status(500).json({ error: error.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
