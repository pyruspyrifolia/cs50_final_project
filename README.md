# Conference Helper
#### Video Demo:  <URL HERE>
#### Description:
Conference Helper is an application for planners to track statistics of their conferences. It generates analytics based on past conference performances and you can create new conferences and see old ones.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

This repostiory contains files written in typescript and javascript. I used next.js because it's a full stack framework and used Prism for ORM and to talk to my postgreSQL database as well as for authentication. The layout pages uses components such as header in order to make the navbar change depending on if a user is logged in or not. The conferences/dashboard page includes the graphs and tools to look at different analytics as well as activeTab as there are multiple tabs on the dashboard the user can look at such as speakers or other conferences. Conferences page uses a get call from the app/api to display all conferences as well as a redirect button to a form to add a new conference. There is also a register section where a user can sign up and they are automatically logged in/directed to the dashboard page. 


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
