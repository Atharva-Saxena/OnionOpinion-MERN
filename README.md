# Onion Opinion - Smart Grocery App

Onion Opinion is a pocket grocer app that allows you to buy groceries online with smart filtering based on your budget, storage capacity, calories, and convenience.

## Features

- Filter groceries by dietary preferences (vegetarian/non-vegetarian)
- Filter by storage capabilities (refrigeration/no refrigeration)
- Filter by preparation needs (ready-to-eat/needs cooking)
- Set budget and calorie limits
- Browse store locations on an interactive map
- User authentication with JWT
- Shopping cart functionality
- Responsive design for all devices

## Tech Stack

| Layer      | Tech                                                      |
| ---------- | --------------------------------------------------------- |
| Frontend   | React, Redux, Thunk, TailwindCSS                          |
| Backend    | Node.js, Express.js, MongoDB (Atlas), Mongoose            |
| Auth       | JWT (JSON Web Tokens), bcrypt                             |
| Storage    | MongoDB Compass for local dev                             |
| Deployment | Frontend → Vercel or Netlify, Backend → Render or Railway |
| API Extras | Leaflet.js + OpenStreetMap for store maps (free)          |
| Misc       | Postman for testing APIs                                  |

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas connection)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/onion-opinion.git
   cd onion-opinion
   ```

2. Install dependencies
   ```
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. Set up environment variables
   - Create a `.env` file in the root directory with the following variables:
     ```
     PORT=1738
     NODE_ENV=development
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Seed the database
   ```
   npm run data:import
   ```

5. Run the development server
   ```
   npm run dev
   ```

This will start both the backend server and the frontend development server concurrently.

- Backend: http://localhost:1738
- Frontend: http://localhost:5174

## Usage

- Browse products without logging in
- Create an account to add items to cart and checkout
- Set filter preferences to find products that match your needs
- View store locations on the map
- Check product details for storage instructions and nutrition facts

## Development

- `npm run server` - Run only the backend server
- `npm run client` - Run only the frontend development server
- `npm run dev` - Run both backend and frontend
- `npm run data:import` - Import sample data
- `npm run data:destroy` - Clear all data from the database

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Leaflet](https://leafletjs.com/)