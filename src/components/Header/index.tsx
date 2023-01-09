import { useContext, useEffect } from 'react'
import { NavbarBrand, NavbarText, NavItem } from 'reactstrap'
import { NavContext } from '../../contexts/NavContext'
import { headerSticky } from '../../utils/headerSticky'
import { HeaderContainer, Nav, Navbar, NavLink } from './Header.styles'

import logo from './../../assets/logoazul.png'

function Header() {
  const { activeLinkId } = useContext(NavContext)

  const navLinks = ['Home', 'About', 'Services', 'Projects', 'Team', 'News']

  useEffect(() => {
    window.addEventListener('scroll', headerSticky)
    return () => {
      window.removeEventListener('scroll', headerSticky)
    }
  })

  function handleClickLogo() {
    document
      .getElementById('homeSection')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  function renderNavLink(content: string, counter: number) {
    const scrollToId = `${content.toLowerCase()}Section`

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <NavItem key={content}>
        <NavLink
          onClick={handleClickNav}
          className={activeLinkId === content ? 'active' : ''}
        >
          <span>{String(counter + 1).padStart(2, '0')}</span>
          <a> {content}</a>
        </NavLink>
      </NavItem>
    )
  }

  return (
    <HeaderContainer>
      <div className={'container'}>
        <Navbar>
          <NavbarBrand onClick={handleClickLogo}>
            <img src={logo} alt="logo" />
          </NavbarBrand>
          <Nav className="me-auto">
            {navLinks.map((nav, count) => renderNavLink(nav, count))}
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Navbar>
      </div>
    </HeaderContainer>
  )
}

export default Header
