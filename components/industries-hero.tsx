import Image from "next/image"

export function IndustriesHero() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="relative h-[420px] md:h-[480px]">
        <Image
          src="/images/industries-hero.jpg"
          alt="City skyline with waterfront and modern buildings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/5" />
      </div>

      {/* Navy strip that the card will overlap */}
      <div className="h-16 bg-primary" />

      {/* Centered overlapping card */}
      <div className="absolute left-0 right-0 top-[240px] md:top-[280px] z-10 pointer-events-none">
        <div className="container mx-auto px-4">
          <div className="flex justify-center pointer-events-auto">
            <div className="bg-background max-w-2xl w-full shadow-xl">
              <div className="p-10 md:p-14 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight text-balance">
                  IT Solutions
                  <br />
                  for Your Industry
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to account for overlapping card */}
      <div className="h-[200px] md:h-[180px]" />
    </section>
  )
}
