// private endpoints go here
const currentUser = (req, res) => {
  return res.send('accessed private endpoint')
}

module.exports = {
  currentUser
}