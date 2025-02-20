import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Non-Binary', 'Other'],
  },
});

const User = mongoose.model('User', userSchema);

export default User;
