import { Schema, Types } from "mongoose";
import * as mongoose from "mongoose";

const Post = new Schema({
  id: Types.ObjectId,
  userId: {
    type: Types.ObjectId,
    ref: "User",
  },
  text: String,
});

mongoose.model("Post", Post);
