import { useNav } from '../hooks/useNav'

function Contacts() {
  const contactsRef = useNav('Contacts')

  return (
    <section
      ref={contactsRef}
      className="secondary-section"
      id="contactsSection"
    >
      <h2>Contacts</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
        dolorum exercitationem, harum repellat explicabo quis error excepturi
        porro soluta.
      </p>
    </section>
  )
}

export default Contacts
