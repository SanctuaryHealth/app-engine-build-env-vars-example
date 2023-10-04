Example of AppEngine not making enviroment variables set in the `app.yaml` available at build time. Next JS applications require enviroment variables at the `build` time for `staticly` generated content. See [https://example-dot-livitay.ew.r.appspot.com/static](https://example-dot-livitay.ew.r.appspot.com/static)

Possible solutions:
- Dont use `app.yaml` to set enviroment variables and instead include `.env` file when deploying so enviroment variables in the given file are present at build time
  - Cons
    - `app.yaml` in GitHub repo
    - Complex deploy script as `.env` files would have to be swapped out when running deploy command as granularity from Next JS `.env` files does not match required granularity for production code on non production channel
- Run build step on local machiene before deploy (must update or remove `build` script so it does not run `next build` automatically when deploying)
  - Cons
    - `app.yaml` in GitHub repo

Ideally we would like a secure way to get enviroment variables and secrets into our application at build and runtime with a configuration of the service we are deploying to rather than having thease values in `GitHub` or the deploy script. This is how `Vercel` do it.




# Default README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
