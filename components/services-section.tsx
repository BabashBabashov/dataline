import Link from "next/link"

const topServices = [
  {
    title: "Cloud Solutions",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me.",
  },
  {
    title: "Managed IT Services",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me.",
  },
  {
    title: "Disaster Recovery",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me.",
  },
]

const bottomServices = [
  {
    title: "Cloud Desktop",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me.",
  },
  {
    title: "Network Solutions",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me.",
  },
  {
    title: "Support Consulting",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me.",
  },
]

function ServiceCard({
  title,
  description,
  variant = "onDark",
}: {
  title: string
  description: string
  variant?: "onDark" | "onLight"
}) {
  const frameClass =
    variant === "onDark"
      ? "border-primary-foreground/40"
      : "border-primary/30"

  return (
    <div className="relative">
      {/* Offset frame behind the card (bottom-right) */}
      <div
        className={`absolute inset-0 translate-x-2 translate-y-2 border ${frameClass} pointer-events-none`}
        aria-hidden="true"
      />
      {/* Card content */}
      <div className="relative bg-secondary p-6 md:p-8">
        <h3 className="text-xl font-semibold text-primary mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        <Link
          href="#"
          className="inline-flex items-center text-accent text-sm font-medium hover:underline"
        >
          <span className="mr-1">+</span> Learn More
        </Link>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services">
      {/* Navy section: heading + description only */}
      <div className="bg-primary pt-16 md:pt-20 pb-0">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Services
            </h2>
            <p className="text-primary-foreground/80 text-sm max-w-xl leading-relaxed">
              I&apos;m a paragraph.{" "}
              <Link href="#" className="text-accent hover:underline">
                Click here to add your own text and edit me.
              </Link>
              <br />
              It&apos;s easy. Just click &quot;Edit Text&quot; or double click me.
            </p>
          </div>
        </div>
      </div>

      {/* Overlap band: top half navy, bottom half white */}
      <div className="relative">
        <div
          className="absolute inset-x-0 top-0 h-1/2 bg-primary"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-background" aria-hidden="true" />
        <div className="relative container mx-auto px-4 pt-12 md:pt-16 pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
              {topServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  variant="onDark"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* White section: second row of cards */}
      <div className="bg-background pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start">
              {bottomServices.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  variant="onLight"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
