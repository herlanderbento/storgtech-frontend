import { useContext, useEffect } from 'react'
import { NavbarBrand, NavItem } from 'reactstrap'
import { NavContext } from '../../contexts/NavContext'
import { headerSticky } from '../../utils/headerSticky'
import { Button } from '../Button'
import { HeaderContainer, Nav, Navbar, NavLink } from './Header.styles'

import logo from './../../assets/logoazul.png'

const navLinks = [
  {
    name: 'Home',
    ref: 'home',
    counter: '01',
  },
  {
    name: 'Sobre Nós',
    ref: 'about__us',
    counter: '02',
  },
  {
    name: 'Serviços',
    ref: 'services',
    counter: '03',
  },
  {
    name: 'Projectos',
    ref: 'projects',
    counter: '04',
  },
  {
    name: 'Boletim Informativo',
    ref: 'newsletter',
    counter: '05',
  },
]

interface NavLinksProps {
  name: string
  ref: string
  counter: string
}
function Header() {
  const { activeLinkId } = useContext(NavContext)

  useEffect(() => {
    window.addEventListener('scroll', headerSticky)
    return () => {
      window.removeEventListener('scroll', headerSticky)
    }
  })

  function handleClickLogo() {
    document
      .getElementById('home__section')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleClickContactUs() {
    document
      .getElementById('contacts__section')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  function renderNavLink(data: NavLinksProps) {
    const { name, ref, counter } = data

    const scrollToId = `${ref.toLowerCase().replace(/\s/g, '')}__section`

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <NavItem key={ref}>
        <NavLink
          onClick={handleClickNav}
          className={activeLinkId === ref ? 'active' : ''}
        >
          <span>{counter}</span>
          <a> {name}</a>
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
            {navLinks.map((data: NavLinksProps) => renderNavLink(data))}
          </Nav>
          <Button onClick={handleClickContactUs} variant="primary">
            Contacta-nos
          </Button>
        </Navbar>
      </div>
    </HeaderContainer>
  )
}

export default Header
