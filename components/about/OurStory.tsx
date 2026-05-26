import Link from "next/link";

export default function OurStory() {
  return (
    <section
      style={{
        padding: "clamp(20px, 5vw, 80px) clamp(24px, 6vw, 64px)",
        backgroundImage: "url('/bg-logo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
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
        Our Story
      </p>

      <h2
        style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          fontWeight: "bold",
          marginBottom: "clamp(24px, 5vw, 48px)",
          color: "#EDEDED",
        }}
      >
        Built in 2024 <br /> Building for the Future
      </h2>

      <p className="text-sm md:text-[18px] mb-1">
        A collective of builders, and problem solvers on a mission to build real
        digital products that make a difference across multiple projects every
        day.
      </p>
      <p className="text-sm md:text-[18px] mb-1">
        <Link
          style={{
            fontWeight: "bold",
            color: "#8b5cf6",
            marginBottom: "clamp(8px, 1vw, 16px)",
          }}
          href={"/"}
        >
          {" "}
          NV Studio{" "}
        </Link>
        was founded in 2024 with a simple belief: great products come from
        focused teams, working in parallel, with a shared mission.
      </p>
      <p className="text-sm md:text-[18px] mb-1 leading-6">
        We operate on a multi-project model, where dedicated teams build, ship,
        and scale digital products across different industries and problem -
        simultaneously.
      </p>
      <p className="text-sm md:text-[18px] mb-1">
        From{" "}
        <Link
          style={{
            fontWeight: "bold",
            color: "#8b5cf6",
            marginBottom: "clamp(8px, 1vw, 16px)",
          }}
          href={"/"}
        >
          {" "}
          InstaUp AI{" "}
        </Link>
        to{" "}
        <Link
          style={{
            fontWeight: "bold",
            color: "#8b5cf6",
            marginBottom: "clamp(8px, 1vw, 16px)",
          }}
          href={"/"}
        >
          {" "}
          Alfreala{" "}
        </Link>
        to{" "}
        <Link
          style={{
            fontWeight: "bold",
            color: "#8b5cf6",
            marginBottom: "clamp(8px, 1vw, 16px)",
          }}
          href={"/"}
        >
          {" "}
          UstaUp{" "}
        </Link>
        , our ecosystem of products is growing - and we're just getting started.
      </p>
      <p className="text-sm md:text-[18px]">
        Our mission is to turn ideas into impactful products that users love and
        business rely on.
      </p>
    </section>
  );
}
