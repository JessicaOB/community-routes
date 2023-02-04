const { Schema, model, Types } = require("mongoose");
const reactionSchema = require('./reaction');
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: "Text for the thought is required",
        minlength: 1,
        maxlength: 280,
      },
  
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
  
      username: {
        type: String,
        required: "Username required",
      },
      reactions: [reactionSchema],
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
  );
  
  thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
  });
  
  const Thought = model("Thought", thoughtSchema);
  
  module.exports = Thought;