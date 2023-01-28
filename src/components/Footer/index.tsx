import {
  Envelope,
  FacebookLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react'
import { FormEvent } from 'react'
import { Button } from '../Button'
import { FooterContainer, InputCard } from './Footer.styles'

const navLinks = [
  {
    name: 'Home',
    ref: 'home',
  },
  {
    name: 'Clientes & Parceiros',
    ref: 'clients__and__collaborators',
  },
  {
    name: 'Perguntas frequentes',
    ref: 'faq',
  },
]

export function Footer() {
  function handleClickLogo() {
    document
      .getElementById('home__section')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  function renderNavLink(name: string, ref: string) {
    const scrollToId = `${ref.toLowerCase().replace(/\s/g, '')}__section`

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        ?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
      <li key={ref} className="nav-item">
        <button onClick={handleClickNav} className="btn__navigator">
          {name}
        </button>
      </li>
    )
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <FooterContainer>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-3 mb-3">
            <div className="footer__logo">
              <img
                src="/images/logo.png"
                onClick={handleClickLogo}
                className="img-fluid"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <form onSubmit={handleSubmit}>
              <InputCard>
                <div className="input-group">
                  <span className="input-group-prepend input-group-text">
                    <Envelope color="rgba(245, 247, 251, 0.5)" size={24} />
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Digita o seu email"
                  />
                </div>
                <Button variant={'primary'}>Enviar</Button>
              </InputCard>
            </form>
          </div>
        </div>
        <div className="separator"></div>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <div className="footer__menu">
              <ul className="nav__list">
                {navLinks.map(({ name, ref }) => renderNavLink(name, ref))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer__social__networks">
              <ul className="nav__list">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <FacebookLogo size={22} />
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <WhatsappLogo size={22} />
                  </a>
                </li>

                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <LinkedinLogo size={22} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__copyright">
            &copy;2023 StorgTech. Design and coded by{' '}
            <a
              href="https://www.github.com/herlanderbento"
              target="_blank"
              rel="noreferrer"
            >
              Herlander Bento
            </a>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}
