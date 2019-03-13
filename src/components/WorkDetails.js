import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const BASE_URL = `${process.env.REACT_APP_CLOUDINARY_URL}`
const OPTIONS = 'c_scale,w_1400/'
const FULL_IMG = 'q_auto/'
const enlarge_icon = 'https://res.cloudinary.com/dtlyoys7z/image/upload/v1551839321/icons/enlarge.png'
const URL = 'localhost:3001/work/'

class WorkDetails extends Component {

  state = {
    magnifier: false,
    selectedWork: this.props.work,
    // nextWork: null,
    // workId: this.props.work.id + 1,
    firstWorkId: this.props.firstWorkId,
    lastWorkId: this.props.lastWorkId
  }

  componentDidMount = () =>{
    this.props.onSelectedWorksHandler(this.props.work.medium, this.props.work.collection)
  }

  magnify = (imgID, zoom) => {

    let img, glass, w, h, bw;
    img = document.getElementById(imgID);

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    if (this.state.magnifier === false) {
      glass.style.visibility = "hidden"
    }

      this.toggleMagnify = () => {
        this.setState({
          magnifier: !this.state.magnifier
        })
        glass.style.visibility = 'visible'
      }

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", (e) => this.moveMagnifier(e));
    img.addEventListener("mousemove", (e) => this.moveMagnifier(e));

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", (e) => this.moveMagnifier(e));
    img.addEventListener("touchmove", (e) => this.moveMagnifier(e));

    this.moveMagnifier = (e) => {
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = this.getCursorPos(e);
      x = pos.x;
      y = pos.y;

      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > 30 || y > 30) {
        this.toggleMagnify()
      }
      if (x < 29 || y < 29) {
        this.setState({
          magnifier: !this.state.magnifier
        })
        glass.style.visibility = 'hidden'
        // x = 0
        // y = 0
      }
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /* Set the position of the magnifier glass: */
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }

    this.getCursorPos = (e) => {
      var a, x = 0, y = 0, z;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }

    this.handleNext = () => {
      // console.log(this.props)
      let temp = parseInt(this.state.workId) - 1
      console.log(temp, this.state.lastWorkId, this.state.firstWorkId, this.state)
      if (temp === this.state.lastWorkId) {
        // console.log("http://localhost:3001/work/" + this.state.firstWorkId )

      window.location.href = "http://localhost:3001/work/" + this.state.firstWorkId
      glass.style.visibility = 'hidden'
      }
      else this.setState({
        workId: parseInt(this.state.workId) + 1
      })
      glass.style.visibility = 'hidden'
    }
  }

  // <div className="col-md-5 col-sm-12" >
  //   <p>
  //   {this.props.work.description}
  //   </p>
  //   <p>
  //     {`${this.props.work.dimensions.width} in. x ${this.props.work.dimensions.height} in.`}<br/>
  //     {`${this.props.work.medium}`}<br/>
  //   </p>
  //
  // </div>

  render() {

  return this.props.work ?
    <div className="WorkDetails col-md-12 fade-in">
    <div className="ui card">
      <div className="img-magnifier-container">
        <img id='magnify' src={BASE_URL+OPTIONS+`${this.props.work.image}`}
        alt={this.props.work.title} onLoad={(e) => this.magnify('magnify', 1.5, 0)}
        />
        </div>
        <small><a href={BASE_URL+FULL_IMG+`${this.props.work.image}`} target="_blank"><img className='icon' src={enlarge_icon} /></a></small>
        <button onClick={() => this.props.onHandlePrevWork(this.props.work)}>Prev</button>
        <button onClick={() => this.props.onHandleNextWork(this.props.work)}>Next</button>
        </div>
    </div>
    :
    <div>Loading...</div>
  }
}

export default WorkDetails
