# Facebook Graph API Demo

This Next.js app demonstrates Facebook Login and fetching/publishing posts using the Facebook Graph API.

## Setup

1. Copy `.env.example` to `.env.local` and fill in `FACEBOOK_APP_ID`, `FACEBOOK_APP_SECRET` and `NEXT_PUBLIC_BASE_URL`.
2. Make sure the Facebook app is in development mode and that you're using a **test user**.
   The login request now asks for the following scopes so posting works:
   `email`, `pages_read_engagement`, `pages_manage_posts`, and `publish_to_groups`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run development server:
   ```bash
   npm run dev
   ```

## Deployment

Deploy on any platform that supports Next.js (e.g. Vercel). Ensure environment variables are set in the hosting platform as well.

## Features

- Facebook Login using OAuth
- Display the 10 most recent posts for the authenticated user
- Ability to publish a new post (test users only)

The interviewer with ID `61559954890699` must be added as a test user for the Meta app.


