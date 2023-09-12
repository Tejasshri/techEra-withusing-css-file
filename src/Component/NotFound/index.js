import {
  NotFoundView,
  NotFoundImage,
  NotFoundDescription,
  NotFoundTitle,
} from './styledComponent'

import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <NotFoundView>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <NotFoundTitle>Page Not Found</NotFoundTitle>
      <NotFoundDescription>
        We are sorry, the page you requested could not found.
      </NotFoundDescription>
    </NotFoundView>
  </>
)

export default NotFound
