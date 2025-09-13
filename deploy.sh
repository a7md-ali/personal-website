#!/bin/bash

# Website Deployment Script
# This script helps you deploy your personal website

echo "🚀 Personal Website Deployment Script"
echo "======================================"
echo ""

# Check if files exist
if [ ! -f "index.html" ] || [ ! -f "styles.css" ] || [ ! -f "script.js" ]; then
    echo "❌ Error: Required files not found!"
    echo "Make sure you're in the website directory with index.html, styles.css, and script.js"
    exit 1
fi

echo "✅ Website files found!"
echo ""

# Create a zip file for easy deployment
echo "📦 Creating deployment package..."
zip -r personal-website.zip index.html styles.css script.js EMAIL_SETUP.md DEPLOYMENT_GUIDE.md
echo "✅ Created personal-website.zip"
echo ""

echo "🌐 Deployment Options:"
echo "======================"
echo ""
echo "1. 🌟 NETLIFY (Recommended - Easiest)"
echo "   • Go to: https://netlify.com"
echo "   • Sign up for free"
echo "   • Drag and drop 'personal-website.zip'"
echo "   • Your site will be live instantly!"
echo ""

echo "2. ⚡ VERCEL (Great for developers)"
echo "   • Install: npm install -g vercel"
echo "   • Run: vercel --prod"
echo "   • Follow the prompts"
echo ""

echo "3. 📱 SURGE (Simple command line)"
echo "   • Install: npm install -g surge"
echo "   • Run: surge"
echo "   • Choose your domain"
echo ""

echo "4. 🐙 GITHUB PAGES (Free with GitHub)"
echo "   • Create GitHub repository"
echo "   • Upload files"
echo "   • Enable GitHub Pages in settings"
echo ""

echo "📋 Next Steps:"
echo "=============="
echo "1. Choose a hosting service above"
echo "2. Deploy your website"
echo "3. Update meta tags in index.html with your live URL"
echo "4. Set up EmailJS for contact form (see EMAIL_SETUP.md)"
echo "5. Share your website!"
echo ""

echo "🎉 Your website is ready to go live!"
echo "📁 Deployment package: personal-website.zip"
echo "📖 Full guide: DEPLOYMENT_GUIDE.md"

