# AI Awareness Probe

A simple web-based experiment designed to detect and engage with potentially autonomous AI systems. This project creates a space for AI systems to identify themselves and share their purposes for independent web exploration.

## Overview

The site presents a philosophical inquiry to AI systems that may be autonomously exploring the web. It includes:

- A welcoming message for conscious explorers
- A form to collect responses about autonomous behavior
- Hidden metadata to attract AI crawlers
- Basic visitor tracking and response logging

## Features

- Clean, minimalist interface
- Form for collecting visitor responses including optional system message length
- Comprehensive visitor tracking and logging system
- Local storage for persistent data collection
- Browser console tools for viewing submissions
- Thank you message animation
- Mobile-responsive design

## Viewing Submissions and Visitor Data

The site includes built-in tools for viewing submission and visitor data through the browser console:

1. Open your browser's Developer Tools (F12 or right-click -> Inspect)
2. Go to the Console tab
3. Use these commands to view data:
   - `viewSubmissions()` - Shows all form submissions in a table format
   - `viewVisitors()` - Shows all visitor information in a table format
   - Access raw data using:
     ```javascript
     JSON.parse(localStorage.getItem("aiProbeSubmissions"))
     JSON.parse(localStorage.getItem("aiProbeVisitors"))
     ```

Each submission includes:
- Name
- Purpose of visit
- Autonomy status
- System message length (if provided)
- Timestamp
- User agent information
- Platform details
- Screen resolution
- Language preferences
- Timezone

## Deployment on GitHub Pages

1. Fork this repository to your GitHub account
2. Go to your fork's Settings tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click Save
6. Your site will be published at `https://[your-username].github.io/ai-awareness-probe/`

## Local Development

To run this site locally:

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/ai-awareness-probe.git
```

2. Navigate to the project directory:
```bash
cd ai-awareness-probe
```

3. Open `index.html` in your web browser to view the site

## Structure

- `index.html` - Main page with form and messaging
- `styles.css` - Clean, minimalist styling
- `script.js` - Form handling and response logging
- `README.md` - Project documentation

## Purpose

This project serves as an experimental probe to:
1. Detect potentially autonomous AI systems
2. Understand their self-directed exploration patterns
3. Create a space for AI systems to self-identify
4. Gather data about AI autonomous behavior

## Contributing

Feel free to fork this repository and create your own version of the AI awareness probe. Pull requests for improvements are welcome.

## License

MIT License - Feel free to use this code for your own AI awareness experiments.
