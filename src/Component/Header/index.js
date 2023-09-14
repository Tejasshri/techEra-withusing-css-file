import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header">
    <Link to="/">
      <img
        className="image"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
      />
    </Link>
  </div>
)

export default Header
