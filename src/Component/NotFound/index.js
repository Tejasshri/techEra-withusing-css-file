import './index.css'

import Header from '../Header'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-view">
      <img
        className="not-found-image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        alt="not found"
      />
      <h1 className="not-found-title">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not found.
      </p>
    </div>
  </div>
)

export default NotFound
