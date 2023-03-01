import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class WelcomeController {
  public async index({ inertia, request }: HttpContextContract) {
    return inertia.render('App', {
      name: 'Nicolas',
    });
  };

  public async about({ inertia, request }: HttpContextContract) {
    return inertia.render('About');
  }
}
