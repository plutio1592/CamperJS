const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { user } = require('../../models');

module.exports = () => {
	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_KEY,
				callbackURL: process.env.GOOGLE_CLIENT_CALLBACK_URL,
			},
			async (accessToken, refreshToken, profile, done) => {
				console.log("엑세스토큰: ", accessToken);
				console.log("리프레시 토큰: ", refreshToken)
				console.log('google profile : ', profile._json.email);
				try {
					const exUser = await user.findOne({
						where: { username: profile.id, loginType: 'google' },
					});
					if (exUser) {
						done(null, exUser);
					} else {
						const newUser = await user.create({
							email: profile._json.email,
							name: profile.displayName,
							username: profile.id,
							loginType: 'google',
						});
						done(null, newUser);
					}
				} catch (error) {
					console.error(error);
					done(error);
				}
			},
			),
			);
		};