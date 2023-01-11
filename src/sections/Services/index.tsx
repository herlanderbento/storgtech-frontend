import { useNav } from '../../hooks/useNav'
import { OurServicesContainer } from './Services.styles'

import {
  ArrowRight,
  CircleWavyCheck,
  DesktopTower,
  WindowsLogo,
  Graph,
} from 'phosphor-react'

export function Services() {
  const servicesRef = useNav('Services')

  return (
    <OurServicesContainer ref={servicesRef} id="servicesSection">
      <div className="container">
        <div className="row align-items-center mb__40">
          <div className="col-lg-6">
            <div className="our__services__section__left">
              <h3 className="our__services__title">03 • Our Services</h3>
              <h2 className="our__services__subtitle">
                We provide IT & integrated solutions
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our__services__section__right">
              <p>
                We’ll help you navigate today’s ever-changing business
                environment with teams of technical experts of industry
                experience.
              </p>

              <p className="paragraph__01">
                <ArrowRight color="#2BD0C9" size={24} /> Connect to a wide range
                of API’s that will innovate and increase customer
              </p>
              <p className="paragraph__02">
                <ArrowRight color="#2BD0C9" size={24} /> We are maintaining
                critical IT infrastructure versus a reactive approach
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-lg-3">
            <div className="our__services__items">
              <CircleWavyCheck color="#2BD0C9" size={32} />

              <h3>AGT Certified Invoicing Software</h3>
              <p>
                We’ll help you navigate today’s ever-changing business
                environment with teams of technical.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="our__services__items">
              <DesktopTower color="#2BD0C9" size={32} />
              <h3>Multi-Application Web Apps</h3>
              <p>
                We’ll help you navigate today’s ever-changing business
                environment with teams of technical.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="our__services__items">
              <WindowsLogo color="#2BD0C9" size={32} />

              <h3>
                Microsoft 365 Enterprise Subscription Sales & Implementation
              </h3>
              <p>
                We’ll help you navigate today’s ever-changing business
                environment with teams of technical.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="our__services__items">
              <Graph color="#2BD0C9" size={32} />

              <h3>Technical, Technological and Hands-on Training</h3>
              <p>
                We’ll help you navigate today’s ever-changing business
                environment with teams of technical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </OurServicesContainer>
  )
}
