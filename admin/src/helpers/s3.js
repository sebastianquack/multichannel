import axios from 'axios';

const s3Upload = async (data) => {
    // Split the filename to get the name and type
    let fileParts = data.files.title.split('.');
    let fileName = data.files.title;
    let fileType = fileParts[1];
    console.log("Preparing the upload", fileName, fileType);
    
    let response = await axios.post("/s3_sign", {
      fileName : fileName,
      fileType : fileType
    })
    if(!response) return null;

    console.log(response);

    var returnData = response.data.data.returnData;
    var signedRequest = returnData.signedRequest;
    var url = returnData.url;
  
    console.log("Recieved a signed request " + signedRequest);
    // Put the fileType in the headers for the upload
    var options = {
      headers: {
        'Content-Type': fileType
      },
      onUploadProgress: progressEvent => {console.log(progressEvent.loaded);}
    };
  
    let uploadResponse = await axios.put(signedRequest, data.files.rawFile, options)
    console.log("Response from s3", uploadResponse);

    if(uploadResponse) {
      return url;  
    }
}

const s3Delete = (data) => {
  let fileName = data.filename;
  axios.post("/s3_delete", {
      fileName : fileName
  })
}

export { s3Upload, s3Delete };