var mongoose = require('mongoose');
mongoose.connect('mongodb://user0FW:TgL6UVGJsBbeb5xF@mongodb/sampledb');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection successful');
  });

module.exports = {
  db
}
