import express from 'express';

const router = express.Router();

//will add filter routes soon
router.get('/', (req, res) => {
    res.status(200).json({ message: 'Filter routes will be implemented soon.' });
});


export default router;