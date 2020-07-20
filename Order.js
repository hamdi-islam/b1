const mongoose = require("mongoose");
const schema = mongoose.Schema;

const OrderSchema = new schema(
  {
    validated: {
      type: Boolean,
      default: false,
    },
    client: {
      type: mongoose.Types.ObjectId,
      ref: "clients",
      required: true,
    },
    offer: {
      type: mongoose.Types.ObjectId,
      ref: "offers",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", OrderSchema);
