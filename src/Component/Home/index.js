import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import FailureBox from '../FailureView'
import Header from '../Header'

import {
  AppContainer,
  CourseHeading,
  CourseListContainer,
  CourseItem,
  CourseImage,
  CourseName,
} from './styledComponent'
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
      <CourseListContainer>
        {courseList.map(each => (
          <CourseItem key={each.id}>
            <Link to={`/courses/${each.id}`} className="link">
              <CourseImage src={each.logoUrl} alt={each.name} />
              <CourseName>{each.name}</CourseName>
            </Link>
          </CourseItem>
        ))}
      </CourseListContainer>
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
      <>
        <AppContainer>
          <Header />
          <CourseHeading>Courses</CourseHeading>
          {this.renderView()}
        </AppContainer>
      </>
    )
  }
}

export default Home
