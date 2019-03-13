import React, { Component } from 'react'

const BASE_URL = `${process.env.REACT_APP_CLOUDINARY_URL}`
const OPTIONS = 'w_1200,q_auto/'
// <button className="btn btn-info btn-block" type="submit">Send</button>
  class Contact extends Component {
      render() {
      return (
        <div className='Contact row'>
          <div className='col-md-5 col-sm-12'>
            <img className="contact" src= {BASE_URL+OPTIONS+`contact/liz.gif`} alt='Liz Profile image'/>
          </div>
          <div className='col-md-5 offset-md-1 col-sm-10 offset-sm-1 contact-text'>
            <p>I'd love to hear from you! I'm happy to answer any questions you may have about my art and prints. I usually respond within 24 hours.</p>

            <input type="text" id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />

            <input type="email" id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />

            <label>Subject</label>
            <select className="browser-default custom-select mb-4">
                <option value="" disabled>Choose option</option>
                <option value="1" selected>Say Hello</option>
                <option value="2">Print Inquiry</option>
                <option value="3">Commission Work</option>
                <option value="4">Upcoming Show</option>
            </select>

            <div className="form-group">
                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"></textarea>
            </div>

            <div className="custom-control custom-checkbox mb-4">
                <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
                <label className="custom-control-label" for="defaultContactFormCopy">Send me a copy of this message</label>
            </div>


            </div>
        </div>
      )
    }
  }

export default Contact;
