import { useNav } from '../../hooks/useNav'
import { ProjectsSection } from './projects.styles'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Projects() {
  const projectsRef = useNav('Projects')

  const settings = {
    // centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 2000,
    autoplay: true,
  }

  return (
    <ProjectsSection ref={projectsRef} id="projectsSection">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-10">
            <div className="projects__section__left">
              <h3 className="projects__title">04 • Our Projects</h3>
              <h2 className="projects__subtitle">
                Explore our recent projects
              </h2>
            </div>
          </div>
        </div>

        <Slider className="mt__60" {...settings}>
          {Array.apply(0, Array(10)).map(function (_, key) {
            return (
              <div key={key} className="project__content__items">
                <figure className="imghvr-reveal-right project__content__items__imghvr">
                  <img
                    src="/images/index-1-415x592.png"
                    alt=""
                    className="img-fluid"
                  />

                  <figcaption>
                    <h3 className="ih-fade-down ih-delay-sm project__title">
                      StorgTech
                    </h3>
                    <p className="ih-zoom-in ih-delay-md project__description">
                      <i>
                        I have the simplest tastes, I am always satisfied with
                        the best.
                      </i>
                    </p>
                  </figcaption>
                </figure>
              </div>
            )
          })}
        </Slider>
      </div>
    </ProjectsSection>
  )
}
