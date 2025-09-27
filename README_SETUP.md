# Portfolio Setup Instructions

## 1. CV Download Feature

The CV download feature is now functional. Here's what was implemented:

### Files Added:
- `public/my_cv.pdf` - Sample CV file (replace with your actual CV)

### Code Changes:
- Updated `Hero.tsx` with `handleCVDownload` function
- Updated `Contact.tsx` with simplified CV download logic

### To Use Your Own CV:
1. Replace `public/my_cv.pdf` with your actual CV file
2. Keep the filename as `my_cv.pdf` or update the path in the code

## 2. Contact Form with EmailJS

The contact form now uses EmailJS to send emails directly to your inbox.

### Setup EmailJS:

1. **Create EmailJS Account:**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Add Email Service:**
   - Go to Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template:**
   - Go to Email Templates
   - Click "Create New Template"
   - Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply to: {{reply_to}}
```

4. **Get Your Credentials:**
   - Service ID: Found in Email Services section
   - Template ID: Found in Email Templates section
   - Public Key: Found in Account > API Keys

5. **Update Configuration:**
   - Open `src/utils/emailConfig.ts`
   - Replace the placeholder values with your actual credentials:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id',
  PUBLIC_KEY: 'your_actual_public_key'
};
```

6. **Update Contact Component:**
   - The contact form will automatically use your EmailJS configuration
   - Test the form to ensure emails are being sent

### Features Implemented:
- ✅ Functional CV download button
- ✅ Working contact form with EmailJS integration
- ✅ Form validation and error handling
- ✅ Success/error status messages
- ✅ Loading states during form submission
- ✅ Responsive design maintained

### Testing:
1. **CV Download:** Click any "Télécharger CV" button to test download
2. **Contact Form:** Fill out and submit the contact form to test email delivery

### Troubleshooting:
- If CV download doesn't work, check that `my_cv.pdf` exists in the `public` folder
- If emails aren't being sent, verify your EmailJS credentials are correct
- Check browser console for any error messages
- Ensure EmailJS service is properly configured and active

### Security Notes:
- EmailJS public key is safe to use in frontend code
- No sensitive information is exposed
- Rate limiting is handled by EmailJS
- Form includes basic validation to prevent spam