import { Link } from "react-router-dom";
import { ArrowRight, Code, FileText, Users, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const stats = [
  { value: "15+", label: "Hackathons" },
  { value: "92%", label: "ML Accuracy" },
  { value: "3.67", label: "CGPA" },
  { value: "130", label: "Duolingo Score" },
];

const highlights = [
  {
    icon: Award,
    title: "Competition Winner",
    description: "2nd place RAISE Hackathon, Harvard CS50x Puzzle Day winner",
  },
  {
    icon: Code,
    title: "AI/ML Expertise",
    description: "Python, TensorFlow, PyTorch, and cutting-edge LLM technologies",
  },
  {
    icon: Users,
    title: "Community Leader",
    description: "GenAI trainer for 500+ audiences, mentor and judge at hackathons",
  },
];

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
              and helping aspiring researchers achieve their academic goals.
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

      {/* Stats Section */}
      <section className="py-16 border-b border-border">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A blend of technical excellence, competitive spirit, and a passion for teaching.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card-elevated p-6 animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
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
