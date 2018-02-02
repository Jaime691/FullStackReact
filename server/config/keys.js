// figure out what set o credentials to return
if (process.env.NODE_ENV === 'production') {
  // we  are in production
  module.exports = require('./prod');
} else {
  // we are in devepelopmen
  module.exports = require('./dev');
}
