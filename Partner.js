const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PartnerSchema = new schema(
  {
    validated: {
      type: Boolean,
      default: false,
    },
    firstname: {
      type: String,
      required: true,
      lowercase: true,
    },
    lastname: {
      type: String,
      required: true,
      lowercase: true,
    },
    facebook_id: String,
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    storeName: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    wilaya: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      lat: Number,
      long: Number,
    },
    working_days: {
      saturday: { start: String, end: String },
      sunday: { start: String, end: String },
      monday: { start: String, end: String },
      tuesday: { start: String, end: String },
      wednesday: { start: String, end: String },
      thursday: { start: String, end: String },
      friday: { start: String, end: String },
    },
    phone: {
      type: String,
      required: true,
    },
    social: {
      facebook: String,
      website: String,
      instagram: String,
    },
    avatar: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("partners", PartnerSchema);
