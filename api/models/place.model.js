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
    audio1: {
      type: Types.ObjectId,
      ref: "file"
    },
    audio2: {
      type: Types.ObjectId,
      ref: "file"
    },
    audio3: {
      type: Types.ObjectId,
      ref: "file"
    }
  });
  
  Schema.statics = {
    collectionName: modelName,
    routeOptions: {
      readAuth: false,
      associations: {
        audio1: {
          type: "ONE_ONE",
          model: "file"
        },
        audio2: {
          type: "ONE_ONE",
          model: "file"
        },
        audio3: {
          type: "ONE_ONE",
          model: "file"
        }
      }
    }
  };
  
  return Schema;
};