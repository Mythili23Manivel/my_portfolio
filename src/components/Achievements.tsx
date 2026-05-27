import {
  Trophy,
  Award,
  Medal,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

const achievements = [
  {
    title: 'Qualified GATE 2026 (CSE/IT)',
    description:
      'Qualified Graduate Aptitude Test in Engineering (GATE) 2026 in Computer Science and Information Technology.',
    icon: Trophy,
    highlight: true,
    link: 'https://www.linkedin.com/posts/mythilimanivel_gate2026-computerscience-achievement-ugcPost-7446149737063538689-55QT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'National Exam',
  },
  {
    title: 'Best Student Award (2023 - 2024)',
    description:
      'Honored with the Best Student Award for outstanding academic and extracurricular performance.',
    icon: Trophy,
    highlight: true,
    link: 'https://www.linkedin.com/posts/mythilimanivel_honored-to-receive-the-certificate-of-appreciation-activity-7223513158173229056-Tqhm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'Academic',
  },
  {
    title: 'Best Co-Curricular Student Award (2025 - 2026)',
    description:
      'Recognized for exceptional participation and achievements in technical, leadership, and co-curricular activities.',
    icon: Award,
    highlight: true,
    link: 'https://www.linkedin.com/posts/mythilimanivel_honored-to-be-recognized-as-best-student-activity-7440698992600006656-FHY3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'Leadership',
  },
  {
    title: 'Top 5% Merit Scholarship (2023 - 2025)',
    description:
      'Recipient of the Top 5% Merit Scholarship for consistent academic excellence.',
    icon: Award,
    highlight: true,
    link: 'https://www.linkedin.com/posts/mythilimanivel_achievement-academicexcellence-consistency-activity-7453759356921155584-9K-N?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'Scholarship',
  },
  {
    title: 'Winner – BYTS India 24-Hour National Hackathon (2025)',
    description:
      'Won 1st place for developing the “CityConnect” smart city platform and received a ₹5,000 cash prize.',
    icon: Trophy,
    highlight: true,
    link: 'https://www.linkedin.com/posts/mythilimanivel_solutionfits-bytsindia-hackathonexperience-activity-7425045561927663616-s78I?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'Hackathon',
  },
  {
    title: 'Winner – Data Science Hackathon (2025)',
    description:
      'Secured first place in a Data Science Hackathon by developing innovative AI-driven solutions.',
    icon: Medal,
    highlight: true,
    link: 'https://www.linkedin.com/posts/mythilimanivel_proud-to-win-3rd-prize-at-the-intra-department-activity-7417813649261572096-O6JZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'AI/ML',
  },
  {
    title: '1st Prize – Coding Contest, MARK-US’25',
    description:
      'Secured 1st place in the Coding Contest at MARK-US’25 by demonstrating strong programming, logical thinking, and problem-solving skills.',
    icon: Trophy,
    highlight: true,
    link: 'https://www.linkedin.com/posts/mythilimanivel_achievement-techexplorer-innovation-activity-7310847162483957760-XIek?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'Programming',
  },
  {
    title: 'Oracle Certified Professional: Java SE 17 Developer (90%)',
    description:
      'Successfully achieved Oracle Certified Professional: Java SE 17 Developer certification with an impressive score of 90%.',
    icon: Trophy,
    highlight: true,
    link: 'https://www.linkedin.com/',
    category: 'Certification',
  },
  {
    title: '1st Prize – Paper Presentation on "AI in Agriculture", CIT (2024)',
    description:
      'Won first prize for presenting innovative applications of Artificial Intelligence in agriculture.',
    icon: Medal,
    highlight: false,
    link: 'https://www.linkedin.com/posts/mythilimanivel_i-am-happy-to-share-that-i-have-won-1-st-activity-7222563307163963392-QoZd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'Presentation',
  },
  {
    title:
      '2nd Prize – Project Presentation "Image Embedded Caesar Cipher Encryptor and Decryptor", SKCET (2024)',
    description:
      'Secured second place for presenting a secure image-based encryption and decryption system.',
    icon: Medal,
    highlight: false,
    link: '',
    category: 'Cyber Security',
  },
  {
    title:
      '3rd Prize – Hackathon CIT "AI-Powered Hospital Management System" (2025)',
    description:
      'Developed an AI-based smart hospital management solution during a national-level hackathon.',
    icon: Medal,
    highlight: false,
    link: 'https://www.linkedin.com/posts/mythilimanivel_mechnotron2k25-hackathon-aiinhealthcare-activity-7310853090667118593-szxj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'Healthcare AI',
  },
  {
    title: 'Participant – Smart India Hackathon (SIH) & MSME Hackathon',
    description:
      'Participated in national-level innovation and problem-solving hackathons including SIH and MSME.',
    icon: Award,
    highlight: false,
    link: 'https://www.linkedin.com/posts/mythilimanivel_sih2025-smartindiahackathon-hackathonjourney-activity-7407356168844607488-dLwt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEYiY8B3OO13MhMOz9q_T2MD0szxYjMbJc',
    category: 'Innovation',
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative py-24 px-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold tracking-wide text-sm">
              AWARDS & ACHIEVEMENTS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-foreground leading-tight">
            Milestones &
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {' '}
              Achievements
            </span>
          </h2>

          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            A showcase of academic excellence, certifications, hackathons,
            leadership, and technical accomplishments throughout my journey.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const CardWrapper = achievement.link ? 'a' : 'div';

            return (
              <CardWrapper
                key={index}
                href={achievement.link || undefined}
                target={achievement.link ? '_blank' : undefined}
                rel={achievement.link ? 'noopener noreferrer' : undefined}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Gradient Border Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                      achievement.highlight
                        ? 'bg-gradient-to-br from-primary to-accent text-white'
                        : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                    {achievement.category}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10">
                    <span className="text-xs text-muted-foreground">
                      Achievement #{index + 1}
                    </span>

                    {achievement.link && (
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold opacity-80 group-hover:opacity-100 transition-all">
                        View
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Floating Glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;