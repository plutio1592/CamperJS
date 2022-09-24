// const passport = require('passport')
// const {Strategy: LocalStrategy} = require('passport-local')
// const bcrypt = require('bcrypt')
// const {user} = require('../../models')

// module.exports = () => {
//   passport.use(new LocalStrategy ({
//     usernameField: 'email',
//     passwordField: 'password',
//   }, async (email, password, done) => {
//     try {
//       const users = await user.findOne({
//         where: {email}
//       })
//       if (!users) {
//         return done(null, false, { reason: '존재하지 않는 이메일입니다.'})
//       }
//       const result = await bcrypt.compare(password, users.password)
//       if(result) {
//         return done(null, user)
//       }
//       return done(null, false, { reason: '비밀번호가 일치하지 않습니다' })
//     } catch (err) {
//       console.error(err)
//       return done(err)
//     }
//   }
//   ))
// }
