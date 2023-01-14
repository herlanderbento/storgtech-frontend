import { Button } from '../../components/Button'
import { useNav } from '../../hooks/useNav'

import { ArrowDown, ArrowRight } from 'phosphor-react'
import { HomeSection } from './Home.styles'

export function Home() {
  const homeRef = useNav('Home')

  const infoSectionRightItens = [
    {
      amount: 2,
      symbol: 'k',
      title: 'Totais Apps desenvolvidos',
    },
    {
      amount: 39,
      symbol: '+',
      title: 'Consultores de Totais',
    },
    {
      amount: 11,
      symbol: '+',
      title: 'Prémios Totais ganhos',
    },
    {
      amount: 160,
      symbol: '',
      title: 'Totais Empregados',
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
                NÓS CRIAMOS <span>SOLUÇÕES DIGITAIS</span> ÚNICAS E EFICIENTES
              </h1>
              <button className="ellipse__btn" onClick={handleClickAboutUs}>
                <ArrowDown color="#FFFFFF" size={40} />
              </button>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="home__section__right">
              <p>
                A StorgTech é uma empresa de tecnologia de informação e
                comunicação focada no software e na web, implementação de
                soluções empresariais...
              </p>
              <Button
                onClick={handleClickAboutUs}
                className="button__get__in__touch"
                variant="secondary"
              >
                Continuar <ArrowRight color="#FFFFFF" size={20} />
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
