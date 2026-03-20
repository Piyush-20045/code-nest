export default function Services() {
  const services = [
    { title: "Business Websites", desc: "Clean, responsive websites for your business" },
    { title: "Portfolio Websites", desc: "Personal branding for creators & professionals" },
    { title: "E-commerce", desc: "Simple online stores to sell products" },
    { title: "Website Redesign", desc: "Improve your existing website" }
  ];

  return (
    <section id="services" className="w-full max-w-[1200px] mx-auto py-20 px-4">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-foreground">Services we offer</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-card p-6 rounded-md shadow-sm border border-white/5 hover:border-primary/20 transition-colors flex flex-col h-full hover:-translate-y-1 transform duration-300">
            <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm flex-grow">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
