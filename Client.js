const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ClientSchema = new schema(
  {
    completed: {
      type: Boolean,
      default: false,
    },
    facebook_id: String,
    firstname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: false,
    },
    birthdate: Date,
    family_situation: {
      type: String,
      enum: ["Single", "Engaged", "Married", "Divorced"],
      required: false,
    },
    city: String,
    wilaya: String,
    avatar: String,
    phone: String,
    operator: String,
    profession: {
      type: String,
      enum: [
        "Enterpreneur",
        "Liberal profession",
        "Public sector employee",
        "Doctor",
        "Pharmacist",
        "Student",
        "Unemployed",
        "Retired",
      ],
    },
    transportation: {
      type: String,
      enum: ["Car", "Public", "Bike", "Motor Bike", "Feet"],
    },
    children: {
      type: Number,
      default: 0,
    },
    points: {
      type: Number,
      default: 200,
    },
    last_served_ad: Date,
    last_served_draw: Date,
    last_served_call_ad: Date,
    counter_calls: {
      type: Number,
      default: 0,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("clients", ClientSchema);
