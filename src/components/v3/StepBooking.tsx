"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { bookingDays, services } from "@/lib/clinic";

/**
 * Booking as a short sequence: complaint, then day and time, then details.
 * The steps stay visible so the choice can be changed without going back.
 * Local state only — nothing is submitted anywhere.
 */
export default function StepBooking() {
  const [reason, setReason] = useState<string>(services[0].title);
  const [dayIndex, setDayIndex] = useState(1);
  const [slot, setSlot] = useState<string | null>("10:00 am");
  const [done, setDone] = useState(false);

  const day = bookingDays[dayIndex];
  const service = services.find((s) => s.title === reason);

  return (
    <div className="w-full max-w-[560px]">
      <div className="space-y-8">
        <section>
          <div className="flex items-baseline gap-3">
            <span className="tnum text-[13px] text-[var(--text-muted)]">1</span>
            <h2 className="text-[15px] font-medium">What are we treating</h2>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {services.map((s) => {
              const active = reason === s.title;
              return (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setReason(s.title)}
                  className={`h-10 rounded-[8px] border px-4 text-[14px] transition-colors ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent-wash)] text-[var(--accent)]"
                      : "border-[var(--hairline)] text-[var(--text-secondary)] hover:bg-[var(--raised)]"
                  }`}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
          {service && (
            <p className="mt-3 text-[13px] text-[var(--text-muted)]">
              {service.region} · {service.duration} session
            </p>
          )}
        </section>

        <section>
          <div className="flex items-baseline gap-3">
            <span className="tnum text-[13px] text-[var(--text-muted)]">2</span>
            <h2 className="text-[15px] font-medium">Choose a time</h2>
          </div>

          <div className="mt-4 grid grid-cols-6 gap-2">
            {bookingDays.map((d, i) => {
              const active = i === dayIndex;
              const full = d.slots.length === 0;
              return (
                <button
                  key={d.date}
                  type="button"
                  disabled={full}
                  onClick={() => {
                    setDayIndex(i);
                    setSlot(null);
                  }}
                  className={`flex h-[60px] flex-col items-center justify-center gap-1 rounded-[10px] border transition-colors ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent-wash)]"
                      : full
                        ? "cursor-not-allowed border-[var(--hairline-soft)] opacity-45"
                        : "border-[var(--hairline)] hover:bg-[var(--raised)]"
                  }`}
                >
                  <span className="text-[12px] text-[var(--text-muted)]">
                    {d.label}
                  </span>
                  <span
                    className={`tnum text-[15px] ${active ? "text-[var(--accent)]" : ""}`}
                  >
                    {d.date}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {day.slots.length === 0 ? (
              <p className="text-[13px] text-[var(--text-muted)]">
                Fully booked. Try another day
              </p>
            ) : (
              day.slots.map((time) => {
                const active = slot === time;
                return (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSlot(time)}
                    className={`tnum h-10 rounded-[8px] border px-4 text-[14px] transition-colors ${
                      active
                        ? "border-[var(--accent)] bg-[var(--accent-wash)] text-[var(--accent)]"
                        : "border-[var(--hairline)] hover:bg-[var(--raised)]"
                    }`}
                  >
                    {time}
                  </button>
                );
              })
            )}
          </div>
        </section>

        <section>
          <div className="flex items-baseline gap-3">
            <span className="tnum text-[13px] text-[var(--text-muted)]">3</span>
            <h2 className="text-[15px] font-medium">Where to reach you</h2>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-[13px] text-[var(--text-secondary)]">
                Your name
              </span>
              <input
                type="text"
                placeholder="Anjali Mehta"
                className="mt-2 h-11 w-full rounded-[8px] border border-[var(--hairline)] px-3 text-[14px] placeholder:text-[var(--text-muted)]/70 transition-colors focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[13px] text-[var(--text-secondary)]">
                Phone
              </span>
              <input
                type="tel"
                placeholder="+91 98260 41197"
                className="tnum mt-2 h-11 w-full rounded-[8px] border border-[var(--hairline)] px-3 text-[14px] placeholder:text-[var(--text-muted)]/70 transition-colors focus:border-[var(--accent)] focus:outline-none"
              />
            </label>
          </div>
        </section>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[12px] bg-[var(--raised)] px-5 py-4">
        <p className="text-[14px] text-[var(--text-secondary)]">
          {slot ? (
            <>
              {reason}
              <span className="text-[var(--text-muted)]"> · </span>
              <span className="tnum">
                {day.label} {day.date} {day.month}, {slot}
              </span>
            </>
          ) : (
            "Pick a time to continue"
          )}
        </p>
        <button
          type="button"
          disabled={!slot}
          onClick={() => setDone(true)}
          className="flex h-11 items-center gap-2 rounded-[10px] bg-[var(--accent)] px-5 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {done && <Check size={16} strokeWidth={1.5} />}
          {done ? "Request sent" : "Request appointment"}
        </button>
      </div>
    </div>
  );
}
