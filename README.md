Portfolio Website

A personal portfolio built to present projects, technical skills, achievements, and professional experience in a structured and interactive format.

The site is designed with a clean minimal interface and responsive layout, allowing visitors to explore different sections dynamically without navigating away from the page.

Live Website

Portfolio Link
https://portfolioh-mt17.vercel.app

Overview

This portfolio serves as a central hub to showcase:

• Projects and technical implementations
• Skills and technologies used
• Achievements and recognitions
• Professional and internship experience
• Contact channels for collaboration or opportunities

The interface focuses on clarity and structured presentation rather than heavy visuals.

Features

Interactive exploration sections
Each section expands dynamically when selected instead of navigating to separate pages.

Responsive layout
Optimized for desktop, tablet, and mobile devices.

Smooth animations
Implemented using Framer Motion for subtle motion interactions.

Horizontal content expansion
Content panels expand horizontally to reveal project and experience details.

Dark mode support
Automatic theme support using Tailwind CSS dark mode utilities.

Direct contact integration
Visitors can access GitHub, LinkedIn, resume, or send messages directly.

Live deployment
Hosted and automatically deployed using Vercel.

Sections Included

What I Cooked
Self-curated projects demonstrating applied technical work.

My Formulations
Technology stack, tools, and skill categories.

The Stars on My Collar
Achievements including technical competitions and recognitions.

The Highways
Professional exposure and internship experiences.

Contact
Direct links for GitHub, LinkedIn, resume, and email communication.

Tech Stack

Frontend
React

Build Tool
Vite

Styling
Tailwind CSS

Animation
Framer Motion

Deployment
Vercel

Email Integration
EmailJS

Project Structure

src
components
ui

pages
AboutMe.jsx
Achievements.jsx
Experience.jsx
Projects.jsx
Skills.jsx

components
SignatureBoxes.jsx

public
images
resume.pdf

Installation

Clone the repository

git clone https://github.com/Sandhiyalaxmii/portfolioh.git

Navigate to the project folder

cd portfolioh

Install dependencies

npm install

Run development server

npm run dev

Open in browser

http://localhost:5173

Environment Variables

Create a .env file in the root directory.

Example:

VITE_EMAIL_SERVICE=your_service_id
VITE_EMAIL_TEMPLATE=your_template_id
VITE_EMAIL_PUBLIC=your_public_key

These values are obtained from EmailJS.

Deployment

The project is deployed using Vercel.

Every push to the main branch automatically triggers a new deployment.

Steps to deploy manually:

Push project to GitHub

Import repository into Vercel

Add environment variables

Deploy

Future Improvements

Project filtering system
Interactive project demos
Blog section for technical writing
Advanced animation transitions
Analytics integration

Author

Sandhiya Laxmi

GitHub
https://github.com/Sandhiyalaxmii

LinkedIn
https://linkedin.com/in/sandhiya-laxmi

License

This project is open source and available for personal inspiration and learning purposes.
