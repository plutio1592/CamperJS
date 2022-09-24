// const passport = require('passport')
// const local = require('./local')
// const {user} = require('../../models')

// module.exports = () => {
//   passport.serializeUser((users, done) => {
//     done(null, users.id)
//   })
//   passport.deserializeUser(async (id, done) => {
//     try {
//       const users = await user.findOne({ where: { id } })
//       done(null, users)
//     } catch (err) {
//       console.error(err)
//       done(err)
//     }
//   })
//   local()
// }