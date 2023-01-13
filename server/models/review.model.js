import { mongoose, Schema } from "mongoose";

import modelOptions from "../models/model.options";

export default mongoose.model(
  "Review",
  mongoose.Schema(
    {
      content: {
        type: String,
        required: true
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
      },
      mediaType: {
        type: String,
        enum: ["tv", "movie"],
        required: true
      },
      mediaId: {
        type: String,
        required: true
      },
      mediaTitle: {
        type: String,
        required: true
      },
      mediaPoster: {
        type: String,
        required: true
      }
    },
    modelOptions
  )
);
