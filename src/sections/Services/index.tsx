/* eslint-disable react/no-unescaped-entities */
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
  const servicesRef = useNav('services')

  return (
    <OurServicesContainer ref={servicesRef} id="services__section">
      <div className="container">
        <div className="row align-items-center mb__40">
          <div className="col-lg-6">
            <div className="our__services__section__left">
              <h3 className="our__services__title">03 • Nossos Serviços</h3>
              <h2 className="our__services__subtitle">
                Fornecemos soluções informáticas e integradas{' '}
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our__services__section__right">
              <p>
                Ajudá-lo-emos a navegar no ambiente empresarial em constante
                mudança de hoje com equipas de peritos técnicos com experiência
                na indústria.
              </p>

              <p className="paragraph__01">
                <ArrowRight color="#2BD0C9" size={24} /> Ligue-se a uma vasta
                gama de API's que irão inovar e aumentar o número de clientes.
              </p>
              <p className="paragraph__02">
                <ArrowRight color="#2BD0C9" size={24} /> Estamos a manter uma
                infra-estrutura TI crítica versus uma abordagem reactiva.
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-lg-3">
            <div className="our__services__items">
              <CircleWavyCheck color="#2BD0C9" size={32} />

              <h3>Softwares de Facturação Certificados pela AGT</h3>
              <p>
                Ajudá-lo-emos a navegar no ambiente empresarial em constante
                mudança de hoje com equipas de técnicos
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="our__services__items">
              <DesktopTower color="#2BD0C9" size={32} />
              <h3>Aplicativos Webs com diversas aplicações</h3>
              <p>
                Ajudá-lo-emos a navegar no ambiente empresarial em constante
                mudança de hoje com equipas de técnicos
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="our__services__items">
              <WindowsLogo color="#2BD0C9" size={32} />

              <h3>
                Venda & Implementação de Subscrição Microsoft 365 empresarial{' '}
              </h3>
              <p>
                Ajudá-lo-emos a navegar no ambiente empresarial em constante
                mudança de hoje com equipas de técnicos
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="our__services__items">
              <Graph color="#2BD0C9" size={32} />

              <h3>Treinamentos Técnicos, Tecnológicos e Práticos</h3>
              <p>
                Ajudá-lo-emos a navegar no ambiente empresarial em constante
                mudança de hoje com equipas de técnicos
              </p>
            </div>
          </div>
        </div>
      </div>
    </OurServicesContainer>
  )
}
