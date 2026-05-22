import Image from "next/image";
import ContactForm from "./ContactForm";

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
    <section className="px-6 md:px-16 py-20">
      <p className="section-label mb-3">Contact Us</p>
      <h2 className="text-responsive-h1 font-bold mb-12 text-[#EDEDED]">
        Let's Build Something Great Together
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl p-6 gap-6">
        <div className="flex flex-col gap-6">
          {CONTACT_INFO.map((c, i) => (
            <div key={i} className="flex items-start gap-4">
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
