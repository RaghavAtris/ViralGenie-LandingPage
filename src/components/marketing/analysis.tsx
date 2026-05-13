import { DownloadIcon, FilterIcon, TrendingUpIcon, X, Check } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        You've built enough in silence.<br />
                        <span className="font-subheading italic">let the world see it.</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Founders shouldn't have to choose between building their product and building an audience.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full max-w-5xl mx-auto">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full min-h-[420px]">
                        <MagicCard
                            gradientFrom="#fb923c"
                            gradientTo="#ea580c"
                            gradientColor="rgba(249,115,22,0.1)"
                            className="p-6 lg:p-8 w-full h-full min-h-[420px]"
                        >
                            <div className="absolute bottom-0 right-0 bg-orange-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-orange-100 rounded-full">
                                        <X className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">
                                        Without ViralGenie
                                </h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            You create content, but no one converts
                                        </p>
                                            </div>
                                    <div className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            You try to "be everywhere" and end up nowhere
                                        </p>
                                            </div>
                                    <div className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            You get engagement but no conversions
                                        </p>
                                        </div>
                                    <div className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            You follow advice that wasn't made for your niche
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            Wasted hours planning, writing, editing… for nothing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50 h-full min-h-[420px]">
                        <MagicCard
                            gradientFrom="#fb923c"
                            gradientTo="#ea580c"
                            gradientColor="rgba(249,115,22,0.1)"
                            className="p-6 lg:p-8 w-full h-full min-h-[420px]"
                        >
                            <div className="absolute bottom-0 right-0 bg-orange-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-orange-100 rounded-full">
                                        <Check className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <h3 className="text-2xl font-semibold text-orange-600">
                                        With ViralGenie
                                </h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            Get daily, tailored growth tasks built around your niche and voice
                                        </p>
                                            </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            Never wonder what to post — your strategy is handled
                                        </p>
                                        </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            Build a real audience of people who trust you and want to buy
                                        </p>
                                        </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            You finally have a system built for you that actually works
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                                        <p className="text-base text-muted-foreground">
                                            Save 10+ hours every week with viral ideas, posts, and daily strategies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
