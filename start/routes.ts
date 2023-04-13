/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })


// Route.get('/posts', async () => {
//   return "Get all Posts"
// })

// Route.post('/posts', async () => {
//   return "Storing Posts"
// })

// Route.get('/posts/:id', async () => {
//   return "get Single Post"
// })

// Route.put('/posts/:id', async () => {
//   return "Update Post"
// })

// Route.delete('/posts/:id', async () => {
//   return "Delete Post"
// })

Route.resource('/posts', 'PostsController')


