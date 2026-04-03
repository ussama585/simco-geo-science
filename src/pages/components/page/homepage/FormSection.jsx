import { useFormik } from "formik";
import styles from "@/styles/homepage/Hero.module.scss";
import { interestOptions } from "@/utils/static-variables";
// import { contactValidationSchema } from "./schema/schema";
import * as Yup from "yup";

const contactValidationSchema = Yup.object({
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

export default function FormSection() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      interests: [],
      message: "",
      captcha: "",
    },
    contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form submitted:", values);
      resetForm();
    },
  });

  const handleInterestChange = (option) => {
    const currentValues = formik.values.interests;

    if (currentValues.includes(option)) {
      formik.setFieldValue(
        "interests",
        currentValues.filter((item) => item !== option)
      );
    } else {
      formik.setFieldValue("interests", [...currentValues, option]);
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactHeader}>
          {/* <span className={styles.contactTag}>Contact us</span> */}
          <h2 className={styles.contactTitle}>GET IN TOUCH</h2>
          <p className={styles.contactDescription}>
            To learn more about capabilities and pricing for Simcoe’s Next
            Generation Geophysics, please complete the form below:
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">
                First Name <span>*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.firstName && formik.errors.firstName
                    ? styles.inputError
                    : ""
                }
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <p className={styles.errorText}>{formik.errors.firstName}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName">
                Last Name <span>*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.lastName && formik.errors.lastName
                    ? styles.inputError
                    : ""
                }
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <p className={styles.errorText}>{formik.errors.lastName}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="company">
                Company <span>*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Enter your company's name"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.company && formik.errors.company
                    ? styles.inputError
                    : ""
                }
              />
              {formik.touched.company && formik.errors.company && (
                <p className={styles.errorText}>{formik.errors.company}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email <span>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.email && formik.errors.email
                    ? styles.inputError
                    : ""
                }
              />
              {formik.touched.email && formik.errors.email && (
                <p className={styles.errorText}>{formik.errors.email}</p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">
                Phone <span>*</span>
              </label>

              <div
                className={`${styles.phoneField} ${formik.touched.phone && formik.errors.phone
                  ? styles.inputError
                  : ""
                  }`}
              >
                <span className={styles.phoneCode}>(+92)</span>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {formik.touched.phone && formik.errors.phone && (
                <p className={styles.errorText}>{formik.errors.phone}</p>
              )}
            </div>
          </div>

          <div className={styles.interestSection}>
            <h3>
              Select Your Interest in Exploration or Engineering Geophysics
              Methods (Select as many as apply)
            </h3>

            <div className={styles.interestGrid}>
              {interestOptions.map((option, index) => (
                <label key={index} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    name="interests"
                    checked={formik.values.interests.includes(option)}
                    onChange={() => handleInterestChange(option)}
                    onBlur={() => formik.setFieldTouched("interests", true)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            {formik.touched.interests && formik.errors.interests && (
              <p className={styles.errorText}>{formik.errors.interests}</p>
            )}
          </div>

          <div className={styles.messageGroup}>
            <label htmlFor="message">
              Message <span>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows={6}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.touched.message && formik.errors.message
                  ? styles.inputError
                  : ""
              }
            />
            {formik.touched.message && formik.errors.message && (
              <p className={styles.errorText}>{formik.errors.message}</p>
            )}
          </div>

          <div className={styles.formFooter}>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}