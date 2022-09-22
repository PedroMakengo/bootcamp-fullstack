import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator } from 'App/Validators/Auth'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const { email, password } = await request.validate(StoreValidator)

    // Criando uma tentativa de login
    const token = await auth.attempt(email, password, {
      expiresIn: '30 days',
    })

    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
