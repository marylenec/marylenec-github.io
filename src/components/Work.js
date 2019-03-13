import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const BASE_URL = `${process.env.REACT_APP_CLOUDINARY_URL}`
const OPTIONS = 'w_300,q_auto/'

class Work extends Component {

// onClick={(e) => this.props.onHandleCurrentWork(this.props.work)}

  render() {
    return this.props.work ?
    <React.Fragment>
    <figure className="Work brick" >
        <Link to={`/work/${this.props.work.id}`}><img className="work"
        src= {BASE_URL+OPTIONS+`${this.props.work.image}`}
        alt={this.props.work.title}/></Link>
    </figure>
    </React.Fragment>
  :
  <div>Loading... </div>
}
}

export default Work
