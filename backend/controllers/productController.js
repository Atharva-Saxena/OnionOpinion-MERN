import Product from '../models/Product.js';

// @desc    Fetch all products with filtering and pagination
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const pageSize = 12;
    const page = Number(req.query.page) || 1;

    // Build filter object based on query parameters
    const filter = {};

    // Filter by vegetarian status
    if (req.query.isVegetarian) {
      filter.isVegetarian = req.query.isVegetarian === 'true';
    }

    // Filter by refrigeration needs
    if (req.query.needsRefrigeration) {
      filter.needsRefrigeration = req.query.needsRefrigeration === 'true';
    }

    // Filter by ready to eat
    if (req.query.readyToEat) {
      filter.readyToEat = req.query.readyToEat === 'true';
    }

    // Filter by maximum price
    if (req.query.maxPrice) {
      filter.price = { $lte: Number(req.query.maxPrice) };
    }

    // Filter by maximum calories
    if (req.query.maxCalories) {
      filter.calories = { $lte: Number(req.query.maxCalories) };
    }

    // Filter by category
    if (req.query.category) {
      filter.category = req.query.category;
    }

    // Count total products matching the filter
    const count = await Product.countDocuments(filter);

    // Fetch products with pagination
    const products = await Product.find(filter)
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    res.json({
      products,
      page,
      pages: Math.ceil(count / pageSize),
      total: count,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Fetch single product by ID
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    res.status(res.statusCode === 200 ? 500 : res.statusCode);
    res.json({
      message: error.message,
    });
  }
};

// @desc    Create a product (admin only)
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      image,
      category,
      countInStock,
      shelfLife,
      calories,
      isVegetarian,
      needsRefrigeration,
      readyToEat,
      storageInstructions,
      nutritionFacts,
    } = req.body;

    const product = new Product({
      name,
      price,
      description,
      image,
      category,
      countInStock,
      shelfLife,
      calories,
      isVegetarian,
      needsRefrigeration,
      readyToEat,
      storageInstructions,
      nutritionFacts,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a product (admin only)
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      image,
      category,
      countInStock,
      shelfLife,
      calories,
      isVegetarian,
      needsRefrigeration,
      readyToEat,
      storageInstructions,
      nutritionFacts,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.price = price || product.price;
      product.description = description || product.description;
      product.image = image || product.image;
      product.category = category || product.category;
      product.countInStock = countInStock || product.countInStock;
      product.shelfLife = shelfLife || product.shelfLife;
      product.calories = calories || product.calories;
      product.isVegetarian = isVegetarian !== undefined ? isVegetarian : product.isVegetarian;
      product.needsRefrigeration = needsRefrigeration !== undefined ? needsRefrigeration : product.needsRefrigeration;
      product.readyToEat = readyToEat !== undefined ? readyToEat : product.readyToEat;
      product.storageInstructions = storageInstructions || product.storageInstructions;
      product.nutritionFacts = nutritionFacts || product.nutritionFacts;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    res.status(res.statusCode === 200 ? 500 : res.statusCode);
    res.json({
      message: error.message,
    });
  }
};

// @desc    Delete a product (admin only)
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.deleteOne();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  } catch (error) {
    res.status(res.statusCode === 200 ? 500 : res.statusCode);
    res.json({
      message: error.message,
    });
  }
};