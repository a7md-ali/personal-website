# Email Setup Guide for Contact Form

## Option 1: EmailJS (Recommended)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your personal website contact form.
```

4. Note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Update Your Website
Replace these values in your `script.js` file:

```javascript
// Line 243: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line 270: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('YOUR_ACTUAL_SERVICE_ID', 'YOUR_ACTUAL_TEMPLATE_ID', formData)
```

### Step 6: Test
1. Refresh your website
2. Fill out the contact form
3. Submit it
4. Check your email for the message

---

## Option 2: Formspree (Alternative)

### Step 1: Create Formspree Account
1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Get your form endpoint URL

### Step 2: Update HTML
Replace the form tag in your `index.html`:

```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Step 3: Test
1. Submit the form
2. Check your email for messages

---

## Current Status
✅ Form is ready to receive messages
✅ EmailJS integration is set up
⏳ You need to complete the EmailJS setup steps above

Once you complete the setup, all messages sent through your website will be delivered directly to your email: aahmedsaty289@gmail.com
