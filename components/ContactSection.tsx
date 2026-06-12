"use client";

import type { FormEvent } from "react";

type ContactSectionProps = {
  whatsappPhoneNumber: string;
};

export function ContactSection({ whatsappPhoneNumber }: ContactSectionProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const phoneNumber = whatsappPhoneNumber.replace(/\D/g, "");

    if (!phoneNumber) {
      window.alert("No hay un número de WhatsApp configurado para recibir el mensaje.");
      return;
    }

    const whatsappMessage = [
      "Hola, quiero unirme a Eco Voces Uramba.",
      `Nombre: ${name}`,
      `Correo: ${email}`,
      `Mensaje: ${message}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contact" id="contacto">
      <h2>Únete a Eco Voces Uramba</h2>

      <p>
        Participa en nuestra comunidad ambiental y ayúdanos a proteger el Pacífico colombiano.
      </p>

      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Nombre completo" required />

        <input name="email" type="email" placeholder="Correo electrónico" required />

        <textarea name="message" rows={6} placeholder="Escribe tu mensaje" required />

        <button className="btn btn-primary" type="submit">
          Enviar Mensaje
        </button>
      </form>
    </section>
  );
}
