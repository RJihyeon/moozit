import React, { useState } from 'react';

function ImageUpload() {

  const UploadComponent = props => {
    <form>
      <label>
        File Upload URL:
        <input id="urlInput" type="text" onChange={props.onUrlChange} value={props.url}/>
      </label>
      <ImageUploader
        key="image-uploader"
        withIcon={true}
        singleImage={true}
        withPreview={true}
        label="Maximum size file: 5MB"
        buttonText="Choose an Image"
        onChange={props.onImage}
        imgExtension={['.jpg', '.png', '.jpeg']}
        maxFileSize={5242880}
      />
    </form>
  };

  const [ progress, setProgress ] = useState('getUpload'); 
  const [ url, setImageURL ] = useState(undefined);
  const [ errorMessage, setErrorMessage ] = useState('');

  const content = () => {
    switch(progress) {
      case 'getUpload':
        return <div> Please Upload an Image </div>
      case 'uploading':
        return <h2>Uploading...</h2>
      case 'uploaded':
        return <img src={url} alt="uploaded" />
      case 'uploadError':
        return (
          <>
            <div>
              Error message = {errorMessage}
            </div>
          </>
        )
    }
  }

  return (
    <>
    
    </>
  )
};

export default ImageUpload;