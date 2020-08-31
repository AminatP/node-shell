const request = require('request')

// implementation using `request`
module.exports = (url, done) => {
  request(url, (err, response, body) => {
    if (err) {
      done(err)
    } else {
      done(body)
    }
  })
}
