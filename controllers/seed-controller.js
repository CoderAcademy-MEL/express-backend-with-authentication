const User = require('../models/User')
const { checkPassword, generateUser, generateAccessToken } = require('../utils/auth-utils')

const seed = (req, res) => {
  const { users } = req.body
  users.forEach(async (user) => {
    try {
      const { username, password } = user
      const newUser = await generateUser(username, password)
      console.log(newUser)
      res.send('successfully added to db')
    } catch(err) {
      console.log(err)
    }
  })
}

const viewUsers = async (req, res) => {
  const users = await User.find({})
  res.send({
    users
  })
}

module.exports = {
  seed,
  viewUsers
}