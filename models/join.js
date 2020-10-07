var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const JoinSchema = new Schema({
	id: Schema.ObjectId,
	uid: Schema.ObjectId,
	gid: Schema.ObjectId,
	read_at: Date,
});
module.exports = Join = mongoose.model('Join', JoinSchema, 'Join');