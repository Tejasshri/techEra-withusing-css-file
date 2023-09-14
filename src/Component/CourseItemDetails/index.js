import {Component} from 'react'
import Loader from 'react-loader-spinner'

import FailureBox from '../FailureView'
import Header from '../Header'

import {
  ItemDetails,
  CourseItem,
  CourseImage,
  CourseDescription,
  CourseDetails,
  CourseItemName,
} from './styledComponent'
import './index.css'

const apiStatusList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}

class CourseItemDetails extends Component {
  state = {
    apiStatus: apiStatusList.initial,
    courseDetails: {},
  }

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    this.setState({apiStatus: apiStatusList.inprogress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.course_details.id,
        name: data.course_details.name,
        imageUrl: data.course_details.image_url,
        description: data.course_details.description,
      }
      this.setState({
        courseDetails: updatedData,
        apiStatus: apiStatusList.success,
      })
    } else {
      this.setState({apiStatus: apiStatusList.failure})
    }
  }

  renderLoader = () => (
    <div className="loader" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {courseDetails} = this.state
    const {name, imageUrl, description} = courseDetails

    return (
      <div className="course-item-card">
        <img className="course-image" src={imageUrl} alt={name} />
        <div className="course-details">
          <h1 className="course-item-names">{name}</h1>
          <p className="course-description">{description}</p>
        </div>
      </div>
    )
  }

  renderView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusList.inprogress:
        return this.renderLoader()
      case apiStatusList.success:
        return this.renderSuccessView()
      case apiStatusList.failure:
        return <FailureBox retry={this.getCourseDetails} />
      default:
        return null
    }
  }

  render() {
    return (
      <div className="item-details">
        <Header />
        {this.renderView()}
      </div>
    )
  }
}

export default CourseItemDetails
