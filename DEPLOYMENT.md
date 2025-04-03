# Deploying Your Evil Portfolio Website to Vercel

This guide will walk you through the process of deploying your hacker-themed portfolio website to Vercel.

## Prerequisites

- A [Vercel](https://vercel.com) account (you can sign up for free with GitHub, GitLab, or Bitbucket)
- The Vercel CLI (optional, for advanced deployments)

## Deployment Steps

### Option 1: Direct Deployment from GitHub

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your code to the repository

2. **Connect with Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will automatically detect the project type

3. **Configure your deployment**
   - Project Name: Use "evil-portfolio" or your preferred name
   - Framework Preset: Choose "Other" 
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Development Command: `npm run dev`

4. **Environment Variables (if needed)**
   - Add any environment variables your project requires

5. **Deploy!**
   - Click "Deploy"
   - Vercel will build and deploy your site

### Option 2: Manual Deployment with the Deployment Package

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel from CLI**
   ```bash
   vercel login
   ```

3. **Extract the deployment package**
   Extract `evil-portfolio-website.zip` to a folder.

4. **Deploy using Vercel CLI**
   Navigate to the folder containing the extracted files and run:
   ```bash
   vercel
   ```
   
5. **Follow the CLI prompts to configure**
   - When asked for build settings, use the defaults as they are set in vercel.json
   - Select the project you want to deploy to, or create a new one

## Custom Domain Setup

To use your custom domain "arnxv.evils.in":

1. Go to your project in Vercel Dashboard
2. Navigate to "Settings" > "Domains"
3. Add your domain "arnxv.evils.in"
4. Follow Vercel's instructions for DNS configuration

## Deployment Configuration

The `vercel.json` file in your project handles the configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/index.js",
      "use": "@vercel/node"
    },
    {
      "src": "dist/public/**/*",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/assets/(.*)",
      "dest": "/dist/public/assets/$1"
    },
    {
      "src": "/(.+\\.[a-z]+)$",
      "dest": "/dist/public/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/dist/index.js"
    }
  ]
}
```

This configuration handles both the server and static files correctly.

## Troubleshooting

- If you encounter build errors, check Vercel build logs for details
- For 404 errors after deployment, ensure your routes in vercel.json are correct
- If assets are missing, check that the path in routes matches your file structure

## Support

For more help, refer to [Vercel Documentation](https://vercel.com/docs) or reach out to Vercel support.