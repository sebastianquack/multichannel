module.exports = function (mongoose) {
  let modelName = "file";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema({
    filename: {
      type: Types.String,
      unique: false,
      required: true,
    },
    url: {
      type: Types.String,
      unique: false,
      required: true,
    },
  });
  
  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      readAuth: false
    }
  };
  
  return Schema;
};