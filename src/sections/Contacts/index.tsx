import { FormEvent, useState } from 'react'
import { useNav } from '../../hooks/useNav'
import { ContactsSection } from './Contact.styles'

export function Contacts() {
  const contactsRef = useNav('contacts')
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  const handleClick = () => {
    setIsSending(true)
    setTimeout(() => {
      setIsSending(false)
      setIsSent(true)
      setTimeout(() => setIsSent(false), 2500)
    }, 2000)
  }

  return (
    <ContactsSection ref={contactsRef} id="contacts__section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="contacts__section__items">
              <div className="col-lg-7 col-sm-11">
                <div className="contacts__header">
                  <h3 className="contacts__title">07 • Contacta-nos</h3>

                  <h2 className="contacts__subtitle">
                    Entre em contacto connosco
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-sm-11">
            <div className="form__contacts">
              <form onSubmit={handleSubmit}>
                {/* <div className="form-group">
                      <input
                        type="name"
                        className="form-control"
                        placeholder="Seu Nome"
                      />
                    </div> */}
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
                  <button
                    onClick={handleClick}
                    className={
                      isSending || isSent
                        ? 'btn__send__message sending'
                        : 'btn__send__message'
                    }
                  >
                    <span className="icon material-symbols-outlined">
                      {isSent ? 'check' : 'send'}
                    </span>
                    <span className="text">
                      {isSending
                        ? 'Enviando ...'
                        : isSent
                        ? 'Enviado'
                        : 'Enviar mensagem'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </ContactsSection>
  )
}
