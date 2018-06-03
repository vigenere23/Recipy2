import mongoose from 'mongoose'
import consts from '@/constants'

import userTemplate from '@/model_templates/user'
import recipeTemplate from '@/model_templates/recipe'
import commentTemplate from '@/model_templates/comment'

import User from '@/models/user'
import Recipe from '@/models/recipe'
import Comment from '@/models/comment'

mongoose.connect(consts.DB_PATH).then(async () => {

  console.log('Connected to database')
	console.log('Beggining populating DB with model templates...')
	console.log('===============================================')

	var numberOfUsers = 2
	var numberOfRecipesPerUser = 2
	var numberOfCommentsPerRecipe = 2

	console.log('\nSTEP 1 : Creating docs')
	console.log('------')

	try {

		console.log('Creating users...')

		var users = [] // [User]
		for (let i = 0; i < numberOfUsers; i++) {
			users.push(new User(userTemplate))
		}

		console.log('Creating recipes...')

		var allRecipes = [] // [[Recipe]]
		for (let i = 0; i < numberOfUsers; i++) {
			let recipesPerUser = []
			for (let i = 0; i < numberOfRecipesPerUser; i++) {
				recipesPerUser.push(new Recipe(recipeTemplate))
			}
			allRecipes.push(recipesPerUser)
		}

		console.log('Creating comments...')

		var allComments = [] // [[Comment]]
		for (let i = 0; i < numberOfUsers; i++) {
			for (let i = 0; i < numberOfRecipesPerUser; i++) {
				let commentsPerRecipe = []
				for (let i = 0; i < numberOfCommentsPerRecipe; i++) {
					commentsPerRecipe.push(new Comment(commentTemplate))
				}
				allComments.push(commentsPerRecipe)
			}
		}

		console.log('STEP 1 COMPLETE\n')

		console.log('\nSTEP 2 : Linking docs')
		console.log('------')

		console.log('Linking recipes to users...')

		for (let [userNumber, user] of users.entries()) {
			for (let [recipeNumber, recipe] of allRecipes[userNumber].entries()) {

				user.recipeIDs.push(recipe._id)
				recipe.userID = user._id

			}
		}

		console.log('Linking comments to recipes and users...')

		for (let userRecipes of allRecipes) {
			for (let [recipeNumber, recipe] of userRecipes.entries()) { // ici, recipeNumber se remet à 0 en changeant de userRecipe!!!
				console.log(recipeNumber)
				for (let comment of allComments[recipeNumber]) {

					let randomUser = users[Math.floor(Math.random() * users.length)]
					comment.userID = randomUser._id
					comment.recipeID = recipe._id
					recipe.commentIDs.push(comment._id)

				}
			}
		}

		throw 'ERR'

		console.log('STEP 2 COMPLETE\n')
		
		console.log('\nSTEP 3 : Saving docs')
		console.log('------')

		try{
			console.log('Saving users...')
			for (let user of users) {
				await user.save()
			}
		}
		catch (err) {
			console.log('Could not save a user')
			console.error(err)
		}

		try{
			console.log('Saving recipes...')
			for (let userRecipes of allRecipes) {
				for (let recipe of userRecipes) {
					await recipe.save()
				}
			}
		}
		catch (err) {
			console.log('Could not save a recipe')
			console.error(err)
		}

		try{
			console.log('Saving comments...')
			var i = 0;
			for (let recipeComments of allComments) {
				for (let comment of recipeComments) {
					console.log(i)
					await comment.save()
					i++
				}
			}
		}
		catch (err) {
			console.log('Could not save a comment')
			console.error(err)
		}

		console.log('STEP 3 COMPLETE\n')

		console.log('DONE!')

	}
	catch (err) {
		console.error(err)
	}

}, err => {

  console.log('ERR: Could not connect to database (probably wrong URL)')
  console.error(err)

})
