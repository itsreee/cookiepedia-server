const recipes = require('../models/recipeModel')

//getrecipes
exports.getRecipeController = async(req,res)=>{
    console.log("inside getRecipeController");
    try {
         const allRecipes = await recipes.find()
         res.status(200).json(allRecipes)

    } catch (error) {
        res.status(401).json.error
    }
    
}