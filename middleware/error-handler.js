const error =function async (req, res, next) {
  setTimeout(function () {
    try {
      throw new Error('BROKEN')
    } catch (err) {
      next(err)
    }
  }, 100)
}

module.exports = error;