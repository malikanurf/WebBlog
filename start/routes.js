'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.get('/register', 'Form/RegisterController.index')

Route.post('/register', 'Form/RegisterController.register').as('register')

Route.get('/login', 'Form/LoginController.index')

Route.post('/login','Form/LoginController.login').as('login')

Route.get('/register/confirm/:token', 'Form/RegisterController.confirmed')

Route.get('/', 'PostController.index').as('posts')

Route.get('/myposts', 'PostController.myposts')

Route.get('/posts/:id', 'PostController.details')

Route.post('/posts/:id/edit', 'PostController.edit')

Route.get('/posts/:id/delete', 'PostController.delete')

//Route.get('/posts/:id', 'PostController.data')

Route.get('/myposts/add', 'PostController.add')

Route.post('/myposts/add', 'PostController.input').as('myposts')

Route.get('/logout', 'LogoutController.logout').as('logout')

Route.get('/error', 'Form/RegisterController.error')
