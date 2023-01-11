import Slider from 'react-slick'
import { ClientesAndCollaboratorsSection } from './Clients-and-collaborators.styles'

export function ClientesAndCollaborators() {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 2000,
    autoplay: true,
  }

  return (
    <ClientesAndCollaboratorsSection>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="clients__and__collaborators__header">
              <h3 className="clients__and__collaborators__title">
                04.1 • Our Clients and Collaborators
              </h3>

              <h2 className="clients__and__collaborators__subtitle">
                Get to know our <br /> clients and collaborators
              </h2>
            </div>
          </div>
        </div>

        <Slider className="mt__40" {...settings}>
          {Array.apply(0, Array(16)).map(function (_, key) {
            return (
              <div key={key} className="clients__and__collaborators__items">
                <img
                  src="/images/clients/clients-3-270x117.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            )
          })}
        </Slider>
      </div>
    </ClientesAndCollaboratorsSection>
  )
}
