import React from 'react'

const BASE_URL = `${process.env.REACT_APP_CLOUDINARY_URL}`
const OPTIONS = 'w_1200,q_auto/'

const Home = () => {
  return(
  // <header className="cover-img">
<section className='banner'>
      <div className="heading">
        <h1>Mixed Media Art</h1>
        <h2 className="intro-text">Elizabeth Andrade Arnold</h2>
        <a href="#about" className="btn btn-circle js-scroll-trigger">
          <i className="fa fa-angle-double-down animated"></i>
        </a>
      </div>
</section>
// </header>
  )
}

export default Home
