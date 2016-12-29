const configureStorePrd = require('./configureStore.prod');
const configureStoreDev = require('./configureStore.dev');

if (process.env.NODE_ENV === 'production') {
  module.exports = configureStorePrd;
} else {
  module.exports = configureStoreDev;
}
