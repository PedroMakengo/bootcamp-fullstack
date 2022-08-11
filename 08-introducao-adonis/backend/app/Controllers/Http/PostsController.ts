// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  index() {
    return [
      {
        id: 1,
        name: 'Pedro',
        idade: 23,
        peso: '90k',
      },
    ]
  }
}
