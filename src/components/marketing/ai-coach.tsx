import { MagicCard } from "../ui/magic-card";
import Container from "../global/container";
import { Bot, TrendingUp, CalendarCheck } from "lucide-react";
import Image from "next/image";

const AiCoach = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">Not Just an AI.</h2>
          <p className="text-base md:text-lg text-accent-foreground/80 max-w-xl mx-auto">
            Meet Your 24/7 AI Growth Coach
          </p>
        </div>
      </Container>
      <Container>
        <div className="rounded-2xl border border-border/60 bg-background/80 shadow-lg max-w-4xl mx-auto w-full flex flex-col md:flex-row items-stretch overflow-hidden mb-8">
          <div className="flex-1 flex flex-col justify-center p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Create Your Growth Plan</h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Tell your AI Coach what you want — it builds a clear 30-day plan with daily actions tailored to your niche, audience, and time.<br />
            </p>
            <a href="https://app.viralgenie.io" className="inline-block w-fit px-6 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-orange-500 hover:text-white transition text-base md:text-lg">Get My Plan</a>
          </div>
          <div className="flex-1 flex items-center justify-center md:border-l border-border/30 p-8 md:p-10 bg-transparent">
            <Image
              src="/images/aicoach.png"
              alt="AI Coach Demo"
              width={240}
              height={480}
              className="rounded-xl border border-border/40 shadow-lg object-contain w-auto h-72 md:h-96"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          <div className="rounded-2xl border border-border/60 bg-background/80 shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/40 text-orange-400 text-xs font-semibold uppercase tracking-wide">
                <CalendarCheck className="w-4 h-4 mr-1" /> Daily High-Impact Tasks
              </span>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              No more overthinking. You'll get one proven move every day — post this, tweak that, DM this person.<br />Actionable. Fast. Built for solo momentum.
            </p>
            <div className="mt-auto">
              <Image
                src="/images/feature-one.svg"
                alt="Daily High-Impact Tasks"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-background/80 shadow-lg p-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-900/40 text-orange-400 text-xs font-semibold uppercase tracking-wide">
                <TrendingUp className="w-4 h-4 mr-1" /> Real-Time Insights
              </span>
            </div>
            <p className="text-base text-muted-foreground mb-4">
              The Coach watches what works, what doesn't, and why — then gives you feedback so you're not shooting in the dark.<br />Growth becomes predictable, not accidental.
            </p>
            <div className="mt-auto">
              <Image
                src="/images/feature-two.svg"
                alt="Real-Time Insights"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AiCoach; 