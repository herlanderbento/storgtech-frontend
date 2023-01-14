import { useNav } from '../../hooks/useNav'
import { BlogSection } from './Blog.styles'
import { ArrowRight, Calendar } from 'phosphor-react'
import { Button } from '../../components/Button'

export function Blog() {
  const blogRef = useNav('Blog')

  const images = [
    '/images/blog/blog-10.jpg',
    '/images/blog/blog-5.jpg',
    '/images/blog/blog-4.jpg',
  ]

  return (
    <BlogSection ref={blogRef} id="blogSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog__section__header">
              <h3 className="blog__title">05 • Nosso Blog</h3>

              <h2 className="blog__subtitle">Ver o nosso Blog mais recente</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-stretch mt__25">
          {images.map(function (content, key) {
            return (
              <div key={key} className="col-lg-4">
                <div className="blog__section__items">
                  <img src={content} alt="" className="img-fluid" />

                  <div className="blog__items__description">
                    <label className="blog__items__date">
                      <Calendar color="#2BD0C9" size={18} /> {'   '} Em Maio
                      14,2021
                    </label>
                    <h3 className="blog__items__titles">
                      Vantagens da Async/Await
                    </h3>
                    <p className="blog__items__paragraph">
                      Utilize a nossa análise integrada Utilize a nossa análise
                      integrada painel de instrumentos Use o nosso painel de
                      instrumentos anal ytics embutido para puxar valioso ins.{' '}
                    </p>

                    <button className="blog__btn__see__more">
                      Ver mais <ArrowRight color="#2BD0C9" size={24} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="blog__cta">
          <Button className="button__see__more" variant="secondary">
            Ver mais <ArrowRight color="#FFFFFF" size={20} />
          </Button>
        </div>
      </div>
    </BlogSection>
  )
}
