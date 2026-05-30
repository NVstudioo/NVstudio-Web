import SlideWrapper from "../wrappers/SlideWrapper";

export default function OurLocation() {
  return (
    <section
      style={{ padding: "0 clamp(24px, 6vw, 64px) clamp(20px, 5vw, 80px)" }}
    >
      <SlideWrapper className="slide-right mb-10">
        <h3 className="font-semibold max-w-7xl mx-auto text-[#EDEDED] text-lg mb-4">
          Our Location
        </h3>
        <div className="max-w-7xl mx-auto rounded-xl overflow-hidden border border-[#533692]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1!2d49.8573!3d40.3777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd5f91c5b%3A0x43b7f37f96e5a5a5!2sNizami%20St%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="280"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Office Location"
          />
        </div>
      </SlideWrapper>
    </section>
  );
}
