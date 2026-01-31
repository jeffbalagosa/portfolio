import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export const Contact = () => {
  const { ref } = useScrollAnimation<HTMLElement>()

  return (
    <section id="contact" className="container hidden" ref={ref} data-testid="contact-section">
      <h2>Contact</h2>
      <p>
        Feel free to call me call me or shoot an email over my way if you want to chat or want more info about what
        I've been working on, I'd love to hear from you!
      </p>
      <p>
        Phone: <strong>
          <a href="tel:1-702-686-6452"> 1-702-686-6452</a>
        </strong>
      </p>
      <p>
        Email:{' '}
        <strong>
          <a href="mailto:jeff.balagosa@gmail.com">jeff.balagosa@gmail.com</a>
        </strong>
      </p>
    </section>
  )
}
