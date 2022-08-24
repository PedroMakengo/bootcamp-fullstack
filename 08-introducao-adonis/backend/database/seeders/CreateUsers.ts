import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@gmail.com',
        password: 'secret',
        role: 'admin',
      },
      {
        email: 'normal@gmail.com',
        password: 'secret$17',
        role: 'normal',
      },
    ])
  }
}
