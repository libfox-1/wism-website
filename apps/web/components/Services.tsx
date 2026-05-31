import { Workflow, Database, Bot, Plug } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Dynamics 365 CE",
    desc: "Sales, Customer Service and Marketing — implemented or improved to fit how your team actually works.",
  },
  {
    icon: Workflow,
    title: "Power Platform",
    desc: "Power Apps, Power Automate and Dataverse to replace spreadsheets and clunky legacy tooling.",
  },
  {
    icon: Bot,
    title: "Copilot & AI",
    desc: "Copilot Studio agents and AI embedded in your CRM, so teams get useful answers faster.",
  },
  {
    icon: Plug,
    title: "Integrations & Advisory",
    desc: "Connect Dynamics to the rest of your stack, or get a second opinion on architecture and approach.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Focused on one stack.
          </h2>
          <p className="text-lg text-muted-foreground">
            We work exclusively with the Microsoft Business Applications platform — so you get
            opinionated, hands-on delivery instead of generalist guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative bg-gradient-card border border-border/60 rounded-2xl p-7 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {s.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
