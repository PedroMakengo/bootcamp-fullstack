import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Pedro Makengo',
        email: 'admin@gmail.com',
        password: 'secret',
        role: 'admin',
      },
      {
        name: 'Antónia Vicente',
        email: 'normal@gmail.com',
        password: 'secret$17',
        role: 'normal',
      },
    ])
  }
}
