import profileImage from '@/assets/profile.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="section-container mesh-gradient py-20 sm:py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading Section */}
        <div className="text-center mb-16 sm:mb-24">

          <span className="inline-block px-6 py-2 rounded-full border border-violet-300/40 bg-violet-200/20 text-violet-500 text-sm font-semibold tracking-[0.25em] uppercase">
            About
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-white mt-6 mb-5">
            About Me
          </h2>

          <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">
            More About Me
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Image Section */}
          <div className="flex justify-center order-2 md:order-1">

            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute -inset-5 bg-gradient-to-r from-violet-500/20 via-fuchsia-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />

              {/* Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] rounded-full p-[5px] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 animate-float shadow-2xl">

                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-zinc-900">
                  <img
                    src={profileImage}
                    alt="Mythili"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 order-1 md:order-2 max-w-2xl">



            {/* Intro */}
            <div>

              <h3 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] text-zinc-900 dark:text-white">

                Hey! I’m{" "}

                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent font-bold">
                  MYTHILI
                </span>

              </h3>
            </div>

            {/* Description */}
            <div className="space-y-6 text-zinc-600 dark:text-zinc-300">

              <p className="text-[17px] leading-9 font-normal tracking-wide">
                I am a{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  Full Stack & AI/ML Developer
                </span>{" "}
                with strong expertise in MERN Stack and Python development.
              </p>

              <p className="text-[17px] leading-9 font-normal tracking-wide">
                I specialize in building scalable web applications and intelligent
                AI-driven systems with modern technologies and elegant UI design.
              </p>

              <p className="text-[17px] leading-9 font-normal tracking-wide">
                I have hands-on experience working with{" "}
                <span className="font-semibold text-violet-600 dark:text-violet-400">
                  YOLOv8
                </span>
                , focusing on computer vision and real-time AI solutions.
              </p>

              <p className="text-[17px] leading-9 font-normal tracking-wide">
                Currently pursuing{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  B.Tech Information Technology
                </span>{" "}
                at Kongu Engineering College.
              </p>

              <p className="text-[17px] leading-9 font-normal tracking-wide">
                Passionate about combining software engineering with AI/ML to
                create impactful real-world innovations.
              </p>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8">

              <div className="text-center p-5 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 shadow-lg hover:-translate-y-2 transition duration-300">
                <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                  10+
                </p>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  Projects
                </p>
              </div>

              <div className="text-center p-5 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 shadow-lg hover:-translate-y-2 transition duration-300">
                <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                  10+
                </p>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  Awards
                </p>
              </div>

              <div className="text-center p-5 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 shadow-lg hover:-translate-y-2 transition duration-300">
                <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                  4
                </p>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  Certifications
                </p>
              </div>

              <div className="text-center p-5 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/20 shadow-lg hover:-translate-y-2 transition duration-300">
                <p className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                  5+
                </p>

                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                  NPTEL
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;