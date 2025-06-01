
# Property Management Backend

This is an Express.js backend for the property management application.

## Setup Instructions

1. Install MongoDB on your system
2. Navigate to the backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Start MongoDB service
5. Run the server: `npm run dev` (for development) or `npm start` (for production)

## API Endpoints

- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get property by ID
- `POST /api/properties` - Create new property (with file upload)
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property
- `GET /api/properties/filter` - Filter properties

## File Upload

The API supports uploading:
- 5-7 images per property (required)
- 1 video per property (required)

Files are stored in the `uploads/` directory.

## Database

Uses MongoDB with Mongoose ODM. The database name is `propertydb`.

## Environment Variables

- `PORT` - Server port (default: 3001)
- `MONGODB_URI` - MongoDB connection string (default: mongodb://localhost:27017/propertydb)

## Deployment

For production deployment:
1. Set up MongoDB Atlas or other cloud MongoDB service
2. Update the MongoDB connection string
3. Deploy to platforms like Heroku, Railway, or Vercel
4. Update the frontend API_BASE_URL to point to your deployed backend
