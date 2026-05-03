const industries = [
  {
    name: "Agriculture",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.",
  },
  {
    name: "Banking & Financial Services",
    description:
      "Secure, scalable IT infrastructure tailored for financial institutions. From compliance-ready data management to fraud prevention and real-time analytics, our solutions help banks and fintech companies modernize with confidence.",
  },
  {
    name: "Healthcare",
    description:
      "HIPAA-compliant systems, electronic health records integration, and telemedicine platforms. We help hospitals, clinics, and healthcare providers deliver better patient care through reliable technology.",
  },
  {
    name: "Manufacturing",
    description:
      "Smart factory solutions, IoT integration, and supply chain optimization. Our services empower manufacturers to embrace Industry 4.0 with automated workflows and predictive maintenance systems.",
  },
  {
    name: "Retail & E-Commerce",
    description:
      "Omnichannel platforms, POS systems, and customer analytics. We build the digital backbone that helps retailers create seamless shopping experiences across online and physical stores.",
  },
  {
    name: "Education",
    description:
      "Learning management systems, virtual classroom platforms, and campus-wide connectivity. We partner with schools and universities to create modern, engaging learning environments.",
  },
  {
    name: "Government & Public Sector",
    description:
      "Citizen-facing digital services, secure data infrastructure, and modernization initiatives. Our team helps government agencies deliver efficient, accessible services to the communities they serve.",
  },
  {
    name: "Energy & Utilities",
    description:
      "Smart grid technology, SCADA systems, and sustainability-focused IT solutions. We help energy providers optimize operations while meeting regulatory requirements and environmental goals.",
  },
]

export function IndustriesList() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {industries.map((industry) => (
            <article key={industry.name} className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                {industry.name}
              </h2>
              <div className="w-12 h-0.5 bg-accent" />
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {industry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
