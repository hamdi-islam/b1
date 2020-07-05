const mongoose = require("mongoose");
const schema = mongoose.Schema;

const OfferSchema = new schema(
  {
    validated: {
      type: Boolean,
      default: false,
    },
    partner: {
      type: mongoose.Types.ObjectId,
      ref: "partners",
    },
    title: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      lowercase: true,
    },
    tags: {
      type: [String],
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    image: String,
    premium: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
    conversions: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("offers", OfferSchema);
