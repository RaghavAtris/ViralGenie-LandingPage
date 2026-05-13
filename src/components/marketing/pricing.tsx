"use client";

import { PLANS } from "@/constants";
import { PLAN } from "@/constants/plans";
import { cn } from "@/lib";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import Container from "../global/container";
import { Button } from "../ui/button";

type Plan = "monthly" | "annually";

const Pricing = () => {

    const [billPlan, setBillPlan] = useState<Plan>("monthly");

    const handleSwitch = () => {
        setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
    };

    return (
        <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto">

            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <Container>
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                            Find the right plan that suits <br className="hidden lg:block" /> <span className="font-subheading italic">your needs</span>
                        </h2>
                        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                            We believe good products should not come at enterprise cost to everyone. 90% cheaper than other platforms.
                        </p>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="flex items-center justify-center space-x-4 mt-6">
                        <span className="text-base font-medium">Monthly</span>
                        <button onClick={handleSwitch} className="relative rounded-full focus:outline-none">
                            <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-orange-500"></div>
                            <div
                                className={cn(
                                    "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-500 ease-in-out top-1 left-1 rounded-full bg-white",
                                    billPlan === "annually" ? "translate-x-6" : "translate-x-0"
                                )}
                            />
                        </button>
                        <span className="text-base font-medium">Annually</span>
                    </div>
                </Container>
            </div>

            <div className="grid w-full grid-cols-1 lg:grid-cols-2 pt-8 lg:pt-12 gap-4 lg:gap-6 max-w-4xl mx-auto">
                {PLANS.map((plan, idx) => (
                    <Container key={idx} delay={0.1 * idx + 0.2}>
                        <Plan key={plan.id} plan={plan} billPlan={billPlan} />
                    </Container>
                ))}
            </div>
        </div>
    );
};

const Plan = ({ plan, billPlan }: { plan: PLAN, billPlan: Plan }) => {
    // Helper function to transform features based on billing plan
    const getTransformedFeatures = (features: string[], billPlan: Plan) => {
        return features.map(feature => {
            if (billPlan === "annually") {
                // Transform content generation numbers for annual billing
                if (feature.includes("500 Ideas Per Platform")) {
                    return "6000 Ideas Per Platform";
                }
                if (feature.includes("1000 Ideas Per Platform")) {
                    return "12000 Ideas Per Platform";
                }
                if (feature.includes("200 Posts Per Platform")) {
                    return "2400 Posts Per Platform";
                }
                if (feature.includes("400 Posts Per Platform")) {
                    return "4800 Posts Per Platform";
                }
                if (feature.includes("3 Social Media Platforms")) {
                    return "3 Social Media Channels";
                }
                if (feature.includes("3 Social Medias Supported")) {
                    return "3 Social Media Channels";
                }
                if (feature.includes("2000 AI Coach Messages")) {
                    return "2000 AI Coach Messages";
                }
                if (feature.includes("4000 AI Coach Messages")) {
                    return "4000 AI Coach Messages";
                }
            }
            return feature;
        });
    };

    const transformedFeatures = getTransformedFeatures(plan.features, billPlan);

    return (
        <div className={cn(
            "flex flex-col relative rounded-2xl lg:rounded-3xl transition-all bg-background/ items-start w-full border border-foreground/10 overflow-hidden",
            plan.title === "Founder" && "border-orange-500"
        )}>
            {plan.title === "Founder" && (
                <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-orange-600 rounded-2xl lg:rounded-3xl blur-[8rem] -z-10"></div>
            )}

            <div className="p-4 md:p-8 flex rounded-t-2xl lg:rounded-t-3xl flex-col items-start w-full relative">
                <h2 className="font-medium text-xl text-foreground pt-5">
                    {plan.title}
                </h2>
                <h3 className="mt-3 text-3xl font-medium md:text-5xl">
                    <NumberFlow
                        value={billPlan === "monthly" ? plan.monthlyPrice : plan.annuallyPrice}
                        suffix={billPlan === "monthly" ? "/mo" : "/yr"}
                        format={{
                            currency: "USD",
                            style: "currency",
                            currencySign: "standard",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                            currencyDisplay: "narrowSymbol"
                        }}
                    />
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mt-2">
                    {plan.desc}
                </p>
            </div>
            <div className="flex flex-col items-start w-full px-4 py-2 md:px-8">
                <a href="https://app.viralgenie.io" className="w-full">
                    <Button size="lg" variant={plan.title === "Founder" ? "blue" : "white"} className="w-full">
                    {plan.buttonText}
                </Button>
                </a>
                <div className="h-8 overflow-hidden w-full mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={billPlan}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-sm text-center text-muted-foreground mt-3 mx-auto block"
                        >
                            {billPlan === "monthly" ? (
                                "Billed monthly"
                            ) : (
                                "Billed in one annual payment"
                            )}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex flex-col items-start w-full p-5 mb-4 ml-1 gap-y-2">
                <span className="text-base text-left mb-2">
                    Includes: 
                </span>
                {transformedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center justify-start gap-2">
                        <div className="flex items-center justify-center">
                            <CheckIcon className="size-5" />
                        </div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pricing;
