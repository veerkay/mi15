# Navieros Leave Application System

A multi-step form application for processing leave requests with OTP verification.

## Setup Instructions

### 1. Configuration Setup

**🔧 IMPORTANT: Update your configuration in one central location**

All configuration is now centralized in the `lib/config.ts` file. You only need to update this one file:

**File: `lib/config.ts`**

Look for this section and update with your actual values:
\`\`\`javascript
export const RESEND_CONFIG = {
  // Your Resend API Key - update this with your actual key
  API_KEY: "re_NcBUoqJj_Nhtd1jF3ARbc6FqRtS2hbj4j",
  
  // Admin email that receives OTP codes and applications
  ADMIN_EMAIL: "pmc8.us@gmail.com",
  
  // From email address for sending emails
  FROM_EMAIL: "Navieros Application <onboarding@resend.dev>",
  
  // Masked email display for users
  MASKED_EMAIL: "pm***@gmail.com",
}
\`\`\`

**To get your Resend API Key:**
1. Go to [resend.com](https://resend.com)
2. Sign up for an account
3. Navigate to API Keys section
4. Create a new API key
5. Replace the `API_KEY` value in `lib/config.ts`

**🔍 How to find the configuration file:**
- Use Ctrl+F (or Cmd+F) to search for "lib/config.ts"
- Look for the comment: "🔧 RESEND API KEY CONFIGURATION"

### 2. Email Configuration

The system is now configured to use the values from `lib/config.ts`:

- **API Key**: Used for Resend authentication
- **Admin Email**: Where OTP codes and applications are sent (`pmc8.us@gmail.com`)
- **From Email**: The sender address for emails
- **Masked Email**: What users see in the UI (`pm***@gmail.com`)

#### 🔄 To Change Configuration:

Simply update the values in `lib/config.ts` and all parts of the application will use the new settings automatically.

### 3. Installation

\`\`\`bash
npm install
\`\`\`

### 4. Development

\`\`\`bash
npm run dev
\`\`\`

**Note:** You no longer need a `.env.local` file since all configuration is in the source code.

## How It Works

1. **Multi-step Form**: Users fill out leave application details across multiple pages
2. **Data Storage**: Form data is temporarily stored in localStorage
3. **OTP Verification**: Admin receives OTP code via email to verify applications
4. **Email Submission**: Complete application data is sent via email after OTP verification

## Application Flow

1. `/` - Home page
2. `/start-leave-application` - Initial application form
3. `/apply-for-leave-permit` - Detailed leave information
4. `/verify-your-id` - Account verification (triggers OTP email)
5. `/verify-code` - OTP verification page
6. `/thank-you` - Confirmation page

## Features

- ✅ Multi-step form with data persistence
- ✅ OTP verification system
- ✅ Professional email templates
- ✅ Responsive design
- ✅ Form validation
- ✅ Error handling
- ✅ Centralized configuration

## Email Templates

The system sends two types of emails:
1. **OTP Email**: Contains 6-digit verification code for admin
2. **Application Email**: Complete form data after successful verification

## Security Features

- OTP expires after 30 minutes
- Client-side form validation
- Admin-controlled verification process
- Data cleanup after submission

## Troubleshooting

### Email Sending Issues

If you get an error like "Email service not configured properly":

1. Check that you've updated the API key in `lib/config.ts`
2. Verify your API key is correct and active in your Resend account
3. Make sure you're using your verified Resend email address

### Common Email Errors

- **"Email service not configured properly"**: Update the API key in `lib/config.ts`
- **"You can only send testing emails to your own email address"**: Use your verified Resend email
- **"Invalid API key"**: Check that your API key is correct and active

## Quick Setup Checklist

- [ ] Get your Resend API key from resend.com
- [ ] Update `API_KEY` in `lib/config.ts`
- [ ] Verify your email address is correct in `ADMIN_EMAIL`
- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Test the application flow

## Configuration Benefits

- ✅ **Single source of truth**: All configuration in one file
- ✅ **Easy to change**: Update once, applies everywhere
- ✅ **Better validation**: Automatic configuration validation
- ✅ **Clear error messages**: Helpful debugging information
- ✅ **Type safety**: TypeScript support for configuration
