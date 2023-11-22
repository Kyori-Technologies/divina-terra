import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const location = useLocation();

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={location.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      {head.meta.map((meta) => (
        <meta key={meta.key} {...meta} />
      ))}

      {head.links.map((link) => (
        <link key={link.key} {...link} />
      ))}

      {head.styles.map((style) => (
        <style
          key={style.key}
          {...style.props}
          dangerouslySetInnerHTML={style.style}
        />
      ))}
    </>
  );
});
