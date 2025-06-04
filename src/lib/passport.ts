import passport from 'passport'
import { Strategy as FacebookStrategy } from 'passport-facebook'

import type { IUser } from '@/entities/user.entity'

passport.use(
	new FacebookStrategy(
		{
			clientID: process.env.FACEBOOK_APP_ID!,
			clientSecret: process.env.FACEBOOK_APP_SECRET!,
			callbackURL: '/api/auth/facebook/callback',
			profileFields: ['id', 'displayName', 'photos', 'email']
		},
		(accessToken, refreshToken, profile, done) => {
			const user = {
				id: profile.id,
				name: profile.displayName,
				email: profile.emails?.[0]?.value || null,
				photo: profile.photos?.[0]?.value || null,
				accessToken
			} as IUser
			return done(null, user)
		}
	)
)

passport.serializeUser((user, done) => {
	done(null, user)
})

passport.deserializeUser((user: IUser, done) => {
	done(null, user)
})

export default passport
