class NewController {
  index(req, res) {
    res.render('news')
  }
}

module.exports = new NewController()
