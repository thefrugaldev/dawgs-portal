This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Utilizes [next-starter](https://github.com/Skolaczk/next-starter/tree/main) repo for initial layout inspiration.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Setting Up Google Cloud Project

1. [Create new project](https://console.cloud.google.com/projectcreate) - Give the project a name
   ![Project Name](/markdown/create-project.png)
2. After setting up a billing account, go to the [credentials page](https://console.cloud.google.com/projectselector2/google/maps-apis/credentials) and choose your new project name.
3. You should be presented with a "Maps API Key" that you'll need to copy. - Click on the API key and scroll down to "Set an application restriction" and choose "Websites" - Make sure you add https://dawgs-portal.vercel.app/ under "Website restrictions" and click "Save" at the bottom.
   ![Website Restrictions](/markdown/website-restrictions.png)
4. Next, you'll need to go to the Maps API ["List of APIs" page](https://console.cloud.google.com/google/maps-apis/api-list) and again choose your project.
5. You'll then need to "Enable" the following APIs from that list:
   - **Maps JavaScript API**
   - **Places API**
   - **Places API (New)**

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Development Team
Addison Hicks,