import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ViralGenie",
  description: "Privacy policy for ViralGenie's AI-powered content creation and growth platform.",
};

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              At ViralGenie, your privacy is important to us. This Privacy Policy explains how we collect, 
              use, and protect your personal information when you use our website, app, and services.
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, social media followers</li>
                <li><strong>Account Data:</strong> Preferences, usage history, subscription plan</li>
                <li><strong>Device & Technical Data:</strong> Browser type, IP address, device info</li>
                <li><strong>Content Data:</strong> Social media content inputted by you for analysis or generation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Data</h2>
              <p className="mb-4">We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deliver and improve our services</li>
                <li>Personalize your AI coaching experience</li>
                <li>Process payments securely via Stripe or other providers</li>
                <li>Communicate with you (support, updates, promotions)</li>
                <li>Analyze usage trends to improve performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Sharing Your Information</h2>
              <p className="mb-4">We do not sell your data. We only share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trusted third-party services (e.g., payment processors, analytics)</li>
                <li>Legal authorities if required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p>
                We use industry-standard encryption, access controls, and secure servers to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Rights</h2>
              <p className="mb-4">You can request to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, modify, or delete your data</li>
                <li>Opt-out of email communications</li>
                <li>Cancel your account anytime</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
              <p>
                We use cookies for essential website functionality and analytics. You can control cookie 
                settings via your browser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
              <p>
                ViralGenie is not intended for children under 13. We do not knowingly collect data from them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
              <p>
                We may update this policy. If we make major changes, we'll notify you via email or app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p>
                For questions, email us at{" "}
                <a href="mailto:support@viralgenie.io" className="text-primary hover:underline">
                  support@viralgenie.io
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 