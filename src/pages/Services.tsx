import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { FileText, MessageSquare, Video, Check, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "cv",
    icon: FileText,
    title: "CV Review",
    description: "Get detailed feedback on your CV to make it stand out to admissions committees.",
    price: 3,
    features: [
      "Comprehensive structure review",
      "Content clarity improvements",
      "Formatting suggestions",
      "Industry-standard recommendations",
      "48-hour turnaround",
    ],
    popular: false,
  },
  {
    id: "sop",
    icon: MessageSquare,
    title: "SOP Review",
    description: "Expert review of your Statement of Purpose for MS/PhD applications.",
    price: 5,
    features: [
      "Narrative flow analysis",
      "Motivation clarity check",
      "Grammar & style editing",
      "Research fit alignment",
      "Personalized feedback",
      "72-hour turnaround",
    ],
    popular: true,
  },
  {
    id: "call",
    icon: Video,
    title: "1-to-1 Online Call",
    description: "Personalized consultation to discuss your application strategy.",
    price: 10,
    features: [
      "30-minute video call",
      "Application strategy discussion",
      "University selection guidance",
      "Profile evaluation",
      "Q&A session",
      "Follow-up summary email",
    ],
    popular: false,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleBookNow = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowModal(true);
  };

  const service = services.find((s) => s.id === selectedService);

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Academic Consulting Services
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Get expert guidance on your MS/PhD applications. From CV reviews to 
              personalized consultations, I'll help you put your best foot forward.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`card-elevated p-6 flex flex-col relative animate-slide-up ${
                  service.popular ? "ring-2 ring-primary" : ""
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                <div className="mb-6">
                  <span className="font-display text-4xl font-bold text-foreground">
                    ${service.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">USD</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={service.popular ? "gradient" : "outline"}
                  className="w-full"
                  onClick={() => handleBookNow(service.id)}
                >
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <h2 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "How do I submit my documents?",
                a: "After booking, you'll receive an email with instructions to submit your CV or SOP via Google Drive or email attachment.",
              },
              {
                q: "What's the turnaround time?",
                a: "CV reviews are completed within 48 hours, SOP reviews within 72 hours. Consultations are scheduled based on mutual availability.",
              },
              {
                q: "Can I request revisions?",
                a: "Yes! One round of follow-up questions or clarifications is included in every review package.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept payments via PayPal, Wise, and bank transfer for international clients.",
              },
            ].map((faq, index) => (
              <div key={index} className="card-elevated p-5">
                <h3 className="font-display font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 animate-fade-in">
          <div className="bg-card rounded-2xl max-w-md w-full p-6 shadow-xl animate-slide-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-xl text-foreground">
                Book {service.title}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-muted/50">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">{service.title}</span>
                  <span className="font-display font-semibold text-foreground">
                    ${service.price}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="pt-4 border-t border-border">
                <Button variant="gradient" className="w-full" size="lg">
                  Proceed to Payment
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  You'll be redirected to our secure payment page
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Services;
