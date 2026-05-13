import Container from "../global/container";
import { CheckCircle, Link, Bot, Repeat } from "lucide-react";
import { MagicCard } from "../ui/magic-card";
import React from "react";

const steps = [
  {
    icon: <Link className="w-7 h-7 text-orange-400" />, // Step 1 icon
    title: "Connect Your Socials & Website",
    description: "Just drop your handles & Website link, ViralGenie analyzes your business and builds the foundation."
  },
  {
    icon: <Bot className="w-7 h-7 text-orange-400" />, // Step 2 icon
    title: "AI Coach Builds A 30 Day Roadmap",
    description: "AI Coach Generates a 30 day Roadmap & organize all your content into a daily, weekly, and monthly calendar so you know exactly what to post, when to post it."
  },
  {
    icon: <Repeat className="w-7 h-7 text-orange-400" />, // Step 3 icon
    title: "Post. Go Viral. Repeat.",
    description: "You'll get daily viral content ideas, post scripts, and proven growth strategies for your niche and target audience that actually get you customers. Users see visible results under 7 days."
  }
];

const Companies = () => {
    return (
    <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 overflow-hidden">
            <Container>
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug text-center">
            Get more customers in <span className="font-subheading italic text-white">3 steps</span>
          </h2>
                </div>
            </Container>
            <Container delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {steps.map((step, idx) => (
            <Container key={idx} delay={0.1 + idx * 0.1} className="relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors">
              <MagicCard
                gradientFrom="#fb923c"
                gradientTo="#ea580c"
                gradientColor="rgba(249,115,22,0.15)"
                className="p-6 lg:p-8 lg:rounded-3xl w-full h-full"
              >
                <div className="flex flex-col items-center mb-4">
                  <span className="text-3xl font-bold text-orange-500 mb-2">{idx + 1}</span>
                </div>
                <h5 className="text-xl font-semibold mb-4 text-foreground text-center w-full">{step.title}</h5>
                <p className="text-sm text-muted-foreground text-center">
                  {step.description}
                </p>
              </MagicCard>
            </Container>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Companies;
