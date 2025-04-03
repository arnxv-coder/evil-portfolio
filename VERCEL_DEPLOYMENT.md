# Deploying Your Evil Portfolio Website to Vercel (Static Version)

This guide will help you deploy your evil-themed portfolio website to Vercel as a static site, which is the most reliable method.

## Deployment Steps

### Option 1: Using the Static Deployment Package (Recommended)

1. **Download the Static Deployment Package**
   - Download the `evil-portfolio-website-static.zip` file
   - Extract its contents to a folder on your computer

2. **Sign Up/Login to Vercel**
   - Go to [Vercel](https://vercel.com) and create an account or log in

3. **Create a New Project**
   - In the Vercel dashboard, click "Add New" → "Project"
   - Select "Upload" from the top tabs

4. **Upload Your Files**
   - Drag and drop the entire extracted folder to the upload area
   - Or click "Browse" and select all files from the extracted folder

5. **Configure Project (Optional)**
   - Project Name: Use "evil-portfolio" or your preferred name
   - Framework Preset: Choose "Other" or "Static Site"
   - Build Command: Leave empty (as the files are already built)
   - Output Directory: Leave empty (as you're uploading the output directly)

6. **Deploy**
   - Click "Deploy"
   - Vercel will process and deploy your static site

### Option 2: CLI Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Extract the static package**
   Extract `evil-portfolio-website-static.zip` to a folder.

3. **Deploy using Vercel CLI**
   - Navigate to the folder containing the extracted files
   - Run: `vercel login` (follow authentication steps)
   - Run: `vercel`
   - Follow the CLI prompts (accept the defaults)

## Setting Up Your Custom Domain

1. **Go to Your Project Settings**
   - In Vercel Dashboard, select your deployed project
   - Click "Settings" → "Domains"

2. **Add Your Custom Domain**
   - Enter: `arnxv.evils.in`
   - Click "Add"

3. **Configure DNS Settings**
   - Vercel will provide specific DNS records to add at your domain registrar
   - Typically, you'll add a CNAME record pointing to `cname.vercel-dns.com`
   - Wait for DNS propagation (can take up to 48 hours)

## The Static Deployment Advantage

This static deployment approach has several benefits:
- Much more reliable than serverless function deployment
- Faster page loads since all content is static
- No server-side errors like the 500 FUNCTION_INVOCATION_FAILED you experienced
- Simpler configuration and maintenance

## Troubleshooting

If you encounter any issues:
1. **Vercel Dashboard** - Check the deployment logs 
2. **Site not updating** - Make sure you're uploading all the files
3. **Domain not connecting** - Verify DNS settings are correctly configured

For more help, refer to [Vercel's Static Deployments documentation](https://vercel.com/docs/concepts/deployments/static-deployments).