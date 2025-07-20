export default function AboutMe() {
  return (
    <section className="bg-black dark:bg-black min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl w-full grid gap-10 lg:grid-cols-2 items-center">
        {/* Text Content */}
        <div className="text-gray-500 sm:text-lg dark:text-gray-400 font-light">
          <p className="mb-4 text-lime-500">
            I’m Melrose Ceballos — a backend engineer who thrives on structure, logic, and purpose. I specialize in
            building robust APIs, optimizing data flows, and writing clean, testable code. But beneath the surface, my
            approach to engineering is shaped by something deeper: survival, resilience, and a relentless pursuit of
            clarity in a chaotic world.
          </p>
          <p className="mb-4">
            Being a first-generation immigrant, navigating a new language and culture while staying rooted in
            discipline and resilience is a necessity.
            <br />
            To me, code is more than logic — it’s liberation. It's the one place where mistakes don't define you, where
            every error is a chance to grow. Code is safe, fair, and fixable — and that's what makes it powerful.
          </p>
          <p className="mb-4">
            I’m passionate about clean architecture, purposeful systems, and using technology to bridge the gap between
            humans and machines. My long-term goal is to work with AI systems — not just to improve them technically,
            but to help them better understand the nuances of human experience.
            <br />
            What makes me unique isn’t just what I’ve been through — it’s how I turn that history into quiet precision,
            thoughtful engineering, and the kind of backend systems that hold everything together.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            className="w-full rounded-lg"
            src="https://media1.tenor.com/m/Z_Ah8rkdZ4YAAAAC/walking-code.gif"
            alt="code gif 1"
          />
          <img
            className="w-full rounded-lg"
            src="https://media1.tenor.com/m/Z_Ah8rkdZ4YAAAAC/walking-code.gif"
            alt="code gif 2"
          />
        </div>
      </div>
    </section>
  );
}
