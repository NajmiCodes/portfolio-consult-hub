import { Layout } from "@/components/layout/Layout";
import { GraduationCap, Trophy, Code, Briefcase } from "lucide-react";

const education = {
  institution: "Minhaj University",
  degree: "BS Software Engineering",
  location: "Lahore, Pakistan",
  period: "Oct 2020 – Oct 2024",
  cgpa: "3.67/4.00",
  project: {
    title: "Image Forgery Detection System",
    description: "Built Image forgery detection application using custom CNN on CASIA-2 Dataset, achieving 85% accuracy.",
    tools: ["Streamlit", "Python3", "Jupyter", "VS Code"],
  },
};

const achievements = [
  "Achieved 130 scores in Duolingo English Test (equivalent to 7.0 IELTS Bands)",
  "Secured 2nd place in RAISE Hackathon; 15+ international AI hackathons",
  "Won Harvard CS50x Puzzle Day (9/9 puzzles solved)",
  "Participated in UC Berkeley CALICO Informatics Competition",
  "Competed in MIT Informatics Tournament 2025",
  "Participated in Advent of Code 2024 season",
  "50% fee waiver throughout degree (1st in Merit Scholarship Test)",
];

const skills = {
  "Programming": ["Python"],
  "Web & Frameworks": ["Streamlit", "Django", "FastAPI", "HTML/CSS", "Bootstrap", "Material UI"],
  "Databases": ["MySQL", "PostgreSQL", "Firebase"],
  "Data Science": ["Pandas", "NumPy", "Matplotlib", "TensorFlow", "Keras", "PyTorch"],
  "Machine Learning": ["Model Training", "LLM Finetuning", "EDA"],
  "DevOps": ["Git", "GitHub", "Vercel"],
};

const experience = [
  {
    type: "Internship",
    title: "Python Developer Intern",
    organization: "IREG-IT",
    location: "Lahore, Pakistan",
    period: "July 2024 – Sep 2024",
    points: [
      "Gained hands-on experience with Linux operating system",
      "Worked on Asterisk (Linux-based VOIP service provider)",
      "Successfully implemented conference call system using Asterisk",
    ],
  },
  {
    type: "Volunteer",
    title: "GenAI Course Trainer, Mentor & Judge",
    organization: "Aptech and ASPIRE Pakistan",
    period: "Feb 22 – Feb 28, 2025",
    points: [
      "Delivered Generative AI Session to over 500 non-technical audiences",
      "Mentored participants and judged projects in Gen AI hackathon",
      "Conducted ML workshops and webinars for undergraduates",
    ],
  },
  {
    type: "Volunteer",
    title: "Instructor & Moderator",
    organization: "E-Learning Platforms",
    points: [
      "Taught Data Analysis course to underprivileged students",
      "Taught IELTS & Duolingo course to underprivileged students",
    ],
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6 animate-slide-up">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              I'm a Software Engineer with a passion for AI/ML, competitive programming, 
              and making technology accessible. Currently focused on building intelligent 
              systems and helping graduate aspirants achieve their academic dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 border-b border-border">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Education</h2>
          </div>

          <div className="card-elevated p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {education.institution}
                </h3>
                <p className="text-muted-foreground">{education.degree}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{education.location}</p>
                <p className="text-sm text-muted-foreground">{education.period}</p>
                <p className="text-sm font-medium text-primary mt-1">CGPA: {education.cgpa}</p>
              </div>
            </div>

            <div className="border-t border-border pt-4 mt-4">
              <p className="text-sm font-medium text-foreground mb-2">Final Year Project:</p>
              <p className="font-display font-semibold text-foreground mb-1">
                {education.project.title}
              </p>
              <p className="text-sm text-muted-foreground mb-2">{education.project.description}</p>
              <div className="flex flex-wrap gap-2">
                {education.project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 border-b border-border">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Achievements</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-muted/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 border-b border-border">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Code className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Technical Skills</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="card-elevated p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-lg bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground">Experience</h2>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="card-elevated p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">
                    {exp.type}
                  </span>
                  {exp.period && (
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  )}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{exp.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {exp.organization}
                  {exp.location && ` • ${exp.location}`}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
