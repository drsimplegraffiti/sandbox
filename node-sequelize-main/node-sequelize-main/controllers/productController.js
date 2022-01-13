const db = require('../models') //this connects to the db: index.js


//create main model
const Product = db.products
const Review = db.reviews


//Main work

//Create product
const addProduct = async(req, res) => {
    try {
        let info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }

        const product = await Product.create(info)
        return res.status(201).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


//Get all products
const getAllProducts = async(req, res) => {
    try {
        let products = await Product.findAll({
            // attributes: [ //shows what ever filed you want to select
            //     'title',
            //     'price'
            // ]
        });
        return res.status(201).json(products)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}



//Get single product
const getOneProduct = async(req, res) => {
    try {
        let id = req.params.id
        let product = await Product.findOne({ where: { id: id } });
        return res.status(201).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


//Update Products
const updateProduct = async(req, res) => {
    try {
        let id = req.params.id
        const product = await Product.update(req.body, { where: { id: id } })
            // return res.status(200).json({ product })
        res.status(200).send(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


//Delete product by id
const deleteProduct = async(req, res) => {
    try {
        let id = req.params.id
        await Product.destroy({ where: { id: id } })
        return res.status(204).json('successfully deleted')
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


//Get published product
const getPublishedProduct = async(req, res) => {
    try {
        const product = await Product.findAll({ where: { published: true } })
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct
}