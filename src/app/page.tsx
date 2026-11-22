import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import StepBooking from "@/components/v3/StepBooking";
import { clinic, reasons, services, testimonials } from "@/lib/clinic";

const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

export default function Home() {
  return (
    <div className="v3 min-h-screen bg-[var(--page)] text-[var(--text)]">
      {/* First screen: identity on the panel, the booking beside it. */}
      <div className="lg:flex lg:min-h-screen">
        <aside className="relative flex flex-col justify-between bg-[var(--panel)] px-8 py-10 text-[var(--panel-text)] lg:w-[42%] lg:max-w-[560px] lg:px-12 lg:py-12">
          <div className="relative z-10">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-serif text-[20px] leading-none">
                Vidhi Jain
              </span>
              <span className="text-[13px] leading-none text-[var(--panel-muted)]">
                {clinic.role}
              </span>
            </Link>

            <h1 className="mt-16 max-w-[16ch] font-serif text-[40px] leading-[1.06] tracking-[-0.02em] lg:mt-24 lg:text-[52px] lg:tracking-[-0.03em]">
              Book the appointment, then we talk
            </h1>
            <p className="mt-5 max-w-[38ch] text-[16px] leading-[26px] text-[var(--panel-muted)]">
              Choose a time that suits you and we confirm on WhatsApp within the
              hour. The first visit runs 45 minutes and includes the full
              assessment.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--panel-hairline)] pt-6">
              {[
                { figure: "11", label: "Years" },
                { figure: "1,400+", label: "Patients" },
                { figure: "6–10", label: "Sessions" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dd className="tnum font-serif text-[26px] leading-none">
                    {stat.figure}
                  </dd>
                  <dt className="mt-2 text-[13px] text-[var(--panel-muted)]">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative z-10 mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[var(--panel-muted)]">
            <a
              href={clinic.phoneHref}
              className="tnum transition-colors hover:text-[var(--panel-text)]"
            >
              {clinic.phone}
            </a>
            <a
              href={whatsappHref}
              className="transition-colors hover:text-[var(--panel-text)]"
            >
              WhatsApp
            </a>
            <span>New Palasia, Indore</span>
          </div>
        </aside>

        <main className="flex flex-1 items-center justify-center px-6 py-12 lg:px-16 lg:py-16">
          <StepBooking />
        </main>
      </div>

      {/* Everything below the fold supports the decision above it. */}
      <section className="border-t border-[var(--hairline-soft)]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-[var(--raised)]">
              <Image
                src="/images/hero-treatment.jpg"
                alt="A physiotherapist guiding a patient through a shoulder range-of-motion assessment"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-[60%_center]"
              />
            </div>
            <div>
              <p className="text-[13px] text-[var(--text-muted)]">About</p>
              <h2 className="mt-3 font-serif text-[32px] leading-[1.15] lg:text-[40px] lg:tracking-[-0.02em]">
                Dr. Vidhi Jain
              </h2>
              <div className="mt-6 max-w-[58ch] space-y-4 text-[16px] leading-[26px] text-[var(--text-secondary)]">
                <p>
                  Vidhi has practised musculoskeletal physiotherapy in Indore
                  for eleven years, first in hospital orthopaedics and since
                  2019 in her own clinic in New Palasia.
                </p>
                <p>
                  Treatment is manual, then active. Hands-on work to settle the
                  symptom, followed by loading the tissue so it holds. Most
                  patients are seen six to ten times, and the aim is always to
                  end the course rather than extend it.
                </p>
              </div>

              <ul className="mt-10 divide-y divide-[var(--hairline-soft)]">
                {reasons.map((reason) => (
                  <li key={reason.title} className="py-5 first:pt-0 last:pb-0">
                    <h3 className="text-[16px] font-medium">{reason.title}</h3>
                    <p className="mt-2 max-w-[56ch] text-[15px] leading-[24px] text-[var(--text-secondary)]">
                      {reason.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--hairline-soft)] bg-[var(--raised)]/40">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-24">
          <h2 className="font-serif text-[32px] leading-[1.15] lg:text-[40px] lg:tracking-[-0.02em]">
            What is treated
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li
                key={service.title}
                className="rounded-[14px] border border-[var(--hairline)] bg-[var(--card)] p-6"
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                  />
                  <span className="text-[13px] text-[var(--text-muted)]">
                    {service.region}
                  </span>
                </div>
                <h3 className="mt-3 text-[18px] font-medium">
                  {service.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[24px] text-[var(--text-secondary)]">
                  {service.description}
                </p>
                <p className="tnum mt-5 text-[13px] text-[var(--text-muted)]">
                  {service.duration} session
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--hairline-soft)]">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-24">
          <h2 className="font-serif text-[32px] leading-[1.15] lg:text-[40px] lg:tracking-[-0.02em]">
            In their words
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <li
                key={item.name}
                className="flex flex-col rounded-[14px] border border-[var(--hairline)] p-6"
              >
                <p className="flex-1 font-serif text-[18px] leading-[28px]">
                  {item.quote}
                </p>
                <div className="mt-6 border-t border-[var(--hairline-soft)] pt-4">
                  <p className="text-[14px] font-medium">{item.name}</p>
                  <p className="mt-0.5 text-[13px] text-[var(--text-muted)]">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-[var(--panel)] text-[var(--panel-text)]">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              { icon: Phone, label: "Phone", value: clinic.phone, href: clinic.phoneHref },
              { icon: Mail, label: "Email", value: clinic.email, href: `mailto:${clinic.email}` },
              { icon: MapPin, label: "Clinic", value: clinic.addressLines.join("\n"), href: null },
            ].map((item) => (
              <div key={item.label}>
                <item.icon
                  size={18}
                  strokeWidth={1.5}
                  className="text-[var(--panel-muted)]"
                />
                <p className="mt-4 text-[13px] text-[var(--panel-muted)]">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-[15px] transition-colors hover:text-white"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 whitespace-pre-line text-[15px] leading-[24px]">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--panel-hairline)] pt-8">
            <a
              href={whatsappHref}
              className="flex h-11 items-center gap-2 rounded-[10px] bg-[var(--panel-text)] px-5 text-[15px] font-medium text-[var(--panel)] transition-opacity hover:opacity-90"
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              Message on WhatsApp
            </a>
            <p className="text-[13px] text-[var(--panel-muted)]">
              © 2026 Vidhi Jain Physiotherapy, Indore
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
