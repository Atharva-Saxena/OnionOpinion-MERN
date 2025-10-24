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


### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas connection)
- npm or yarn

      Message from me (atharva, dev who made this)
      Hey stranger! looking through my project ;) , follow the instrcutions below to run my project, locations and few api wont work as my .env are you know, mine, so I'll hold onto my secrets, contact me to get access to mongoDB atlas for your IP and I'll share my connection string with the cluster name and pass

### Installation
       


1. Clone the repository
   ```
   git clone https://github.com/Atharva-Saxena/onion-opinion.git
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

      use your own .env or contact me if you want to use mine

   
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

