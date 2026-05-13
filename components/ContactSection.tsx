export function ContactSection() {
  return (
    <section className="contact" id="contacto">
      <h2>Únete a Eco Voces Uramba</h2>

      <p>
        Participa en nuestra comunidad ambiental y ayúdanos a proteger el Pacífico colombiano.
      </p>

      <form>
        <input type="text" placeholder="Nombre completo" />

        <input type="email" placeholder="Correo electrónico" />

        <textarea rows={6} placeholder="Escribe tu mensaje" />

        <button className="btn btn-primary" type="submit">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}