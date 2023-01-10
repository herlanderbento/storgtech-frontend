import { Button } from '../../components/Button'
import { useNav } from '../../hooks/useNav'
import { HomeSection } from './Home.styles'

import { ArrowDown, ArrowUpRight } from 'phosphor-react'

function Home() {
  const homeRef = useNav('Home')

  const infoSectionRightItens = [
    {
      amount: 2,
      symbol: 'k',
      title: 'Totals Apps Developed',
    },
    {
      amount: 39,
      symbol: '+',
      title: 'Totals Consultants',
    },
    {
      amount: 11,
      symbol: '+',
      title: 'Totals Awards won',
    },
    {
      amount: 160,
      symbol: '',
      title: 'Totals Employees',
    },
  ]

  function handleClickAboutUs() {
    document
      .getElementById('aboutusSection')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HomeSection ref={homeRef} id="homeSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="home__section__left">
              <h1>
                WE CREATE <br /> <span>UNIQUE & EFFICIENT</span> DIGITAL
                SOLUTIONS
              </h1>
              <button className="ellipse__btn" onClick={handleClickAboutUs}>
                <ArrowDown color="#FFFFFF" size={40} />
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="home__section__right">
              <p>
                StorgTech is an information and communication technology company
                focused on the and web software, implementation of business
                solutions...
              </p>
              <Button
                onClick={handleClickAboutUs}
                className="button__get__in__touch"
                variant="secondary"
              >
                GET IN TOUCH <ArrowUpRight color="#FFFFFF" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="row pt__86">
          <div className="col-lg-8">
            <div className="home__section__left">
              <img src="/images/background-hero.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="home__section__right">
              {infoSectionRightItens.map(({ amount, symbol, title }) => (
                <div key={amount} className="home__section__right__items">
                  <h4>
                    {amount}
                    <span>{symbol}</span>
                  </h4>
                  <p>{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}

export default Home
