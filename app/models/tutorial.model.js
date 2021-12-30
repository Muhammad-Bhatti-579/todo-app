module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Name: String,
      DOB: String,
      Balance: String,
      Status: String,
      Type: String,
      ImageURL: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("customers", schema);
  return Tutorial;
};
