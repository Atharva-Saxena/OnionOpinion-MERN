import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@onionopinion.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    preferences: {
      isVegetarian: true,
      hasRefrigeration: true,
      readyToEat: false,
      maxBudget: 500,
      maxCalories: 1000,
    },
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    preferences: {
      isVegetarian: false,
      hasRefrigeration: false,
      readyToEat: true,
      maxBudget: 300,
      maxCalories: 800,
    },
  },
];

export default users;