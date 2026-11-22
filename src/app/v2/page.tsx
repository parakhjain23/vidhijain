import Image from "next/image";
import Link from "next/link";
import RecordBooking from "@/components/v2/RecordBooking";
import {
  clinic,
  reasons,
  services,
  testimonials,
} from "@/lib/clinic";

const whatsappHref = `https://wa.me/${clinic.whatsapp}`;

/** Section heading set as a record entry: a number, a rule, a title. */
function Heading({ index, title }: { index: string; title: string }) {
  return (
    <div className="rule pt-5">
      <p className="meta text-[12px] text-[var(--text-muted)]">{index}</p>
      <h2 className="mt-3 font-serif text-[30px] leading-[1.15] lg:text-[36px]">
        {title}
      </h2>
    </div>
  );
}

export default function V2() {
  return (
    <div className="min-h-screen bg-[var(--page)] text-[var(--text)]">
      <header className="mx-auto max-w-[1100px] px-6 pt-8 lg:px-10">
        <div className="flex items-baseline justify-between gap-6">
          <Link href="/v2" className="font-serif text-[19px] leading-none">
            Vidhi Jain
          </Link>
          <nav className="flex items-center gap-6 text-[14px] text-[var(--text-secondary)]">
            <a href="#practice" className="transition-colors hover:text-[var(--text)]">
              Practice
            </a>
            <a href="#index" className="transition-colors hover:text-[var(--text)]">
              Services
            </a>
            <a href="#booking" className="transition-colors hover:text-[var(--text)]">
              Appointments
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-6 pb-24 lg:px-10">
        {/* Masthead: the practice stated in words, no photograph. */}
        <section className="rule mt-8 pt-10 lg:pt-14">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <div>
              <p className="meta text-[12px] text-[var(--text-muted)]">
                Musculoskeletal physiotherapy — Indore
              </p>
              <h1 className="mt-5 max-w-[22ch] font-serif text-[46px] leading-[1.05] tracking-[-0.02em] lg:text-[64px] lg:tracking-[-0.03em]">
                Eleven years of hands and judgement
              </h1>
              <p className="mt-6 max-w-[52ch] text-[17px] leading-[27px] text-[var(--text-secondary)]">
                A single-practitioner clinic in New Palasia. Every patient is
                assessed, treated and reviewed by Dr. Jain, and every course of
                treatment is written to end rather than continue.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="h-11 bg-[var(--accent)] px-5 text-[15px] font-medium leading-[44px] text-white transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Request an appointment
                </a>
                <a
                  href={clinic.phoneHref}
                  className="meta text-[14px] text-[var(--text-secondary)] underline decoration-[var(--hairline)] underline-offset-4 transition-colors hover:text-[var(--text)]"
                >
                  {clinic.phone}
                </a>
              </div>
            </div>

            {/* The record: facts set as a ruled column. */}
            <dl className="lg:border-l lg:border-[var(--hairline-soft)] lg:pl-10">
              {[
                { k: "Qualification", v: clinic.credentials },
                { k: "In practice", v: "Since 2015" },
                { k: "Own clinic", v: "Since 2019" },
                { k: "Typical course", v: "6 to 10 sessions" },
                { k: "First appointment", v: "45 minutes" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-4 border-b border-[var(--hairline-soft)] py-3 first:pt-0"
                >
                  <dt className="text-[13px] text-[var(--text-muted)]">
                    {row.k}
                  </dt>
                  <dd className="meta text-right text-[13px] text-[var(--text)]">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Practice */}
        <section id="practice" className="mt-16 lg:mt-20">
          <Heading index="01" title="The practice" />
          <div className="mt-8 grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--raised)]">
              <Image
                src="/images/vidhi-jain.jpg"
                alt="Dr. Vidhi Jain supporting a patient's arm through an overhead stretch"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
              />
            </div>
            <div className="max-w-[58ch] space-y-5 text-[16px] leading-[27px] text-[var(--text-secondary)]">
              <p>
                Vidhi trained in musculoskeletal physiotherapy and spent her
                first four years in hospital orthopaedics, where most of the
                work arrived after surgery. The clinic she opened in 2019 sees
                people earlier than that, usually when pain has already changed
                how they sit, sleep or work.
              </p>
              <p>
                The first appointment is long. Before any treatment she wants to
                know how the pain behaves across a normal week — which hour is
                worst, what you stopped doing because of it, and what you are
                trying to get back to. That answer decides the programme more
                than the scan does.
              </p>
              <p>
                Treatment is manual first and active second. Hands-on work
                settles the symptom; loading the tissue is what keeps it
                settled. Progress is reviewed every week and written down, so
                the reason for each change is on the record.
              </p>
            </div>
          </div>
        </section>

        {/* Services as a numbered index — the signature region runs in the margin. */}
        <section id="index" className="mt-20 lg:mt-28">
          <Heading index="02" title="What is treated" />
          <ol className="mt-8">
            {services.map((service, i) => (
              <li
                key={service.title}
                className="grid gap-x-10 gap-y-3 border-b border-[var(--hairline-soft)] py-7 lg:grid-cols-[64px_200px_minmax(0,1fr)_96px]"
              >
                <span className="meta text-[13px] text-[var(--text-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[22px] leading-[1.2]">
                  {service.title}
                </h3>
                <p className="max-w-[56ch] text-[15px] leading-[24px] text-[var(--text-secondary)]">
                  {service.description}
                  <span className="mt-2 block text-[13px] text-[var(--text-muted)]">
                    {service.region}
                  </span>
                </p>
                <span className="meta text-[13px] text-[var(--text-muted)] lg:text-right">
                  {service.duration}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Approach */}
        <section className="mt-20 lg:mt-28">
          <Heading index="03" title="How the work is run" />
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {reasons.map((reason, i) => (
              <div key={reason.title} className="rule pt-5">
                <p className="meta text-[12px] text-[var(--text-muted)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-[17px] font-medium leading-[24px]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[24px] text-[var(--text-secondary)]">
                  {reason.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Patients */}
        <section className="mt-20 lg:mt-28">
          <Heading index="04" title="Patients" />
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name}>
                <blockquote className="font-serif text-[19px] leading-[29px]">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-4 border-t border-[var(--hairline-soft)] pt-3">
                  <span className="block text-[14px]">{item.name}</span>
                  <span className="meta mt-1 block text-[12px] text-[var(--text-muted)]">
                    {item.detail}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Booking */}
        <section id="booking" className="mt-20 lg:mt-28">
          <Heading index="05" title="Request an appointment" />
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
            <RecordBooking />
            <div>
              <p className="text-[15px] leading-[25px] text-[var(--text-secondary)]">
                Requests are confirmed by WhatsApp within the hour during
                clinic hours. Bring any scans or reports you already have.
              </p>
              <dl className="mt-6">
                {clinic.hours.map((entry) => (
                  <div
                    key={entry.days}
                    className="flex items-baseline justify-between gap-4 border-b border-[var(--hairline-soft)] py-3"
                  >
                    <dt className="text-[13px] text-[var(--text-secondary)]">
                      {entry.days}
                    </dt>
                    <dd className="meta text-[13px]">{entry.time}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={whatsappHref}
                className="mt-6 inline-block text-[14px] text-[var(--accent)] underline decoration-[var(--hairline)] underline-offset-4 transition-colors hover:text-[var(--accent-hover)]"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rule mx-auto max-w-[1100px] px-6 pb-16 pt-8 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="font-serif text-[19px] leading-none">Vidhi Jain</p>
            <p className="meta mt-2 text-[12px] text-[var(--text-muted)]">
              {clinic.credentials}
            </p>
          </div>
          <address className="not-italic text-[14px] leading-[24px] text-[var(--text-secondary)]">
            {clinic.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a
              href={clinic.phoneHref}
              className="meta mt-2 block transition-colors hover:text-[var(--text)]"
            >
              {clinic.phone}
            </a>
            <a
              href={`mailto:${clinic.email}`}
              className="block transition-colors hover:text-[var(--text)]"
            >
              {clinic.email}
            </a>
          </address>
        </div>
        <p className="meta mt-10 text-[12px] text-[var(--text-muted)]">
          © 2026 Vidhi Jain Physiotherapy, Indore
        </p>
      </footer>
    </div>
  );
}
