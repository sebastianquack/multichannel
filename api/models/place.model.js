module.exports = function (mongoose) {
  let modelName = "place";
  let Types = mongoose.Schema.Types;
  let Schema = new mongoose.Schema({
    name: {
      type: Types.String,
      required: true,
      unique: false
    },
    lat: {
      type: Types.Number,
      unique: true
    },
    lon: {
      type: Types.Number,
      unique: true
    },
    audio1_id: {
      type: Types.String,
      unique: false
    },
    audio2_id: {
      type: Types.String,
      unique: false
    },
    audio3_id: {
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