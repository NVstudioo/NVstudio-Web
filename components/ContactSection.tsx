import Image from "next/image";
import ContactForm from "./servicesPage/ContactForm";

const CONTACT_INFO = [
  { img: "phoneIcon", label: "Call Us", val: "+994 123 45 67" },
  { img: "gmailIcon", label: "Email Us", val: "hello@studio.dev" },
  {
    img: "locationIcon",
    label: "Our Office",
    val: "Baku, Azerbaijan\nNizami Street 203B",
  },
];

const SOCIAL_LINKS = ["instagram", "linkedin", "behance", "dribbble"];

export default function ContactSection() {
  return (
    <section
      style={{ padding: "clamp(20px, 5vw, 80px) clamp(24px, 6vw, 64px)" }}
    >
      <p
        style={{
          fontSize: "clamp(10px, 1vw, 14px)",
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#EA00FF",
          marginBottom: "clamp(8px, 1vw, 16px)",
        }}
      >
        Contact Us
      </p>
      <h2
        style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: "bold",
          marginBottom: "clamp(24px, 5vw, 48px)",
          color: "#EDEDED",
        }}
      >
        Let's Build Something Great Together
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl p-6 gap-6  max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          {CONTACT_INFO.map((c, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="icon-box w-10 h-10">
                <Image src={`/${c.img}.png`} alt="" width={24} height={24} />
              </div>
              <div>
                <div className="font-medium text-[#EDEDED] mb-1">{c.label}</div>
                <div className="font-regular text-[#EDEDED] whitespace-pre-line">
                  {c.val}
                </div>
              </div>
            </div>
          ))}
          <div className="mt-2">
            <div className="font-medium text-[#EDEDED] mb-3">Follow us</div>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <div key={s} className="icon-box bg-[#09060E] w-9 h-9">
                  <Image src={`/${s}Icon.png`} alt={s} width={15} height={15} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
