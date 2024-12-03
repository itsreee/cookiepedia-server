const express = require('express')
const recipeController = require('../controllers/recipeController')

const router = new express.Router()
//getall recipe

router.get('/allrecipe',recipeController.getRecipeController)



module.exports=router