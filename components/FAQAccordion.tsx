import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQAccordion() {
  const boostInfo = [
    {
      question: "What is boost?",
      answer:
        "Boost is an airdrop farming tool that allows you to interact with unique contracts on new chains, increasing your number of transactions, and positioning you in the best way possible to meet transaction criteria for airdrops.",
    },
    {
      question: "Are all the transactions unique?",
      answer:
        "Yes. Every NFT is deployed as a separate collection- meaning you interact with a different contract every-time you mint an NFT.",
    },
    {
      question: "Why increase transactions?",
      answer:
        "Two things matter for an airdrop- the number of transactions you do and the volume you’ve done. You might miss out on a higher-tier in a chain’s airdrop, just because you don’t make the cut on transactions. So, boost them now.",
    },
  ];
  return (
    <Accordion
      type="single"
      collapsible
      className="bg-slate-800 rounded-xl max-w-7xl mx-5 justify-center font-mono  md:mx-auto mt-20 p-4 text-white"
    >
      <h1 className="font-bold text-2xl tracking-wider">
        Frequently Asked Question
      </h1>

      {boostInfo.map((data, i) => {
        return (
          <AccordionItem key={i} value={data.question}>
            <AccordionTrigger>{data.question}</AccordionTrigger>
            <AccordionContent>{data.answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
