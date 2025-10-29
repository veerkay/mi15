// 🔧 RESEND API KEY CONFIGURATION
// Replace the API key below with your actual Resend API key
// You can get this from: https://resend.com/api-keys
// This file centralizes all configuration for easy management

export const RESEND_CONFIG = {
  // Your Resend API Key - update this with your actual key
  API_KEY: "re_cHNmYggi_Gwov2vvnfeTusmma2JMRm8K9",

  // Admin email that receives OTP codes and applications
  // This must be your verified Resend email address
  ADMIN_EMAIL: "zonal.admiral.commander@proton.me",

  // From email address for sending emails
  FROM_EMAIL: "Mi15 Application <onboarding@resend.dev>",

  // Masked email display for users (should match your admin email pattern)
  MASKED_EMAIL: "T********n@proton.me",
}

// Validation function to check if configuration is properly set
export function validateConfig() {
  const errors = []

  if (!RESEND_CONFIG.API_KEY || RESEND_CONFIG.API_KEY === "re_123456789_REPLACE_WITH_YOUR_ACTUAL_API_KEY") {
    errors.push("RESEND API_KEY is not configured properly")
  }

  if (!RESEND_CONFIG.ADMIN_EMAIL) {
    errors.push("ADMIN_EMAIL is not configured")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
