import { Accordion } from "@fellipeutaka/ui/accordion";

import { faqQuestions } from "../constants/faq";

export function Faq() {
  return (
    <section
      id="faq"
      className="flex h-screen w-full flex-col items-center justify-center gap-16"
    >
      <h3 className="self-center text-3xl font-semibold ">
        Perguntas Frequentes
      </h3>

      <div className="min-h-[460px] px-4  md:w-1/2">
        <Accordion type="single">
          {faqQuestions.map((question) => (
            <Accordion.Item value={question.body} key={question.body}>
              <Accordion.Trigger className="text-left text-base md:text-xl">
                {question.body}
              </Accordion.Trigger>
              <Accordion.Content className="text-sm text-zinc-700 md:text-base">
                {question.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
