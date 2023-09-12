import {Link} from 'react-router-dom'

import {HeaderContainer, LogoImage} from './styledComponent'

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <LogoImage
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
      />
    </Link>
  </HeaderContainer>
)

export default Header
