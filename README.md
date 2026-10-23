# Gam3eyaty (جمعيتي)

A simple web app to manage monthly savings circles (gam3eyat): see whose turn it is and track who has paid.

## Features

- Create a circle with a name, monthly amount, number of members, and start date
- A card for each month showing who receives and how many have paid
- Mark payments with one tap: Paid, Pending, or Late
- Sign up and sign in with Clerk
- Arabic, right-to-left interface

## Built with

Next.js, React, Tailwind CSS, Clerk

## Run it locally

```bash
git clone https://github.com/YOUR_USERNAME/gam3eyaty.git
cd gam3eyaty
npm install
```

Create a `.env.local` file with your Clerk keys:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

Then start it:

```bash
npm run dev
```

Open http://localhost:3000

## Note

Circles are saved in the browser (`localStorage`), so they stay on the device they were created on.