import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section class="relative h-[90vh] lg:h-screen">
      <div class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-4 text-center text-white shadow-sm">
        <h1 class="text-4xl font-bold tracking-wide lg:text-6xl">
          Mercado especializado em alimentação saudável
        </h1>
        <h2 class="text-lg">
          A Divina Terra é referência em alimentação saudável. Em nossa loja
          você encontra uma ampla linha de produtos naturais e suplementos, além
          de novidades cuidadosamente selecionadas.
        </h2>
        <a
          class="flex h-10 items-center justify-center rounded-full border border-zinc-100 px-6 font-semibold outline-none transition-colors hover:border-primary hover:bg-primary focus-visible:border-primary focus-visible:bg-primary"
          href="#quem-somos"
        >
          Conheça mais
        </a>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          class="grid h-12 w-12 animate-bounce place-items-center rounded-full border border-primary text-white outline-none transition-colors hover:border-primary hover:bg-primary hover:text-white focus-visible:bg-primary"
          href="#quem-somos"
          aria-label="Veja quem somos"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 15 15"
            height="36"
            width="36"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </div>
      <div class="absolute inset-0 -z-10 w-full">
        <video
          class="aspect-video h-full w-full object-cover brightness-50"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bgVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
});
