# Facebook Graph API Demo

A modern Next.js application that demonstrates Facebook Login integration and post management using
the Facebook Graph API. Built with TypeScript, Tailwind CSS, and featuring access token validation
and user profile fetching.

## 🚀 Features

- **Facebook OAuth Authentication** - Secure login using Facebook Graph API
- **Access Token Validation** - Robust token verification against Facebook Graph API
- **User Profile Management** - Fetch user profiles directly from Facebook API (no cookie
  dependency)
- **Post Management** - Display and publish posts for authenticated users
- **Modern UI** - Built with Tailwind CSS and custom components
- **Type Safety** - Full TypeScript implementation with proper type definitions
- **Clean Architecture** - Well-structured codebase with separation of concerns

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **Bun** (recommended) or **npm**
- A **Facebook Developer Account**
- A **Facebook App** configured for development

## ⚙️ Environment Variables

The following environment variables are required for the application to function properly:

| Variable               | Description                                               | Required | Example                 |
| ---------------------- | --------------------------------------------------------- | -------- | ----------------------- |
| `FACEBOOK_APP_ID`      | Your Facebook App ID from Facebook Developers Console     | ✅       | `123456789012345`       |
| `FACEBOOK_APP_SECRET`  | Your Facebook App Secret from Facebook Developers Console | ✅       | `abcdef123456789`       |
| `NEXT_PUBLIC_BASE_URL` | The base URL of your application                          | ✅       | `http://localhost:3000` |

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Na3ar-17/facebook-graph-api.git
   cd facebook-graph-api
   ```

2. **Install dependencies**

   Using Bun (recommended):

   ```bash
   bun install
   ```

   Or using npm:

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and fill in your Facebook app credentials:

   ```bash
   FACEBOOK_APP_ID=your_facebook_app_id
   FACEBOOK_APP_SECRET=your_facebook_app_secret
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Configure Facebook App**

   In your Facebook Developers Console:

   - Set your app to **Development Mode**
   - Add the following **Valid OAuth Redirect URIs**:
     - `http://localhost:3000/api/auth/facebook/callback`
   - Configure the following **App Permissions**:
     - `user_posts`
     - `email`
     - `public_profile`

5. **Run the development server**

   Using Bun:

   ```bash
   bun dev
   ```

   Or using npm:

   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   └── posts/         # Post management endpoints
│   ├── dashboard/         # Dashboard pages
│   └── login/            # Login page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   ├── posts/            # Post-related components
│   ├── screens/          # Page-specific components
│   └── ui/               # UI components
├── constants/            # Application constants
├── entities/             # Type definitions and entities
├── lib/                  # Utility functions
├── services/             # API services
└── types/                # TypeScript type definitions
```

## 🔧 Available Scripts

| Command                              | Description                             |
| ------------------------------------ | --------------------------------------- |
| `bun dev` or `npm run dev`           | Start development server with Turbopack |
| `bun run build` or `npm run build`   | Build the application for production    |
| `bun start` or `npm start`           | Start the production server             |
| `bun run lint` or `npm run lint`     | Run ESLint for code quality             |
| `bun run format` or `npm run format` | Format code with Prettier               |

## 🔒 Facebook App Setup

1. **Create a Facebook App**

   - Go to [Facebook Developers](https://developers.facebook.com/)
   - Create a new app and select "Consumer" type
   - Add "Facebook Login" product to your app

2. **Configure Facebook Login**

   - In Facebook Login settings, add valid OAuth redirect URIs:
     - Development: `http://localhost:3000/api/auth/facebook/callback`
     - Production: `https://yourdomain.com/api/auth/facebook/callback`

3. **App Review (for production)**
   - Submit your app for review to access advanced permissions
   - For development, use Facebook test users

## 👥 Test Users

For development and testing:

- Create test users in your Facebook App dashboard
- Test users can access all app features without app review

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed on any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

**Important:** Ensure all environment variables are configured in your hosting platform.

## 🔍 API Endpoints

| Endpoint                      | Method | Description                    |
| ----------------------------- | ------ | ------------------------------ |
| `/api/auth/facebook`          | GET    | Initiate Facebook OAuth flow   |
| `/api/auth/facebook/callback` | GET    | Handle Facebook OAuth callback |
| `/api/auth/logout`            | POST   | Logout user and clear session  |
| `/api/posts`                  | GET    | Fetch user's Facebook posts    |
| `/api/posts`                  | POST   | Create a new Facebook post     |

## 🛡️ Security Features

- **Access Token Validation** - Tokens are validated against Facebook Graph API
- **Secure Session Management** - Server-side session handling
- **Type Safety** - Full TypeScript implementation prevents runtime errors
- **Environment Variables** - Sensitive data stored securely

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Troubleshooting

### Common Issues

**"Invalid OAuth redirect URI"**

- Check that your redirect URI in Facebook App settings matches exactly
- Ensure the protocol (http/https) is correct

**"This app is in development mode"**

- Add test users to your Facebook App
- Or submit your app for review for public access

**Environment variables not loading**

- Ensure `.env.local` file exists in the project root
- Restart the development server after adding variables
- Check variable names match exactly (case-sensitive)

## 📞 Support

If you encounter any issues or have questions:

- Open an issue on [GitHub](https://github.com/Na3ar-17/facebook-graph-api/issues)
- Check the [Facebook Developers Documentation](https://developers.facebook.com/docs/)

---

Built with ❤️ using Next.js, TypeScript, and Facebook Graph API
