
# Property Management Backend

This is an Express.js backend for the property management application with authentication.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Local Development Setup

1. **Install MongoDB**
   - Download and install MongoDB from https://www.mongodb.com/try/download/community
   - Start MongoDB service:
     - On Windows: `net start mongodb`
     - On macOS: `brew services start mongodb/brew/mongodb-community`
     - On Linux: `sudo systemctl start mongod`

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Environment Variables** (Optional)
   Create a `.env` file in the backend directory:
   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/propertydb
   JWT_SECRET=your-secret-key-here
   ```

4. **Frontend Setup** (in another terminal)
   ```bash
   cd .. # back to root directory
   npm install
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Properties
- `GET /api/properties` - Get all properties (query: ?status=available)
- `GET /api/properties/:id` - Get property by ID
- `POST /api/properties` - Create new property (protected, with file upload)
- `PUT /api/properties/:id/status` - Update property status (protected)
- `DELETE /api/properties/:id` - Delete property (protected)
- `GET /api/properties/filter` - Filter properties
- `GET /api/properties/user/:userId` - Get user's properties (protected)

### Other
- `GET /api/footer` - Get footer content

## File Upload

The API supports uploading:
- 5-7 images per property (required)
- 1 video per property (required)

Files are stored in the `uploads/` directory.

## Database Schema

### Users
- name, email, password (hashed), phone, createdAt

### Properties
- location, area, price, bedrooms, bathrooms, squareFootage
- images (array), video, propertyType, listingType
- status (available/sold/rented), owner (ref to User)
- agent info, createdAt

## Features

- JWT-based authentication
- File upload with multer
- Property ownership tracking
- Property status management
- User-specific property operations
- Image and video validation
- CORS enabled for frontend integration

## Production Deployment

1. Set up MongoDB Atlas or cloud MongoDB service
2. Update MONGODB_URI environment variable
3. Deploy to Heroku, Railway, or similar platform
4. Update frontend API_BASE_URL to point to deployed backend
5. Configure file storage (consider AWS S3 for production)

## Troubleshooting

- Ensure MongoDB is running before starting the server
- Check that ports 3001 (backend) and 5173 (frontend) are available
- Verify that uploads directory has proper write permissions
- For CORS issues, ensure frontend URL is properly configured
