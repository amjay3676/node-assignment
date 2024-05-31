import { schema, rules } from "@ioc:Adonis/Core/Validator";

export default class SignupValidator {
  constructor(protected ctx) {}

  public schema = schema.create({
    fullname: schema.string({ trim: true }, [
      rules.maxLength(255),
      rules.required(),
    ]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.maxLength(255),
      rules.required(),
    ]),
    password: schema.string({ trim: true }, [
      rules.minLength(8),
      rules.required(),
      rules.regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/),
    ]),
    countryCode: schema.string({ trim: true }, [
      rules.regex(/^\+\d+$/),
      rules.maxLength(5),
      rules.required(),
    ]),
    mobileNumber: schema.string({ trim: true }, [
      rules.maxLength(15),
      rules.minLength(10),
      rules.regex(/^\d+$/),
      rules.required(),
    ]),
  });

  public messages = {
    "fullname.required": "Full name is required",
    "fullname.maxLength": "Full name cannot exceed 255 characters",
    "email.required": "Email is required",
    "email.email": "Provide a valid email address",
    "email.maxLength": "Email cannot exceed 255 characters",
    "password.required": "Password is required",
    "password.regex":
      "Password must contain at least one uppercase letter, one special character, and one numeric value",
    "password.minLength": "Password should be at least 8 characters long",
    "countryCode.required": "Country code is required",
    "countryCode.regex": "Country code must start with + followed by digits",
    "countryCode.maxLength": "Country code cannot exceed 5 characters",
    "mobileNumber.required": "Mobile number is required",
    "mobileNumber.maxLength": "Mobile number cannot exceed 15 characters",
    "mobileNumber.minLength": "Mobile number cannot be less then 10 characters",
    "mobileNumber.regex": "Mobile number should contain only digits",
  };
}
