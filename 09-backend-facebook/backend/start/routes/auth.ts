import Route from '@ioc:Adonis/Core/Route'

Route.post('/auth', 'Auth/Main.store')
Route.delete('/auth', 'Auth/Main.store').middleware('auth')
