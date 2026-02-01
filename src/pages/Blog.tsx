import { Layout } from "@/components/layout/Layout";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "How to Write a Compelling Statement of Purpose",
    excerpt: "Your SOP is your chance to tell your story. Learn the key elements that make admissions committees take notice.",
    category: "Application Tips",
    date: "2025-01-28",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Top 5 Mistakes in MS/PhD Applications",
    excerpt: "Avoid these common pitfalls that can hurt your chances of getting into your dream program.",
    category: "Application Tips",
    date: "2025-01-25",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Building a Strong Research Portfolio",
    excerpt: "Tips on how to showcase your research experience effectively for graduate school applications.",
    category: "Research",
    date: "2025-01-20",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Preparing for the Duolingo English Test",
    excerpt: "A comprehensive guide to achieving a high score on the Duolingo English Test for university applications.",
    category: "Test Prep",
    date: "2025-01-15",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&h=400&fit=crop",
  },
  {
    id: "5",
    title: "How to Choose the Right University",
    excerpt: "Factors to consider when selecting universities for your MS/PhD applications.",
    category: "Application Tips",
    date: "2025-01-10",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Getting Strong Letters of Recommendation",
    excerpt: "How to approach professors and get recommendation letters that stand out.",
    category: "Application Tips",
    date: "2025-01-05",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Application Tips", "Research", "Test Prep"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              Blog & Resources
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Tips, guides, and insights to help you navigate your MS/PhD application journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="card-elevated overflow-hidden group animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-primary font-medium hover:underline"
                    >
                      Read
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 border-t border-border">
        <div className="section-container">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Subscribe to Updates
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest tips and guides delivered straight to your inbox.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
