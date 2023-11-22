import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export const About = component$(() => {
  return (
    <section
      class="mx-12 mt-16 flex scroll-mt-16 flex-col justify-center gap-16 lg:flex-row"
      id="quem-somos"
    >
      <div class="aspect-video h-auto w-full self-center object-contain md:w-3/5">
        <Image
          src="/loja.jpeg"
          width={1410}
          height={1010}
          alt="Divina Terra loja"
          class="rounded-lg"
        />
      </div>
      <div class="flex w-full flex-col gap-2 text-zinc-600 md:w-2/5">
        <h1 class="mb-4 text-5xl font-bold uppercase text-secondary">
          <span class="block text-[rgb(193,137,66)]">Conheça a</span> Divina
          Terra
        </h1>
        <p>A Divina Terra é referência em alimentação saudável.</p>
        <p>
          Em nossa loja você encontra uma ampla linha de produtos naturais e
          suplementos, além de novidades cuidadosamente selecionadas.
        </p>
        <p>Qualidade e bom atendimento são a nossa missão!</p>
        <p>
          <span class="block text-zinc-900">Produtos naturais</span>
          Sempre prezando pela qualidade impecável dos produtos oferecidos, a
          linha de produtos naturais a granel da Divina Terra é a mais completa
          do mercado.
        </p>
        <p>
          <span class="block text-zinc-900">Suplementos</span>
          Temos as melhores marcas de suplementos a preço de site, como:
          Essential, Vitafor, Pura Vida, Nutrify, True Source, Ocean Drop,
          Moderação, Caffeine Army, Dux, entre outros. A Divina Terra oferece
          uma linha completa de suplementos nacionais e importados, perfeitos
          para dar um “UP” nos seus treinos.
        </p>
        <p>
          Acreditamos que um dos pilares do equilíbrio saudável entre corpo,
          mente e espírito está naquilo que comemos. Por isso, buscamos oferecer
          alimentos que estejam mais próximos do seu estado encontrado na
          natureza, na sua forma integral.
        </p>
        <p>
          Nossos produtos são minimamente processados para garantir sua energia
          vital. Conheça nossas linhas de produtos naturais e suplementos e seja
          você também mais forte e saudável!
        </p>
        <a
          class="flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-secondary outline-none transition-opacity hover:opacity-80 focus-visible:opacity-80"
          href="https://catalogo.stayapp.com.br/divina-terra-atibaia"
          target="_blank"
          rel="noreferrer"
        >
          Veja nosso catálogo
        </a>
      </div>
    </section>
  );
});
