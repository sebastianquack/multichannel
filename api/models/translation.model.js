module.exports = function (mongoose) {
  let modelName = "translation";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema({
    key: {
      type: Types.String,
      required: true,
      unique: false
    },
    content_en: {
      type: Types.String,
      unique: false
    },
    content_no: {
      type: Types.String,
      unique: false
    },
  });
  
  Schema.statics = {
    collectionName: modelName,
    routeOptions: {}
  };
  
  return Schema;
};