import React from 'react'
import './ImageLinkForm.css'


const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 tc light-gray">
        {'This Face smart app wiil detect faces in your pictures. Gice it a try.'}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-5 center">
          <input type="text" className="f4 pa2 w-70"/>
          <button className="w-30 grow f4 linkn ph3 pv2 dib bg-light-blue">Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;