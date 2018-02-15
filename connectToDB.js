var mongoose = require('mongoose');
mongoose.connect('mongodb://user6AX:qamM7HlI7UdSFfmg@mongodb/sampledb');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection successful');
  });

module.exports = {
  db
}
