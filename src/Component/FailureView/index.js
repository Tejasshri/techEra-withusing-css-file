import './index.css'

const FailureBox = props => {
  const {retry} = props

  return (
    <div className="failure-view">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
        alt="failure view"
      />
      <h1 className="failure-title">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="button" type="button" onClick={() => retry()}>
        Retry
      </button>
    </div>
  )
}

export default FailureBox
