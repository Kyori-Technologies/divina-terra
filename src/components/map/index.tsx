import { component$ } from "@builder.io/qwik";

export const Map = component$(() => {
  return (
    <section class="mt-16 flex flex-col items-center justify-center gap-8 px-12">
      <h1 class="mb-4 text-5xl font-bold uppercase text-secondary">
        Onde estamos
      </h1>
      <noscript>
        Você precisa habilitar o JavaScript para poder ver o mapa.
      </noscript>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14676.583789508351!2d-46.5541168!3d-23.12834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec192dccb8b8f%3A0xee209508db35428b!2sDivina%20Terra%20Atibaia!5e0!3m2!1spt-BR!2sbr!4v1675103200234!5m2!1spt-BR!2sbr"
        class="aspect-video h-auto w-full max-w-3xl rounded-lg border-none"
        allowFullScreen
        title="Onde estamos"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
});
