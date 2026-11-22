import Image from "next/image";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Nav from "@/components/Nav";
import BookingCard from "@/components/BookingCard";
import {
  clinic,
  navLinks,
  reasons,
  services,
  testimonials,
} from "@/lib/clinic";

const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top" className="flex-1">
        {/* Hero: the scene carries the colour, the booking card is the moment. */}
        <section className="relative isolate flex min-h-[760px] flex-col justify-center overflow-hidden lg:min-h-[min(92vh,900px)]">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-treatment.jpg"
              alt="A physiotherapist guiding a patient through a shoulder range-of-motion assessment in a daylit treatment room"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[70%_38%]"
            />
            {/* Fade the photo into the page colour so no hard rectangle shows. */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(to bottom, rgb(250 248 245 / 0.94) 0%, rgb(250 248 245 / 0.90) 55%, rgb(250 248 245 / 0.72) 100%)",
              }}
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{
                background:
                  "linear-gradient(100deg, var(--page) 0%, var(--page) 24%, rgb(250 248 245 / 0.82) 40%, rgb(250 248 245 / 0.12) 60%, transparent 76%)",
              }}
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgb(250 248 245 / 0.85) 60%, var(--page))",
              }}
            />
            {/* Keeps the navigation legible over the window light. */}
            <div
              className="absolute inset-x-0 top-0 h-24"
              style={{
                background:
                  "linear-gradient(to bottom, rgb(250 248 245 / 0.92), transparent)",
              }}
            />
          </div>

          <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 pt-32 pb-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-center lg:gap-16 lg:px-8 lg:pt-28 lg:pb-16">
            <div className="rise max-w-[34rem] lg:pt-6">
              <p className="text-[14px] text-text-secondary">
                {clinic.credentials} · Indore
              </p>
              <h1 className="mt-4 font-serif text-[44px] leading-[1.04] tracking-[-0.02em] text-text sm:text-[56px] lg:text-[60px] lg:tracking-[-0.03em]">
                Movement that stops hurting
              </h1>
              <p className="mt-5 max-w-[30rem] text-[18px] leading-[28px] text-text-secondary">
                Hands-on physiotherapy for back, neck, joint and sports
                injuries. You are assessed and treated by Dr. Jain herself, and
                you leave each session knowing what changed.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#book"
                  className="flex h-12 items-center rounded-[10px] bg-accent px-5 text-[15px] font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Book appointment
                </a>
                <a
                  href="#services"
                  className="flex h-12 items-center gap-1.5 rounded-[10px] border border-hairline bg-card px-5 text-[15px] text-text transition-colors hover:bg-raised"
                >
                  What we treat
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            <div className="rise lg:pt-4" style={{ animationDelay: "60ms" }}>
              <BookingCard compact />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-[1400px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-raised lg:max-w-[440px]">
              <Image
                src="/images/vidhi-jain.jpg"
                alt="Dr. Vidhi Jain supporting a patient's arm through an overhead stretch"
                fill
                sizes="(max-width: 1024px) 100vw, 440px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-[13px] text-text-muted">About</p>
              <h2 className="mt-3 font-serif text-[32px] leading-[1.15] text-text lg:text-[40px] lg:tracking-[-0.02em]">
                Dr. Vidhi Jain
              </h2>
              <div className="mt-6 space-y-4 text-[16px] leading-[26px] text-text-secondary">
                <p>
                  Vidhi has practised musculoskeletal physiotherapy in Indore
                  for eleven years, first in hospital orthopaedics and since
                  2019 in her own clinic in New Palasia.
                </p>
                <p>
                  Her work starts with a long first appointment. Before any
                  treatment she wants to know how the pain behaves across a
                  normal week — which hour of the day is worst, what you stopped
                  doing because of it, and what you are trying to get back to.
                </p>
                <p>
                  Treatment is manual, then active. Hands-on work to settle the
                  symptom, followed by loading the tissue so it holds. Most
                  patients are seen six to ten times, and the aim is always to
                  end the course rather than extend it.
                </p>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                {[
                  { figure: "11", label: "Years in practice" },
                  { figure: "1,400+", label: "Patients treated" },
                  { figure: "6–10", label: "Typical course" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dd className="tnum font-serif text-[30px] leading-none text-text">
                      {stat.figure}
                    </dd>
                    <dt className="mt-2 text-[13px] text-text-muted">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Services — the signature region marker runs through every card. */}
        <section
          id="services"
          className="border-y border-hairline-soft bg-card/60 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
            <div className="max-w-[36rem]">
              <p className="text-[13px] text-text-muted">Services</p>
              <h2 className="mt-3 font-serif text-[32px] leading-[1.15] text-text lg:text-[40px] lg:tracking-[-0.02em]">
                What we treat
              </h2>
              <p className="mt-4 text-[16px] leading-[26px] text-text-secondary">
                Five areas of practice. If you are not sure which one fits,
                describe the pain on WhatsApp and Vidhi will tell you.
              </p>
            </div>

            <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li
                  key={service.title}
                  className="flex flex-col rounded-[14px] border border-hairline bg-card p-6 transition-colors hover:bg-raised/50"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span className="text-[13px] text-text-muted">
                      {service.region}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[18px] font-medium text-text">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[15px] leading-[24px] text-text-secondary">
                    {service.description}
                  </p>
                  <p className="tnum mt-5 flex items-center gap-2 text-[13px] text-text-muted">
                    <Clock size={14} strokeWidth={1.5} />
                    {service.duration} session
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why choose us */}
        <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-20">
            <div>
              <p className="text-[13px] text-text-muted">Why patients stay</p>
              <h2 className="mt-3 font-serif text-[32px] leading-[1.15] text-text lg:text-[40px] lg:tracking-[-0.02em]">
                Care that stays with one pair of hands
              </h2>
            </div>
            <ul className="divide-y divide-hairline-soft">
              {reasons.map((reason) => (
                <li key={reason.title} className="py-6 first:pt-0 last:pb-0">
                  <h3 className="text-[17px] font-medium text-text">
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-[38rem] text-[15px] leading-[24px] text-text-secondary">
                    {reason.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="border-y border-hairline-soft bg-card/60 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
            <p className="text-[13px] text-text-muted">Patients</p>
            <h2 className="mt-3 max-w-[32rem] font-serif text-[32px] leading-[1.15] text-text lg:text-[40px] lg:tracking-[-0.02em]">
              In their words
            </h2>

            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col rounded-[14px] border border-hairline bg-card p-6"
                >
                  <p className="flex-1 font-serif text-[18px] leading-[28px] text-text">
                    {item.quote}
                  </p>
                  <div className="mt-6 border-t border-hairline-soft pt-4">
                    <p className="text-[14px] font-medium text-text">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[13px] text-text-muted">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Booking */}
        <section id="book" className="mx-auto max-w-[1400px] px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="text-[13px] text-text-muted">Appointments</p>
              <h2 className="mt-3 font-serif text-[32px] leading-[1.15] text-text lg:text-[40px] lg:tracking-[-0.02em]">
                Find a time this week
              </h2>
              <p className="mt-4 text-[16px] leading-[26px] text-text-secondary">
                First appointments run 45 minutes and include the full
                assessment. Bring any scans or reports you already have.
              </p>
              <ul className="mt-8 space-y-3">
                {clinic.hours.map((entry) => (
                  <li
                    key={entry.days}
                    className="flex items-baseline justify-between gap-4 border-b border-hairline-soft pb-3 text-[14px]"
                  >
                    <span className="text-text-secondary">{entry.days}</span>
                    <span className="tnum text-text">{entry.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <BookingCard />
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-hairline-soft bg-card/60 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-20">
              <div>
                <p className="text-[13px] text-text-muted">Contact</p>
                <h2 className="mt-3 font-serif text-[32px] leading-[1.15] text-text lg:text-[40px] lg:tracking-[-0.02em]">
                  Come and see us
                </h2>
                <p className="mt-4 text-[16px] leading-[26px] text-text-secondary">
                  The clinic is on the second floor with lift access. Street
                  parking is easiest before 11 am.
                </p>
                <a
                  href={whatsappHref}
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-[10px] bg-accent px-5 text-[15px] font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  <MessageCircle size={18} strokeWidth={1.5} />
                  Message on WhatsApp
                </a>
              </div>

              <ul className="grid items-stretch gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: Phone,
                    label: "Phone",
                    value: clinic.phone,
                    href: clinic.phoneHref,
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: clinic.email,
                    href: `mailto:${clinic.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Clinic",
                    value: clinic.addressLines.join("\n"),
                    href: null,
                  },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex h-full flex-col rounded-[14px] border border-hairline bg-card p-6"
                  >
                    <item.icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-text-muted"
                    />
                    <p className="mt-4 text-[13px] text-text-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-[15px] text-text transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 whitespace-pre-line text-[15px] leading-[24px] text-text">
                        {item.value}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hairline-soft">
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-8">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="font-serif text-[18px] leading-none text-text">
                Vidhi Jain
              </p>
              <p className="mt-2 text-[13px] text-text-muted">
                {clinic.credentials}
              </p>
            </div>

            <div className="flex gap-16">
              <nav>
                <p className="text-[13px] text-text-muted">Pages</p>
                <ul className="mt-3 space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-[14px] text-text-secondary transition-colors hover:text-text"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div>
                <p className="text-[13px] text-text-muted">Reach us</p>
                <ul className="mt-3 space-y-2 text-[14px] text-text-secondary">
                  <li>
                    <a
                      href={clinic.phoneHref}
                      className="tnum transition-colors hover:text-text"
                    >
                      {clinic.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${clinic.email}`}
                      className="transition-colors hover:text-text"
                    >
                      {clinic.email}
                    </a>
                  </li>
                  <li className="whitespace-pre-line leading-[22px]">
                    {clinic.addressLines.join("\n")}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-12 border-t border-hairline-soft pt-6 text-[13px] text-text-muted">
            © 2026 Vidhi Jain Physiotherapy, Indore
          </p>
        </div>
      </footer>
    </>
  );
}
