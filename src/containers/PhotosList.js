import React, { Component } from 'react'
import Work from '../components/Work'

class PhotosList extends Component {

  filteredWorks = () => {
    console.log(this.props.works)

    const filteredWorks = this.props.works.filter((work) => work.title.includes(this.props.filterTerm))
    return filteredWorks.map(work => {
      return(
        <Work
        key={work.id}
        work={work}
        />)
      })
    }

  render() {
    // console.log(this.props.works)
    return (
      <React.Fragment>
        <section className='WorksList workslist-v masonry'>
        {this.filteredWorks()}
        </section>
      </React.Fragment>
    )}
  }
export default PhotosList
