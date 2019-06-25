import { s3Upload, s3Delete } from "./s3.js";

import restHapiProvider from './ra-data-rest-hapi-fixed.js';

//const apiUrl = "http://place-listening.herokuapp.com"
const apiUrl = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "") + "/api";
console.log(apiUrl);

const extendDataProvider = requestHandler => async (type, resource, params) => {

    console.log(type, resource, params);

    if (type === 'CREATE' && resource === 'file') {
      let url = await s3Upload(params.data);
      if(url) {
        return requestHandler(type, resource, {data: {
          filename: params.data.files.title, 
          url: url
        }});   
      } else {
        throw new Error("upload error");
      } 
    }

    if (type === 'DELETE' && resource === 'file') {
        let file = await requestHandler('GET_ONE', 'file', { id: params.id });
        if(file && file.data) {
          s3Delete(file.data);
        }
        console.log("now dispatching normal delete request to api");
    }

    if (type === 'DELETE_MANY' && resource === 'file') {
        throw new Error("not implemented");
    }

    // for other request types and resources, fall back to the default request handler
    return requestHandler(type, resource, params);
};

const dataProvider = extendDataProvider(restHapiProvider(apiUrl));

export { dataProvider }



