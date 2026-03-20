export default function Projects() {
  const projects = [
    { name: "Coffee Roasters", desc: "Local cafe website with online ordering", tech: "Next.js, Tailwind", img: "https://images.unsplash.com/photo-1497935586351-b6a84f3e3e06?w=800&q=80" },
    { name: "FitLife Gym", desc: "Membership portal and class schedules", tech: "React, Node.js", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
    { name: "Artisan Woodworks", desc: "E-commerce store for custom furniture", tech: "Shopify, Next.js", img: "https://images.unsplash.com/photo-1610505466023-eeb251f22495?w=800&q=80" },
  ];

  return (
    <section id="work" className="w-full max-w-[1200px] mx-auto py-20 px-4">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-foreground">Our Work</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-card rounded-md overflow-hidden shadow-sm border border-white/5 flex flex-col group">
            <div className="relative w-full h-48 overflow-hidden">
              <img src={p.img} alt={p.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow">{p.desc}</p>
              <div className="text-xs text-primary/80 mb-6">{p.tech}</div>
              <button className="w-full bg-background border border-white/10 text-foreground py-2 rounded-md font-medium text-sm hover:bg-white/5 transition-colors">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
