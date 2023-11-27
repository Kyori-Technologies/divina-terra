import { defineTailwindConfig } from "@fellipeutaka/styles";

export default defineTailwindConfig({
  content: ["./src/{pages,components}/**/*.{astro,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-golden-light": {
          DEFAULT: "hsl(var(--brand-golden-light))",
          foreground: "hsl(var(--brand-golden-light-foreground))",
        },
      },
    },
  },
});
