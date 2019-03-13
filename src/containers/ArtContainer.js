import React, { Component } from 'react'
// import NavBar from '../components/NavBar'
import Navigation from '../components/Navigation'
import WorksList from './WorksList'
import FacesList from './FacesList'
import PhotosList from './PhotosList'
import Contact from '../components/Contact'
import Searchbar from '../components/Searchbar'
import WorkDetails from '../components/WorkDetails'
import About from  '../components/About'
import Home from  '../components/Home'
import {BrowserRouter, Route, Link, Switch} from "react-router-dom"
import works from '../data/works'

  class ArtContainer extends Component {
    constructor(){
        super()

        this.state = {
            searchTerm: '',
            works: works,
            selectedWorks: [],
            selectedWork: null,
            firstWorkId: null,
            lastWorkId: null
          }
      }

      // componentDidMount(){
      //   fetch(`http://localhost:3000/paintings`)
      //   .then(response => response.json())
      //   .then(json => {
      //     this.paintings = json;
      //     this.setState({
      //       searchTerm: this.state.searchTerm
      //     })
      //   })
      // }

      onSearchHandler = (event) => {
        this.setState({searchTerm: event.target.value})
      }

      onSelectedWorksHandler = (med, col) => {

        let selectedWorks = [...this.state.works]
        selectedWorks = selectedWorks.filter((work) => work.medium === med && work.collection === col)

        this.setState({
          selectedWorks: selectedWorks,
        })
      }

      onHandlePrevWork = (work) => {
        console.log(work)
        let index = this.state.selectedWorks.indexOf(work)
        let prevIndex = index - 1
        let prevWork = this.state.selectedWorks[prevIndex]
        let length = parseInt(this.state.selectedWorks.length - 1)

        this.setState({
          selectedWork: prevWork,
          firstWorkId: parseInt(this.state.selectedWorks[0].id),
          lastWorkId: parseInt(this.state.selectedWorks[length].id)
        }, () => this.setWorkIds())

        this.setWorkIds = () => {
          if (this.state.selectedWorks[index].id === this.state.firstWorkId) {
            window.location.href = "http://localhost:3001/work/" + this.state.lastWorkId
          }
          else window.location.href = "http://localhost:3001/work/" + this.state.selectedWork.id
          }
      }

      onHandleNextWork = (work) => {
        console.log(work)
        let index = this.state.selectedWorks.indexOf(work)
        let nextIndex = index + 1
        let nextWork = this.state.selectedWorks[nextIndex]
        let length = parseInt(this.state.selectedWorks.length - 1)

        this.setState({
          selectedWork: nextWork,
          firstWorkId: parseInt(this.state.selectedWorks[0].id),
          lastWorkId: parseInt(this.state.selectedWorks[length].id)
        }, () => this.setWorkIds())

        this.setWorkIds = () => {
          if (this.state.selectedWorks[index].id === this.state.lastWorkId) {
            window.location.href = "https://marylenec.github.io/marylenec-github.io/work/" + this.state.firstWorkId
          }
          else window.location.href = "https://marylenec.github.io/marylenec-github.io/work/" + this.state.selectedWork.id
          }
      }

      render() {
        // console.log(this.state.paintings)
        return (
          <main className="ArtContainer">
            <Navigation
            onSelectedWorksHandler={this.onSelectedWorksHandler}
            onChangeHandler={this.onSearchHandler} value={this.state.searchTerm}/>
            <Switch>
              <Route exact path='/'
              render={() => {
                return (
                  <Home  />
              )
              }} />
              <Route path="/about" component={About}/>
              <Route exact path='/work/:id' render={(props) => {
                let workId = parseInt(props.match.params.id)

                return (
                this.state.selectedWorks ?
                <WorkDetails
                work={this.state.works.find(work => work.id === workId)}
                selectedWork= {this.state.selectedWork}
                onSelectedWorksHandler={this.onSelectedWorksHandler}
                selectedWorks={this.state.selectedWorks}
                onHandlePrevWork={this.onHandlePrevWork}
                onHandleNextWork={this.onHandleNextWork}
                /> :
                <p>Loading</p>
                )
              }} />
              <Route exact path='/mixed_media' render={() => {
                return (
                  this.state.selectedWorks ?
                  <div className='wrapper'>
                  <WorksList
                    filterTerm={this.state.searchTerm}
                    works={this.state.selectedWorks}
                  />
                  </div> :
                  <p>Loading</p>
              )
              }} />
              <Route exact path='/faces' render={() => {
                return (
                  this.state.selectedWorks ?
                  <div className='wrapper'>
                  <WorksList
                    filterTerm={this.state.searchTerm}
                    works={this.state.selectedWorks}
                  />
                  </div> :
                  <p>Loading</p>
              )
              }} />
              <Route exact path='/photography' render={() => {
                return (
                  this.state.selectedWorks ?
                  <div className='wrapper'>
                  <WorksList
                    filterTerm={this.state.searchTerm}
                    works={this.state.selectedWorks}
                  />
                  </div> :
                  <p>Loading</p>
              )
              }} />
              <Route exact path='/contact' render={() => {
                return (
                  <div className='wrapper'>
                  <Contact/>
                  </div>
              )
              }} />
            </Switch>
          </main>
        );
      }
    }


export default ArtContainer;
