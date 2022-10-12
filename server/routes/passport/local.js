const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
console.log("🚀 ~ file: local.js ~ line 3 ~ LocalStrategy", LocalStrategy)


const bcrypt = require('bcrypt')
const { user } = require('../../models')

//DB 계정 검사
module.exports = () => {
  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  }, async (username, password, done) => {
    try {
      const users = await user.findOne({
        where: {username}
      })
      if (!users) {
        return done(null, false, {reason: '존재하지 않는 계정입니다'})
      }

      const result = await bcrypt.compare(password, users.password)
      if (result) {
        return done(null, users)
      }
      return done(null, false, {reason: '비밀번호가 일치하지 않습니다'})
    } catch (err) {
      console.error(err)
      return done(err)
    }
  }))

}
