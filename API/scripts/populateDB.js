import mongoose from 'mongoose'
import consts from '@/constants'
import Progress from './progress'

import userTemplate from '@/model_templates/user'
import recipeTemplate from '@/model_templates/recipe'
import commentTemplate from '@/model_templates/comment'

import User from '@/models/user'
import Recipe from '@/models/recipe'
import Comment from '@/models/comment'

const progress = new Progress({
  wrapper: 'parentheses'
})

mongoose.connect(consts.DB_PATH).then(async () => {

  console.log('Connected to database')
	console.log('Beggining populating DB with model templates...')
	console.log('===============================================')

	let numberOfUsers = 10
	let numberOfRecipesPerUser = 8
	let numberOfCommentsPerRecipe = 3

	console.log('\nSTEP 1 : Creating docs')
	console.log('------')

	try {

    console.log('Creating users...')

		let users = [] // [User]
		for (let i = 0; i < numberOfUsers; i++) {
      users.push(new User(userTemplate))
    }

    
    console.log('Creating recipes...')

    let allRecipes = [] // [[Recipe]]
		for (let i = 0; i < numberOfUsers; i++) {
			let recipesPerUser = []
			for (let j = 0; j < numberOfRecipesPerUser; j++) {
				recipesPerUser.push(new Recipe(recipeTemplate))
			}
			allRecipes.push(recipesPerUser)
    }

		console.log('Creating comments...')

    let allComments = [] // [[[Comment]]]
		for (let i = 0, count = 0; i < numberOfUsers; i++) {
      let recipesPerUser = []
			for (let j = 0; j < numberOfRecipesPerUser; j++) {
				let commentsPerRecipe = []
				for (let k = 0; k < numberOfCommentsPerRecipe; k++) {
					commentsPerRecipe.push(new Comment(commentTemplate))
				}
				recipesPerUser.push(commentsPerRecipe)
      }
      allComments.push(recipesPerUser)
    }

		console.log('**COMPLETE**\n')

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

		for (let [userNumber, userRecipes] of allRecipes.entries()) {
			for (let [recipeNumber, recipe] of userRecipes.entries()) {
				for (let comment of allComments[userNumber][recipeNumber]) {

					let randomUser = users[Math.floor(Math.random() * users.length)]
					comment.userID = randomUser._id
					comment.recipeID = recipe._id
					recipe.commentIDs.push(comment._id)

				}
			}
		}

		console.log('**COMPLETE**\n')
		
		console.log('\nSTEP 3 : Saving docs')
		console.log('------')

		try {
      progress.start('Saving users...')
              .outOf(numberOfUsers)
			for (let [i, user] of users.entries()) {
        progress.increment().division()
				await user.save()
      }
      progress.done()
		}
		catch (err) {
			console.log('Could not save a user')
			console.error(err)
    }

		try {
      progress.start('Saving recipes...')
              .outOf(numberOfUsers*numberOfRecipesPerUser)
			for (let userRecipes of allRecipes) {
				for (let recipe of userRecipes) {
          progress.increment().division()
					await recipe.save()
				}
      }
      progress.done()
		}
		catch (err) {
			console.log('Could not save a recipe')
			console.error(err)
		}

		try {
      progress.start('Saving comments...')
              .outOf(numberOfUsers*numberOfRecipesPerUser*numberOfCommentsPerRecipe)
			for (let userRecipes of allComments) {
        for (let recipeComments of userRecipes) {
          for (let comment of recipeComments) {
            progress.increment().division()
            await comment.save()
          }
        }
      }
      progress.done()
		}
		catch (err) {
			console.log('Could not save a comment')
			console.error(err)
		}

		console.log('**COMPLETE**\n')

		console.log('DONE!')

	}
	catch (err) {
		console.error(err)
	}

}, err => {

  console.log('ERR: Could not connect to database (probably wrong URL)')
  console.error(err)

})
