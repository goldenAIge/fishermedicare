import Image from "next/image";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col">
      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Mobile: logo centred on top row, links beneath */}
          <div className="flex flex-col items-center py-3 gap-2 sm:hidden">
            <a href="#hero" className="flex items-center justify-center">
              <Image
                src="/images/stephanie-fisher-logo-v2.png"
                alt="Fisher Medicare"
                width={1254}
                height={1254}
                sizes="140px"
                className="h-[140px] w-auto"
                priority
              />
            </a>
            <nav aria-label="Site navigation">
              <ul className="flex">
                {(
                  [
                    ["#about", "About"],
                    ["#services", "Services"],
                    ["#contact", "Contact"],
                  ] as [string, string][]
                ).map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block px-4 py-2 text-lg text-panel/80 hover:text-panel transition-colors min-h-[44px] flex items-center font-medium"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Desktop: logo left, links right */}
          <div className="hidden sm:flex items-center justify-between h-56">
            <a href="#hero" className="flex items-center">
              <Image
                src="/images/stephanie-fisher-logo-v2.png"
                alt="Fisher Medicare"
                width={1254}
                height={1254}
                sizes="215px"
                className="h-[215px] w-auto"
                priority
              />
            </a>
            <nav aria-label="Site navigation">
              <ul className="flex">
                {(
                  [
                    ["#about", "About"],
                    ["#services", "Services"],
                    ["#contact", "Contact"],
                  ] as [string, string][]
                ).map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block px-5 py-2 text-3xl text-panel/80 hover:text-panel transition-colors min-h-[44px] flex items-center font-semibold"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero — slate emphasis panel ── */}
        <section
          id="hero"
          className="bg-panel py-20 sm:py-28"
          aria-label="Introduction"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center gap-12 sm:gap-16">
              {/* Text: first on mobile, left column on desktop */}
              <div className="flex-1 text-center order-2 sm:order-1">
                {/* Centred company name with flanking coral rules */}
                <div className="flex items-center justify-center gap-3 mb-5">
                  <span className="block h-px w-10 bg-coral rounded" />
                  <p className="text-2xl sm:text-3xl font-bold text-white tracking-wide whitespace-nowrap">
                    Fisher Medicare
                  </p>
                  <span className="block h-px w-10 bg-coral rounded" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
                  Stephanie Fisher
                </h1>
                <p className="text-xl sm:text-2xl text-white/80 mb-2">
                  Licensed Medicare Insurance Agent
                </p>
                <p className="text-lg text-coral mb-10 font-medium">Spokane, WA</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+15098692537"
                    className="inline-flex items-center justify-center bg-coral text-white font-semibold px-7 py-4 rounded-xl text-lg hover:opacity-90 transition-opacity min-h-[52px] shadow-lg"
                  >
                    Call 509-869-2537
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center border-2 border-white/60 text-white font-semibold px-7 py-4 rounded-xl text-lg hover:bg-white/10 hover:border-white transition-colors min-h-[52px]"
                  >
                    Get in touch
                  </a>
                </div>
              </div>

              {/* Portrait — right on desktop, above text on mobile (full uncropped) */}
              <div className="w-full max-w-[220px] sm:w-72 mx-auto sm:mx-0 shrink-0 order-1 sm:order-2">
                <Image
                  src="/images/stephanie-hero-v2.png"
                  alt="Stephanie Fisher, licensed Medicare insurance agent in Spokane, WA"
                  width={512}
                  height={1024}
                  sizes="(max-width: 640px) 220px, 288px"
                  className="rounded-2xl shadow-lg w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="bg-lgray py-20 sm:py-28" aria-labelledby="about-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-panel mb-12 text-center"
            >
              About Stephanie
            </h2>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12">
              {/* About headshot */}
              <div className="w-full max-w-[220px] mx-auto sm:mx-0 shrink-0">
                <Image
                  src="/images/stephanie-about-v2.png"
                  alt="Stephanie Fisher, Medicare insurance agent in Spokane, WA"
                  width={400}
                  height={600}
                  sizes="220px"
                  className="rounded-2xl shadow-md w-full h-auto"
                />
              </div>

              {/* Bio — verbatim per CLAUDE.md */}
              <div className="space-y-5 text-panel/80 leading-relaxed">
                <p>
                  I genuinely care about people and am passionate about helping my clients make
                  informed Medicare decisions with confidence. My goal is to simplify the process
                  and make choosing the right Medicare plan as easy and stress-free as possible.
                </p>
                <p>
                  I believe in treating every client like family — with honesty, patience, and
                  personalized service. Whether you are new to Medicare or reviewing your current
                  coverage, I am committed to being a trusted resource and helping you feel
                  confident in your healthcare choices for years to come.
                </p>
                <p>
                  I look forward to hearing from you and helping make Medicare a little less
                  complicated and a lot more manageable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What I Do — slate card emphasis blocks ── */}
        <section
          id="services"
          className="bg-white py-20 sm:py-28"
          aria-labelledby="services-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-panel mb-12 text-center"
            >
              What I Do
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-panel rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-1 bg-coral rounded mb-6" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white mb-4">Medicare Advantage</h3>
                <p className="text-white/80 leading-relaxed">
                  Medicare Advantage (Part C) bundles your Original Medicare benefits into a
                  single plan offered by a private insurer. Most plans also include extras like
                  dental, vision, hearing, and prescription drug coverage. I&apos;ll help you
                  compare the plans available in your area and find one that fits your doctors,
                  medications, and budget.
                </p>
              </article>

              <article className="bg-panel rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-1 bg-coral rounded mb-6" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white mb-4">Medicare Supplement</h3>
                <p className="text-white/80 leading-relaxed">
                  Medicare Supplement plans — also called Medigap — work alongside Original
                  Medicare to cover the out-of-pocket costs Medicare leaves behind, like copays,
                  coinsurance, and deductibles. With a Supplement plan, your costs become more
                  predictable and you can see any doctor or specialist who accepts Medicare,
                  anywhere in the country.
                </p>
              </article>

              <article className="bg-panel rounded-2xl p-8 shadow-sm">
                <div className="w-12 h-1 bg-coral rounded mb-6" aria-hidden="true" />
                <h3 className="text-xl font-bold text-white mb-4">Part D — Prescriptions</h3>
                <p className="text-white/80 leading-relaxed">
                  A standalone Part D plan helps cover the cost of your prescription medications.
                  Each plan has its own list of covered drugs and pricing, so it&apos;s important
                  to match your medications to the right plan. I&apos;ll review your drug list
                  with you and help you enroll at the right time — so your prescriptions stay
                  affordable and you avoid late-enrollment penalties.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section
          id="contact"
          className="bg-lgray py-20 sm:py-28"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-panel mb-12 text-center"
            >
              Get in Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                <h3 className="text-xl font-semibold text-panel mb-6">Contact Information</h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm font-semibold text-panel/50 uppercase tracking-wide mb-1">
                      Phone
                    </dt>
                    <dd>
                      <a
                        href="tel:+15098692537"
                        className="text-panel hover:text-coral text-xl font-semibold transition-colors min-h-[44px] inline-flex items-center"
                      >
                        509-869-2537
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-semibold text-panel/50 uppercase tracking-wide mb-1">
                      Email
                    </dt>
                    <dd>
                      <a
                        href="mailto:Stephanie@fishermedicare.com"
                        className="text-panel hover:text-coral transition-colors min-h-[44px] inline-flex items-center break-all"
                      >
                        Stephanie@fishermedicare.com
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-semibold text-panel/50 uppercase tracking-wide mb-1">
                      Business Hours
                    </dt>
                    <dd className="text-panel/80">Monday – Friday, 9am – 5pm</dd>
                  </div>

                  <div>
                    <dt className="text-sm font-semibold text-panel/50 uppercase tracking-wide mb-1">
                      Service Area
                    </dt>
                    <dd className="text-panel/80">
                      Spokane, WA and surrounding areas
                      <br />
                      <span className="text-panel/55 text-[0.9rem]">
                        Remote via Zoom or phone — statewide in Washington
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Contact form — mailto v1 */}
              <div>
                <h3 className="text-xl font-semibold text-panel mb-6">Send a Message</h3>
                <form
                  action="mailto:Stephanie@fishermedicare.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-panel mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-panel text-base bg-white focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent min-h-[52px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-panel mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-panel text-base bg-white focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent min-h-[52px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-panel mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-panel text-base bg-white focus:outline-none focus:ring-2 focus:ring-coral focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-panel text-white font-semibold py-4 px-6 rounded-xl text-lg hover:bg-navy transition-colors min-h-[52px]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer — slate panel ── */}
      <footer className="bg-panel text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
          {/* Compliance disclaimer — verbatim per CLAUDE.md */}
          <p className="text-white/80 text-sm leading-relaxed border-l-4 border-coral pl-5">
            We do not offer every plan available in your area. Any information we provide is
            limited to those plans we do offer in your area. Please contact Medicare.gov or
            1-800-MEDICARE to get information on all your plan options.
          </p>

          <p className="text-white/60 text-sm">
            Not affiliated with or endorsed by Medicare or any government agency.
          </p>

          <div className="pt-4 border-t border-white/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-white/40 text-sm">
            <p>© {year} Stephanie Fisher · Fisher Medicare · Spokane, WA</p>
            <p>Licensed in Washington State</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
