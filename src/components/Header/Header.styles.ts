import styled from 'styled-components'
import {
  NavLink as NavLinkReactstrap,
  Nav as NavReactstrap,
  Navbar as NavbarReactstrap,
  Collapse as CollapseReactstrap,
} from 'reactstrap'

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  background-color: ${(props) => props.theme['white-default']};

  transition: 0.2s ease-in-out;

  &.is__sticky {
    width: 100%;
    left: 0;
    z-index: 2000;
    box-shadow: 0 2px 24px 0 rgb(0 0 0 / 8%);

    animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;

    .navbar {
      padding: 1rem 0.5rem;
      animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;

      &-brand img {
        width: 220px;
      }
    }
  }
`
export const Navbar = styled(NavbarReactstrap)`
  padding: 2rem 0.5rem 1.2rem 0.5rem;
  transition: 0.2s ease-in-out;

  .navbar-brand img {
    width: 240px;

    cursor: pointer;
  }
`

export const Nav = styled(NavReactstrap)`
  margin-left: 3rem;
`

export const Collapse = styled(CollapseReactstrap)`
  /* background-color: aqua !important; */
`
export const NavLink = styled(NavLinkReactstrap)`
  cursor: pointer !important;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;

  color: ${(props) => props.theme['gray-700']} !important;

  display: flex;
  flex-direction: column;

  &::before {
    position: absolute;

    top: 10px;
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-100']};
  }

  &.active {
    color: ${(props) => props.theme['green-500']} !important;
    span {
      color: ${(props) => props.theme['green-500']} !important;
    }
  }
`
