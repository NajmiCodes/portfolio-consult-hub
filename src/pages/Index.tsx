import { Link } from "react-router-dom";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center">
        <div className="section-container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Open to collaboration & consulting
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Hi, I'm{" "}
              <span className="gradient-text">Najmi Hassan</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Software Engineer passionate about AI/ML, building intelligent systems, 
              and helping graduate aspirants to achieve their academic goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/services">
                  <FileText className="w-5 h-5" />
                  Book a Review
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Need Help with Your Application?
            </h2>
            <p className="text-muted-foreground mb-8">
              Get expert reviews on your CV, SOP, or schedule a 1-on-1 consultation 
              to boost your MS/PhD application.
            </p>
            <Button asChild variant="gradient" size="lg">
              <Link to="/services">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
