import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import LanguageSupport from "@/components/marketing/lang-support";
import Pricing from "@/components/marketing/pricing";
import AiCoach from "@/components/marketing/ai-coach";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <Analysis />
            <div id="features">
                <Features />
            </div>
            <Companies />
            <AiCoach />
            <div id="integration">
                <Integration />
            </div>
            <div id="pricing">
                <Pricing />
            </div>
            <LanguageSupport />
            <CTA />
        </Wrapper>
    )
};

export default HomePage
