import React from 'react'

const BASE_URL = `${process.env.REACT_APP_CLOUDINARY_URL}`
const OPTIONS = 'w_1200,q_auto/'

const About = () => {
  return(
    <div className='About row'>
      <div className='col-md-8 offset-md-2 col-sm-10' >
      <img className="about" src= {BASE_URL+OPTIONS+`about/liz.jpg`} alt='Liz Profile image'/>
      <p><strong>Elizabeth Andrade Arnold</strong> uses mixed media techniques familiar to the lost art of restoration. Born and raised in Texas, but a resident of Bermuda, during the late 80’s while working in photography restoration under the Texas photography restoration guild Liz found herself loving the aspect of mixed media art.
      </p>
      <p> Elizabeth’s latest creation features her unique technique combining influences of Egyptian, Japanese and Art Nouveau art in a mixed media portrait against a richly pattern background.  Her old world style combined with influences from modern masters has been a significant theme in Liz’s mixed media photography and paintings.</p>
      </div>
    </div>
  )
}

export default About
