import { FormEvent } from 'react'
import { Button } from '../../components/Button'
import { useNav } from '../../hooks/useNav'
import { ContactsSection } from './Contact.styles'

export function Contacts() {
  const contactsRef = useNav('Contacts')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <ContactsSection ref={contactsRef} id="contactsSection">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="contacts__section__items">
              <div className="col-lg-6">
                <div className="contacts__header">
                  <h3 className="contacts__title">07 • Contacts</h3>

                  <h2 className="contacts__subtitle">
                    Get In Tuch With Us With Any Questions
                  </h2>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="form__contacts">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Seu Nome"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Seu Email"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Sua mensagem
                        "
                        rows={3}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <Button
                        className="btn__send__message"
                        variant="secondary"
                      >
                        Envia sua mensagem
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactsSection>
  )
}
