import Image from "next/image"
import { CheckCircle2, Users, Award, TrendingUp } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ]

  const features = [
    "Expert team of certified IT professionals",
    "24/7 dedicated customer support",
    "Customized solutions for your business",
    "Industry-leading security standards",
  ]

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/about-team.jpg"
                alt="Our professional IT consulting team"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative accent block */}
            <div className="absolute -bottom-6 -right-6 hidden md:block w-48 h-48 bg-primary -z-0" />
            <div className="absolute -top-6 -left-6 hidden md:block w-32 h-32 border-4 border-accent -z-0" />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-primary text-balance leading-tight">
              Empowering Businesses Through Technology
            </h2>

            <p className="text-muted-foreground leading-relaxed text-pretty">
              At ITG, we believe that technology should empower your business, not complicate it. For over 15 years,
              we&apos;ve been helping companies of all sizes navigate the complex world of IT with confidence and clarity.
              Our mission is to deliver innovative, reliable, and scalable solutions that drive real business results.
            </p>

            <ul className="flex flex-col gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 mt-2 border-t border-border">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="flex flex-col gap-2">
                    <Icon className="w-6 h-6 text-accent" />
                    <div className="text-2xl md:text-3xl font-serif text-primary">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
