import {
  FailureView,
  FailureImage,
  FailureDescription,
  FailureTitle,
  Button,
} from './styledComponent'

const FailureBox = props => {
  const {retry} = props

  return (
    <FailureView>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
        alt="failure view"
      />
      <FailureTitle>Oops! Something Went Wrong</FailureTitle>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <Button type="button" onClick={() => retry()}>
        Retry
      </Button>
    </FailureView>
  )
}

export default FailureBox
