import * as Yup from "yup";

export const contactValidationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),

  company: Yup.string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .required("Company is required"),

  email: Yup.string()
    .trim()
    .email("Enter a valid email address")
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .matches(/^[0-9+\-\s()]+$/, "Enter a valid phone number")
    .min(7, "Phone number is too short")
    .required("Phone is required"),

  interests: Yup.array().min(1, "Please select at least one interest"),

  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),

  captcha: Yup.string()
    .trim()
    .required("Captcha is required")
    .oneOf(["35k0"], "Captcha is incorrect"),
});