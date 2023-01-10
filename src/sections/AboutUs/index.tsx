import { useNav } from '../../hooks/useNav'
import { AboutUsSection } from './AboutUs.styles'

import {
  ArrowRight,
  CircleWavyCheck,
  Quotes,
  GlobeHemisphereEast,
  Rocket,
} from 'phosphor-react'

function AboutUS() {
  const aboutUsRef = useNav('About Us')

  function handleClickServices() {
    document
      .getElementById('servicesSection')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AboutUsSection ref={aboutUsRef} id="aboutusSection">
      <div className="container">
        <div className="row align-items-center mb__30">
          <div className="col-lg-6">
            <div className="about__us__section__left">
              <h3 className="about__us__title">02 • About Us</h3>
              <h2 className="about__us__subtitle">
                helping people to live better than before.
              </h2>

              <p className="about__us__description">
                StorgTech is an information and communication technology company
                focused on the and web software, implementation of business
                solutions including Microsoft subscriptions and Microsoft
                subscriptions and training in the use of technological tools. We
                also detect failures as well as missing information in national
                and international sites, and provide proposals or
                recommendations for improvement.
              </p>

              <button
                onClick={handleClickServices}
                className="btn__see__services"
              >
                See our services <ArrowRight color="#2BD0C9" size={16} />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about__us__section__right">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about__us__single__Wrapper">
                    <img
                      className="img-fluid"
                      src="/images/single-img-14.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about__us__single__Wrapper__01 mb__30">
                    <img
                      className="img-fluid"
                      src="/images/single-img-13.jpg"
                      alt=""
                    />
                  </div>
                  <div className="about__us__single__content">
                    <Quotes size={62} color="#2BD0C9" />
                    <p>
                      Our objective is to create custom base software solutions
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4">
            <div className="about__us__objects__items">
              <h3>
                <Rocket color="#2BD0C9" size={42} /> Mission
              </h3>
              <p>
                To help individuals and legal entities (companies), national and
                international reach their full potential.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about__us__objects__items">
              <h3>
                <GlobeHemisphereEast color="#2BD0C9" size={42} /> Vision
              </h3>
              <p>
                To be a reference in the national and international market in
                technologies, business solutions and training of individuals or
                legal entities (companies).
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="about__us__objects__items">
              <h3>
                <CircleWavyCheck color="#2BD0C9" size={42} /> Values
              </h3>
              <p>
                Creativity • Innovation • Social responsibility •
                Personalization • Productivity • Human capital valorization.
              </p>
              {/* <ul>
                <li>Creativity</li>
                <li>Innovation</li>
                <li>Social responsibility</li>
                <li>Personalization</li>
                <li>Productivity</li>
                <li>Human capital valorization</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </AboutUsSection>
  )
}

export default AboutUS
