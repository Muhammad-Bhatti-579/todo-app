module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      Title: String,
      Description: String,
      Priority: String,
      Completed: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tasks", schema);
  return Tutorial;
};
