import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import SignupValidator from "App/Validators/SignupValidator";

export default class AuthController {
  public async signup({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(SignupValidator);
      const { fullname, email, password, countryCode, mobileNumber } = payload;
      return response
        .status(200)
        .json({ fullname, email, password, countryCode, mobileNumber });
    } catch (error) {
      throw error;
    }
  }
}
