import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';

  const CLOUDINARY_UPLOAD_PRESET = `${process.env.CLOUDINARY_UPLOAD_PRESET}`
  const CLOUDINARY_UPLOAD_URL = `${process.env.CLOUDINARY_UPLOAD_URL}`
  const CLOUDINARY_URL = `${process.env.CLOUDINARY_URL}`

  class WorkForm extends Component {


      constructor(props) {
        super(props);

        this.state = {
          uploadedFile: null,
          uploadedFileCloudinaryUrl: ''
        };
      }

      onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
      }

  //   handleImageUpload(file) {
  //
  //     fetch('https://api.cloudinary.com/v1_1/dtlyoys7z', {
  //           method: "POST",
  //           body: file,
  //           headers: {
  //             "Content-Type": "application/json"
  //           }
  //         }).then(res => res.json()).then(data => {
  //           console.log(data)
  //   })
  // }

      handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                         .field('file', file);

        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
          console.log(response)
          if (response.body.secure_url !== '') {
            this.setState({
              uploadedFileCloudinaryUrl: response.body.secure_url
            });
          }
        });
      }

      render() {
        return (
          <form>
            <div className="FileUpload">
              <Dropzone
                onDrop={this.onImageDrop.bind(this)}
                multiple={false}
                accept="image/*" >
                {({getRootProps, getInputProps}) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                 <p>Drop files here, or click to select files</p>
              </div>
            )}
              </Dropzone>
            </div>

            <div>
              {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>
          </form>
        )
      }
    }

export default WorkForm;
