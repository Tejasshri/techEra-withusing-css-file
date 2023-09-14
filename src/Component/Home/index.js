import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import FailureBox from '../FailureView'
import Header from '../Header'

import './index.css'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    courseList: [],
  }

  componentDidMount() {
    this.getCourseList()
  }

  getCourseList = async () => {
    this.setState({apiStatus: apiStatusList.inprogress})
    const url = 'https://apis.ccbp.in/te/courses'
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({courseList: updatedData, apiStatus: apiStatusList.success})
    } else {
      this.setState({apiStatus: apiStatusList.failure})
    }
  }

  renderLoader = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderCourseContainer = () => {
    const {courseList} = this.state
    return (
      <ul className="course-list-container">
        {courseList.map(each => (
          <li className="course-item" key={each.id}>
            <Link to={`/courses/${each.id}`} className="link">
              <img
                className="course-image"
                src={each.logoUrl}
                alt={each.name}
              />
              <p className="course-name">{each.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.inprogress:
        return this.renderLoader()
      case apiStatusList.failure:
        return <FailureBox retry={this.getCourseList} />
      case apiStatusList.success:
        return this.renderCourseContainer()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <h1 className="course-heading">Courses</h1>
        {this.renderView()}
      </div>
    )
  }
}

export default Home
