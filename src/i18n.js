import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Home: "Home",
        Product: "Product",
        SignIn: "SignIn",
        SignUp: "SignUp",
        Register: "Register",
        items: "items",
        Login: "Login",
        Email: "Email",
        Username: "Username",
        Password: "Password",
        Submit: "Submit",
        Required: "Required",
        FirstName: "FirstName",
        LastName: "LastName",
        ConfirmPassword: "ConfirmPassword",
        "Password must have a number and alphabet only":
          "Password must have a number and alphabet only",
        "Invalid email address": "Invalid email address",
        "Minimum length 6 characters": "Minimum length 6 characters",
        "Must be 15 characters or less": "Must be 15 characters or less",
        "Must have a number and alphabet only":
          "Must have a number and alphabet only",
        "Confirm password needs to be same as password":
          "Confirm password needs to be same as password",
        "Get access to your Order, Wishlist and Recommendations":
          "Get access to your Order, Wishlist and Recommendations",
        "We do not share your personal details with anyone":
          "We do not share your personal details with anyone",
        "Copyright @ 2011-2019 Sabka Bazaar Grocery Supplies Pvt Ltd":
          "Copyright @ 2011-2019 Sabka Bazaar Grocery Supplies Pvt Ltd",
        "No Item in your cart": "No Item in your cart",
        "your favourite items are just click away":
          "your favourite items are just click away",
        "Promo can be applied on payment page":
          "Promo can be applied on payment page",
        "Proceed to Checkout": "Proceed to Checkout",
        "Start Shopping": "Start Shopping"
      }
    },

    hi: {
      translations: {
        Login: "लॉग इन करें",
        "Get access to your Order, Wishlist and Recommendations":
          "अपने ऑर्डर, विशलिस्ट और सिफारिशों तक पहुंच प्राप्त करें",
        SignUp: "साइन अप करें",
        "We do not share your personal details with anyone":
          "हम आपके व्यक्तिगत विवरण किसी के साथ साझा नहीं करते हैं"
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
