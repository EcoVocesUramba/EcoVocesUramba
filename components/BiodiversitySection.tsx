export function BiodiversitySection() {
  return (
    <section className="biodiversidad" id="biodiversidad">
      <div className="bio-container">
        <div className="bio-text">
          <h2>Biodiversidad que Inspira al Mundo</h2>

          <p>
            El Pacífico colombiano alberga especies únicas como tortugas marinas,
            ranas exóticas, aves tropicales y ballenas jorobadas que recorren sus aguas cada año.
          </p>

          <p>
            Conservar estos ecosistemas ayuda a combatir el cambio climático,
            proteger la vida marina y garantizar un futuro sostenible para las nuevas generaciones.
          </p>

          <a href="#" className="btn btn-primary">
            Conocer Más
          </a>
        </div>

        <div className="bio-img">
          <img src="https://images.unsplash.com/photo-1516117172878-fd2c41f4a759" alt="Biodiversidad del Pacífico colombiano" />
        </div>
      </div>
    </section>
  );
}