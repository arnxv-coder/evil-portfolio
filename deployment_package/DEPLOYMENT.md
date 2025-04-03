# Deployment Guide for Evil Portfolio Website

This guide explains how to deploy the evil-themed portfolio website built with React, Node.js, and Express.

## Production Build Files

The production build is located in the `/dist` directory and contains:

- `/dist/public/` - All static frontend assets (HTML, CSS, JS, images)
- `/dist/index.js` - The compiled server code

## Hosting Options

### Option 1: Traditional Node.js Hosting (Recommended)

1. Upload the entire `/dist` directory to your hosting provider
2. Install dependencies with `npm install --production`
3. Start the server with `NODE_ENV=production node dist/index.js`
4. Configure your hosting provider to run this command

Suitable hosting providers:
- [Render](https://render.com)
- [DigitalOcean](https://www.digitalocean.com)
- [Heroku](https://www.heroku.com)
- [Railway](https://railway.app)

### Option 2: Static Hosting with the Evil Domain

If you want to host just the frontend at `arnxv.evils.in`:

1. Upload the contents of the `/dist/public` directory to your static hosting provider
2. Configure DNS settings to point `arnxv.evils.in` to your hosting provider

Suitable static hosting providers:
- [Netlify](https://www.netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

**Note**: When using static hosting, the backend functionality will be unavailable unless you deploy the backend separately.

## Custom Domain Configuration

To use the custom domain `arnxv.evils.in`:

1. Purchase the domain from a domain registrar
2. Configure DNS settings to point to your hosting provider
3. Set up SSL certificate for secure HTTPS connections

## Environment Variables

For production deployment, set the following environment variables:

```
NODE_ENV=production
PORT=<your_preferred_port> (defaults to 5000)
```

If you're using SendGrid for the contact form:
```
SENDGRID_API_KEY=<your_sendgrid_api_key>
```

## Support

For any deployment issues, contact the developer or refer to the hosting provider's documentation.