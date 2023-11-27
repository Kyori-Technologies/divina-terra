import { defineTailwindConfig } from "@fellipeutaka/styles";

export default defineTailwindConfig({
  content: ["./src/{pages,components}/**/*.{astro,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-golden": {
          DEFAULT: "hsl(var(--brand-golden))",
          foreground: "hsl(var(--brand-golden-foreground))",
        },
      },
    },
  },
});
