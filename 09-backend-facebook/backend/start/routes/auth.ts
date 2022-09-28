import Route from '@ioc:Adonis/Core/Route'

// Route.post('/auth', 'Auth/Main.store')
// Route.delete('/auth', 'Auth/Main.store').middleware('auth')

Route.resource('/auth', 'Auth/Main')
  .only(['store', 'destroy'])
  .middleware({
    destroy: ['auth'],
  })
