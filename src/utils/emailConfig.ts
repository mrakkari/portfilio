// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_your_id', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'template_your_id', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'your_public_key' // Replace with your EmailJS public key
};

// Instructions to set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new service (Gmail, Outlook, etc.)
// 3. Create an email template with the following variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{subject}} - email subject
//    - {{message}} - email message
//    - {{to_name}} - your name
//    - {{to_email}} - your email
//    - {{reply_to}} - sender's email for replies
// 4. Get your service ID, template ID, and public key
// 5. Replace the values above with your actual credentials