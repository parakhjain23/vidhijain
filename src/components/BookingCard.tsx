"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { bookingDays, services } from "@/lib/clinic";

/**
 * The booking UI. Selection is local state only — nothing is submitted
 * anywhere, and the confirmation is part of the design, not a real booking.
 */
export default function BookingCard({ compact = false }: { compact?: boolean }) {
  const [dayIndex, setDayIndex] = useState(1);
  const [slot, setSlot] = useState<string | null>("10:00 am");
  const [region, setRegion] = useState<string>(services[0].title);
  const [done, setDone] = useState(false);

  const day = bookingDays[dayIndex];

  return (
    <div
      className="overflow-hidden rounded-[16px] border border-hairline bg-card"
      style={{ boxShadow: "0 8px 24px rgb(31 27 22 / 0.06)" }}
    >
      <div className="border-b border-hairline-soft px-6 py-4">
        <h3 className="text-[15px] font-medium text-text">Book an appointment</h3>
        <p className="mt-1 text-[13px] text-text-muted">
          Choose a time and we confirm on WhatsApp within the hour
        </p>
      </div>

      <div className="px-6 py-5">
        <fieldset>
          <legend className="text-[13px] text-text-secondary">
            What are we treating
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {services.map((service) => {
              const active = region === service.title;
              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setRegion(service.title)}
                  className={`h-8 rounded-[8px] border px-3 text-[13px] transition-colors ${
                    active
                      ? "border-accent bg-accent-wash text-accent"
                      : "border-hairline text-text-secondary hover:bg-raised"
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-6">
          <p className="text-[13px] text-text-secondary">Day</p>
          <div className="mt-3 grid grid-cols-6 gap-2">
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
                  className={`flex h-16 flex-col items-center justify-center gap-1 rounded-[10px] border text-center transition-colors ${
                    active
                      ? "border-accent bg-accent-wash"
                      : full
                        ? "cursor-not-allowed border-hairline-soft opacity-45"
                        : "border-hairline hover:bg-raised"
                  }`}
                >
                  <span className="text-[12px] text-text-muted">{d.label}</span>
                  <span
                    className={`tnum text-[15px] ${active ? "text-accent" : "text-text"}`}
                  >
                    {d.date}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-[13px] text-text-secondary">
            Time
            <span className="tnum ml-2 text-text-muted">
              {day.slots.length} free
            </span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {day.slots.length === 0 && (
              <p className="text-[13px] text-text-muted">
                Fully booked. Try another day
              </p>
            )}
            {day.slots.map((time) => {
              const active = slot === time;
              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSlot(time)}
                  className={`tnum h-9 rounded-[8px] border px-3 text-[14px] transition-colors ${
                    active
                      ? "border-accent bg-accent-wash text-accent"
                      : "border-hairline text-text hover:bg-raised"
                  }`}
                >
                  {time}
                </button>
              );
            })}
          </div>
        </div>

        {!compact && (
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-[13px] text-text-secondary">Your name</span>
              <input
                type="text"
                placeholder="Anjali Mehta"
                className="mt-2 h-10 w-full rounded-[8px] border border-hairline bg-card px-3 text-[14px] text-text placeholder:text-text-muted/70 transition-colors focus:border-accent focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-[13px] text-text-secondary">Phone</span>
              <input
                type="tel"
                placeholder="+91 98260 41197"
                className="tnum mt-2 h-10 w-full rounded-[8px] border border-hairline bg-card px-3 text-[14px] text-text placeholder:text-text-muted/70 transition-colors focus:border-accent focus:outline-none"
              />
            </label>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-hairline-soft bg-raised/60 px-6 py-4">
        <p className="text-[13px] text-text-secondary">
          {slot ? (
            <>
              {region}
              <span className="text-text-muted"> · </span>
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
          className="flex h-10 items-center gap-2 rounded-[10px] bg-accent px-4 text-[14px] font-medium text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-40"
        >
          {done && <Check size={16} strokeWidth={1.5} />}
          {done ? "Request sent" : "Request this time"}
        </button>
      </div>
    </div>
  );
}
