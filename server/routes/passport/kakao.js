const KakaoStrategy = require('passport-kakao').Strategy;
const passport = require('passport');
const { user } = require('../../models');

module.exports = () => {
passport.use(new KakaoStrategy({
  clientID: process.env.KAKAO_ID,
  callbackURL: process.env.KAKAOTALK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  console.log("엑세스토큰: ", accessToken);
  console.log("리프레시 토큰: ", refreshToken)
  console.log(profile._json.kakao_account.email)
  try {
    const exUser = await user.findOne({where: { username: profile.id , loginType: 'kakao'}});
    if (exUser) {
      done(null, exUser);
    } else {
      const newUser = await user.create({
        email: profile._json.kakao_account.email,
        name: profile.displayName,
        username: profile.id,
        loginType: 'kakao',
      })
      done(null, newUser);
    }
  } catch (error) {
    console.error(error);
    done(error);
  }
}))
}