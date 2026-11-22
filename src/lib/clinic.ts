/**
 * Sample data for the UI. Every fact here is placeholder — swap these values
 * for the real clinic details before this goes live.
 */

export const clinic = {
  name: "Vidhi Jain",
  role: "Physiotherapist",
  credentials: "BPT, MPT (Musculoskeletal)",
  phone: "+91 98260 41197",
  phoneHref: "tel:+919826041197",
  whatsapp: "919826041197",
  email: "care@vidhijainphysio.in",
  addressLines: [
    "204, Satyam Arcade, Above Punjab National Bank",
    "New Palasia, Indore 452001",
  ],
  hours: [
    { days: "Monday to Friday", time: "9:00 am – 7:00 pm" },
    { days: "Saturday", time: "9:00 am – 2:00 pm" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

/** The signature thread: every service names the region it treats. */
export const services = [
  {
    region: "Lower back",
    title: "Back pain",
    description:
      "Disc pain, sciatica and the stiffness that comes from sitting all day. Manual therapy first, then the strengthening that keeps it away.",
    duration: "45 min",
  },
  {
    region: "Neck and shoulder",
    title: "Neck pain",
    description:
      "Cervical pain, headaches that start at the base of the skull, and shoulders that have crept up toward the ears.",
    duration: "45 min",
  },
  {
    region: "Knee, ankle, shoulder",
    title: "Sports injury",
    description:
      "Ligament sprains, muscle tears and the return-to-play work that follows. Graded loading, not rest alone.",
    duration: "60 min",
  },
  {
    region: "Knee and hip",
    title: "Joint pain",
    description:
      "Osteoarthritis, frozen shoulder and post-operative stiffness. Range first, then strength, at a pace the joint allows.",
    duration: "45 min",
  },
  {
    region: "Whole body",
    title: "Rehabilitation",
    description:
      "After surgery, a fracture or a stroke. A programme that is reviewed every week and changes as you do.",
    duration: "60 min",
  },
] as const;

export const reasons = [
  {
    title: "One physiotherapist, start to finish",
    body: "You are assessed and treated by Dr. Jain at every visit. No rotating staff, no handing your file to someone new.",
  },
  {
    title: "A plan written for your week",
    body: "Exercises are chosen to fit the time you actually have, and adjusted when the week does not go to plan.",
  },
  {
    title: "You leave knowing why it hurts",
    body: "Each session ends with what was found, what was done and what to expect before the next one.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "I had put off treating my back for two years. Six weeks in, I can sit through a full workday again. What helped most was being told exactly what was wrong in plain words.",
    name: "Anjali Mehta",
    detail: "Lower back pain, 8 sessions",
  },
  {
    quote:
      "Came in after an ACL reconstruction and was worried about going back to football. The programme was tough but never reckless. I played a full match in October.",
    name: "Rohit Bhandari",
    detail: "Post-operative knee rehabilitation",
  },
  {
    quote:
      "My frozen shoulder had stopped me from reaching the top shelf. Dr. Jain was patient about how slow it felt at first. The range came back week by week.",
    name: "Sushma Agarwal",
    detail: "Frozen shoulder, 12 sessions",
  },
] as const;

/** Sample availability for the booking UI. No backend behind this. */
export const bookingDays = [
  { label: "Mon", date: "24", month: "Nov", slots: ["9:30 am", "11:00 am", "4:30 pm"] },
  { label: "Tue", date: "25", month: "Nov", slots: ["10:00 am", "12:30 pm", "5:00 pm", "6:00 pm"] },
  { label: "Wed", date: "26", month: "Nov", slots: ["9:30 am", "3:00 pm"] },
  { label: "Thu", date: "27", month: "Nov", slots: ["11:00 am", "2:00 pm", "4:30 pm"] },
  { label: "Fri", date: "28", month: "Nov", slots: [] },
  { label: "Sat", date: "29", month: "Nov", slots: ["9:30 am", "11:00 am"] },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Patients" },
  { href: "#contact", label: "Contact" },
] as const;
