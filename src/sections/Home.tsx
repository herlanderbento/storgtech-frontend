import { Button } from '../components/Button'
import { useNav } from '../hooks/useNav'
import { HomeSection } from './Home.styles'

function Home() {
  const homeRef = useNav('Home')

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
            </div>
          </div>
          <div className="col-lg-4">
            <div className="home__section__right">
              <p>
                StorgTech is an information and communication technology company
                focused on the and web software, implementation of business
                solutions...
              </p>
              <Button className="button__get__in__touch" variant="secondary">
                GET IN TOUCH
              </Button>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  )
}

export default Home
