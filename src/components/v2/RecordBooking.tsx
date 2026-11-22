"use client";

import { useState } from "react";
import { bookingDays, services } from "@/lib/clinic";

/**
 * Booking as a line in a record: the slot is chosen from a ruled table
 * rather than a card of chips. Local state only, nothing is submitted.
 */
export default function RecordBooking() {
  const [dayIndex, setDayIndex] = useState(1);
  const [slot, setSlot] = useState<string | null>(null);
  const [reason, setReason] = useState<string>(services[0].title);
  const [done, setDone] = useState(false);

  const day = bookingDays[dayIndex];

  return (
    <div className="border border-[var(--hairline)] bg-[var(--card)]">
      <table className="w-full border-collapse text-left">
        <tbody>
          <tr className="border-b border-[var(--hairline-soft)]">
            <th
              scope="row"
              className="w-32 px-5 py-4 align-top text-[13px] font-normal text-[var(--text-muted)]"
            >
              Complaint
            </th>
            <td className="px-5 py-4">
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {services.map((service) => {
                  const active = reason === service.title;
                  return (
                    <label
                      key={service.title}
                      className="flex cursor-pointer items-center gap-2 text-[14px]"
                    >
                      <input
                        type="radio"
                        name="complaint"
                        checked={active}
                        onChange={() => setReason(service.title)}
                        className="peer sr-only"
                      />
                      <span
                        aria-hidden
                        className={`h-3 w-3 rounded-full border transition-colors ${
                          active
                            ? "border-[var(--accent)] bg-[var(--accent)]"
                            : "border-[var(--hairline)]"
                        }`}
                      />
                      <span
                        className={
                          active
                            ? "text-[var(--text)]"
                            : "text-[var(--text-secondary)]"
                        }
                      >
                        {service.title}
                      </span>
                    </label>
                  );
                })}
              </div>
            </td>
          </tr>

          <tr className="border-b border-[var(--hairline-soft)]">
            <th
              scope="row"
              className="px-5 py-4 align-top text-[13px] font-normal text-[var(--text-muted)]"
            >
              Day
            </th>
            <td className="px-5 py-4">
              <div className="flex flex-wrap gap-2">
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
                      className={`meta h-9 border px-3 text-[13px] transition-colors ${
                        active
                          ? "border-[var(--accent)] text-[var(--accent)]"
                          : full
                            ? "cursor-not-allowed border-[var(--hairline-soft)] text-[var(--text-muted)] line-through"
                            : "border-[var(--hairline)] text-[var(--text-secondary)] hover:bg-[var(--raised)]"
                      }`}
                    >
                      {d.label} {d.date}
                    </button>
                  );
                })}
              </div>
            </td>
          </tr>

          <tr>
            <th
              scope="row"
              className="px-5 py-4 align-top text-[13px] font-normal text-[var(--text-muted)]"
            >
              Time
            </th>
            <td className="px-5 py-4">
              {day.slots.length === 0 ? (
                <p className="text-[14px] text-[var(--text-muted)]">
                  Fully booked
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {day.slots.map((time) => {
                    const active = slot === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSlot(time)}
                        className={`meta h-9 border px-3 text-[13px] transition-colors ${
                          active
                            ? "border-[var(--accent)] text-[var(--accent)]"
                            : "border-[var(--hairline)] text-[var(--text)] hover:bg-[var(--raised)]"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--hairline)] bg-[var(--raised)]/50 px-5 py-4">
        <p className="meta text-[13px] text-[var(--text-secondary)]">
          {slot
            ? `${reason} — ${day.label} ${day.date} ${day.month}, ${slot}`
            : "No time selected"}
        </p>
        <button
          type="button"
          disabled={!slot}
          onClick={() => setDone(true)}
          className="h-10 bg-[var(--accent)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          {done ? "Request sent" : "Request this time"}
        </button>
      </div>
    </div>
  );
}
