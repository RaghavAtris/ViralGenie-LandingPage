"use client";

import Container from "../global/container";
import { useState } from "react";

const FAQS = [
  {
    q: "What exactly does Viral Genie do?",
    a: "ViralGenie is your 24/7 AI growth coach. It gives you daily viral post ideas, content scripts, daily strategies, so you can grow and get more users."
  },
  {
    q: "Who is ViralGenie for?",
    a: "ViralGenie is specifically small founders, solopreneurs, Indie hackers, struggling with the pressure of building and marketing together. No audience? No problem. Just bring your product, AI will get you customers."
  },
  {
    q: "Will it actually help me grow?",
    a: "Yes, every idea and post is based on real-time trends, proven hooks, and your specific niche. It is NOT another ai post generator, Our early users saw engagement boosts in under 7 days."
  },
  {
    q: "How is this different from ChatGPT or all other ai tools on the internet?",
    a: "It is NOT another ai post generator giving you generic content. ViralGenie acts like your 24/7 CMO with a decade of experience — guiding your entire strategy, automating your content calendar, and adapting to what's working."
  },
  {
    q: "Will this actually save me time or just add more work?",
    a: "It will save you 10+ hours a week. Most users go from spending hours on content to just 30 minutes per day, so you can focus on building, not brainstorming."
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, you can cancel your subscription at any time. After cancellation, you'll retain access to your features until the end of your billing cycle."
  },
  {
    q: "I have another question.",
    a: "We are here to help! If you have any other questions, feel free to reach us at:\nsupport@viralgenie.io\nWe typically respond within 12 hours on weekdays."
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);
    return (
    <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold text-center mb-10">Still Have Questions?</h2>
        <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full">
          {FAQS.map((item, idx) => (
            <div key={idx} className="rounded-xl bg-background/80 border border-border/50">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-base md:text-lg font-medium text-foreground focus:outline-none"
                onClick={() => setOpen(open === idx ? -1 : idx)}
              >
                <span>{item.q}</span>
                <span className="ml-4 text-xl">{open === idx ? "×" : "+"}</span>
              </button>
              {open === idx && (
                <div className="px-6 pb-4 text-muted-foreground text-sm md:text-base animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQ;
