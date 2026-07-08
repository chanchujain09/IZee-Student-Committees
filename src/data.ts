import { CommitteeData } from './types';

const DUMMY_STUDENT_1 = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600';
const DUMMY_STUDENT_2 = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600';
const DUMMY_STUDENT_3 = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600';
const DUMMY_STUDENT_4 = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600';
const DUMMY_STUDENT_5 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600';

const DUMMY_EVENT_1 = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4073.webp';
const DUMMY_EVENT_2 = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4073.webp';
const DUMMY_HERO_1 = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4071.webp';
const DUMMY_HERO_2 = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4071.webp';
const DUMMY_CARD_IMAGE = 'https://izeeinstitutions.com/wp-content/uploads/2025/01/Rectangle-4059-2.webp';

export const COMMITTEES: CommitteeData[] = [
  {
    id: 'iplace',
    name: 'iPlace',
    fullName: 'Placement & Corporate Relations Committee',
    tagline: 'Your Career, Our Mission.',
    oneLiner: 'Connecting student talent with leading industry opportunities and building lasting corporate partnerships.',
    color: {
      base: '#C8102E', 
      light: '#FFF5F6', 
      text: 'text-[#C8102E]',
      bg: 'bg-[#C8102E]',
      border: 'border-red-200'
    },
    icon: 'Briefcase',
    heroImage: DUMMY_HERO_1,
    cardImage: DUMMY_CARD_IMAGE,
    logo: 'https://i.postimg.cc/f3xkx5hX/img1.png',
    about: "iPlace is the student-run placement and corporate relations committee of IZee Business School. Working alongside the institute's placement cell, iPlace members build relationships with recruiters, organize placement drives and pre-placement talks, and prepare fellow students to perform at their best when opportunity knocks.",
    mission: '• Build and maintain strong relationships with recruiting companies and HR leaders.\n• Organize placement drives, pre-placement talks, and corporate networking events.\n• Prepare students through mock interviews, group discussions, and resume workshops.\n• Bridge the gap between what industry needs and what students bring.',
    vision: "To make every IZee graduate placement-ready and every recruiter's experience at IZee seamless — building a placement brand companies return to year after year.",
    whatWeDo: [
      { title: 'Corporate Connect', description: 'Outreach to recruiters, HR meets, and company campus visits.' },
      { title: 'Placement Preparation', description: 'Mock interviews, GD practice, aptitude sessions, and resume clinics.' },
      { title: 'Pre-Placement Talks', description: 'Hosting company presentations and recruiter interactions on campus.' },
      { title: 'Alumni Bridge', description: 'Connecting current students with placed alumni for guidance and referrals.' }
    ],
    flagshipEvent: {
      title: 'Career Conclave',
      description: 'An annual corporate meet bringing recruiters, alumni, and industry leaders to campus for panels, networking, and hiring conversations.',
      image: DUMMY_EVENT_1
    },
        team: [
      { name: 'Arockiya Raj', role: 'President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture.webp' },
      { name: 'Dinesh Kumar R', role: 'Vice President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-1.webp' },
      { name: 'Ramba Nishma', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-6.webp' },
      { name: 'Samadhi Yashwanthi', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-9-1.webp' },
      { name: 'Sankepalli Manasa', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-10.png' },
      { name: 'Rakesh Kavali', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-5.webp' }
    ]
  },
  {
    id: 'imedia',
    name: 'iMedia',
    fullName: 'Media & Communications Committee',
    tagline: 'Every Story. Every Frame. Every Voice of IZee.',
    oneLiner: 'Managing the brand, capturing the moments, and telling the stories that define our institution.',
    color: {
      base: '#9333ea', // purple-600
      light: '#faf5ff', // purple-50
      text: 'text-purple-600',
      bg: 'bg-purple-600',
      border: 'border-purple-200'
    },
    icon: 'Camera',
    heroImage: DUMMY_HERO_2,
    cardImage: DUMMY_CARD_IMAGE,
    logo: 'https://i.postimg.cc/GBk9kz1G/img2.png',
    about: "iMedia is the voice and lens of IZee Business School. The committee manages the institute's student-facing social media presence, covers every campus event, produces reels, photos, and stories, and builds the IZee brand in the digital world — giving members real experience in content creation, social media management, and brand communication.",
    mission: '• Manage and grow IZee\'s student-led social media channels with consistent, engaging content.\n• Cover every campus event with professional photo, video, and live updates.\n• Develop students\' skills in content creation, design, videography, and digital communication.\n• Amplify student achievements and campus stories to the outside world.',
    vision: 'To make IZee Business School one of Bangalore\'s most visible and admired B-school brands online — powered entirely by student creativity.',
    whatWeDo: [
      { title: 'Event Coverage', description: 'Photography, videography, reels, and live coverage of every campus event.' },
      { title: 'Social Media Management', description: 'Content calendars, posting, and engagement across platforms.' },
      { title: 'Creative Production', description: 'Posters, reels, campus stories, student spotlights, and podcasts.' },
      { title: 'Media Skills Workshops', description: 'Training members in editing, design tools, and storytelling.' }
    ],
    flagshipEvent: {
      title: 'IZee Lens',
      description: 'An annual campus media fest featuring reel-making competitions, photography contests, and creator workshops with Bangalore\'s digital creators.',
      image: DUMMY_EVENT_2
    },
        team: [
      { name: 'Arockiya Raj', role: 'President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture.webp' },
      { name: 'Dinesh Kumar R', role: 'Vice President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-1.webp' },
      { name: 'Ramba Nishma', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-6.webp' },
      { name: 'Samadhi Yashwanthi', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-9-1.webp' },
      { name: 'Sankepalli Manasa', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-10.png' },
      { name: 'Rakesh Kavali', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-5.webp' }
    ]
  },
  {
    id: 'ignite',
    name: 'iGnite',
    fullName: 'Entrepreneurship & Innovation Cell',
    tagline: 'Ideas Are Cheap. Execution Is Everything.',
    oneLiner: 'Fostering a culture of innovation, startup building, and entrepreneurial thinking on campus.',
    color: {
      base: '#ea580c', // orange-600
      light: '#fff7ed', // orange-50
      text: 'text-orange-600',
      bg: 'bg-orange-600',
      border: 'border-orange-200'
    },
    icon: 'Rocket',
    heroImage: DUMMY_HERO_1,
    cardImage: DUMMY_CARD_IMAGE,
    logo: 'https://i.postimg.cc/GBk9kz1v/img3.png',
    about: "iGnite is IZee's entrepreneurship and innovation cell — a launchpad for students who want to build, not just study business. From business plan competitions and startup simulations to founder talks and mentorship, iGnite creates an ecosystem where student ideas meet real-world execution, right in the heart of India's startup capital.",
    mission: '• Cultivate an entrepreneurial mindset across the student body.\n• Organize business plan competitions, pitch events, and startup simulations.\n• Connect students with Bangalore\'s founders, investors, and startup ecosystem.\n• Mentor and support student ventures from idea to execution.',
    vision: 'To make IZee a recognized starting point for student entrepreneurs in Bangalore — where at least one student venture takes real shape every year.',
    whatWeDo: [
      { title: 'Pitch Competitions', description: 'Business plan contests and idea-pitching events with real feedback.' },
      { title: 'Founder Talks', description: 'Sessions with startup founders and investors from the Bangalore ecosystem.' },
      { title: 'Startup Simulations', description: 'Market-scenario games, business quizzes, and strategy challenges.' },
      { title: 'Venture Mentorship', description: 'Guidance for students building real business ideas.' }
    ],
    flagshipEvent: {
      title: 'The IZee Pitch',
      description: 'An annual startup pitch competition where student teams present business ideas to a panel of founders and investors for feedback and potential incubation support.',
      image: DUMMY_EVENT_1
    },
        team: [
      { name: 'Arockiya Raj', role: 'President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture.webp' },
      { name: 'Dinesh Kumar R', role: 'Vice President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-1.webp' },
      { name: 'Ramba Nishma', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-6.webp' },
      { name: 'Samadhi Yashwanthi', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-9-1.webp' },
      { name: 'Sankepalli Manasa', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-10.png' },
      { name: 'Rakesh Kavali', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-5.webp' }
    ]
  },
  {
    id: 'ivibe',
    name: 'iVibe',
    fullName: 'Cultural & Sports Committee',
    tagline: 'Work Hard. Play Harder. Celebrate Together.',
    oneLiner: 'Bringing energy and life to the campus through vibrant cultural events and competitive sports.',
    color: {
      base: '#db2777', // pink-600
      light: '#fdf2f8', // pink-50
      text: 'text-pink-600',
      bg: 'bg-pink-600',
      border: 'border-pink-200'
    },
    icon: 'Music',
    heroImage: DUMMY_HERO_2,
    cardImage: DUMMY_CARD_IMAGE,
    logo: 'https://i.postimg.cc/wth3hFdN/img4.png',
    about: "iVibe brings IZee's campus to life. From festivals and cultural nights to sports tournaments and celebrations, the committee curates the experiences that turn a batch of students into a community — while teaching members large-scale event management, budgeting, and coordination skills that every manager needs.",
    mission: '• Organize cultural festivals, celebrations, and talent showcases through the year.\n• Run inter-batch and inter-college sports tournaments promoting fitness and team spirit.\n• Create an inclusive campus where every culture, talent, and tradition is celebrated.\n• Build event management and coordination skills in every member.',
    vision: "To make IZee's campus culture a reason students choose the institute — vibrant, inclusive, and unforgettable.",
    whatWeDo: [
      { title: 'Cultural Festivals', description: 'Annual fest, festival celebrations, talent nights, and theme days.' },
      { title: 'Sports Tournaments', description: 'Inter-batch leagues and inter-college competitions across sports.' },
      { title: 'Talent Platforms', description: 'Music, dance, drama, and open-mic stages for every student.' },
      { title: 'Event Management', description: 'End-to-end planning, budgeting, and execution of campus events.' }
    ],
    flagshipEvent: {
      title: 'IZee Utsav',
      description: 'The annual cultural and sports fest of IZee Business School, combining competitions, performances, and inter-college participation.',
      image: DUMMY_EVENT_2
    },
        team: [
      { name: 'Arockiya Raj', role: 'President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture.webp' },
      { name: 'Dinesh Kumar R', role: 'Vice President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-1.webp' },
      { name: 'Ramba Nishma', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-6.webp' },
      { name: 'Samadhi Yashwanthi', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-9-1.webp' },
      { name: 'Sankepalli Manasa', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-10.png' },
      { name: 'Rakesh Kavali', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-5.webp' }
    ]
  },
  {
    id: 'icare',
    name: 'iCare',
    fullName: 'Social Responsibility Committee',
    tagline: 'Leading with empathy, acting for impact.',
    oneLiner: 'Driving social change and community service initiatives to create responsible future leaders.',
    color: {
      base: '#16a34a', // green-600
      light: '#f0fdf4', // green-50
      text: 'text-green-600',
      bg: 'bg-green-600',
      border: 'border-green-200'
    },
    icon: 'Heart',
    heroImage: DUMMY_HERO_1,
    cardImage: DUMMY_CARD_IMAGE,
    logo: 'https://i.postimg.cc/tsnsgpSM/img5.png',
    about: "iCare represents the conscience of IZee. We are dedicated to giving back to society through structured volunteering, sustainability initiatives, and community outreach programs. It provides students with opportunities to lead social campaigns and create measurable impact.",
    mission: '• Instill a sense of social responsibility in students through community service.\n• Organize campus clean-ups, tree plantations, and sustainability drives.\n• Partner with NGOs for education, healthcare, and rural development projects.\n• Host annual blood donation camps and health awareness programs.',
    vision: 'To build a generation of empathetic leaders who actively contribute to a sustainable and equitable world.',
    whatWeDo: [
      { title: 'Community Outreach', description: 'Partnering with NGOs for education, healthcare, and rural development projects.' },
      { title: 'Sustainability Drives', description: 'Organizing campus clean-ups, tree plantation, and waste management awareness.' },
      { title: 'Blood Donation', description: 'Hosting annual mega blood donation camps in association with top hospitals.' },
      { title: 'Social Campaigns', description: 'Raising awareness for various social causes and community needs.' }
    ],
    flagshipEvent: {
      title: 'Project Sankalp',
      description: 'A month-long social initiative focused on providing education and resources to underprivileged children in the region.',
      image: DUMMY_EVENT_1
    },
        team: [
      { name: 'Arockiya Raj', role: 'President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture.webp' },
      { name: 'Dinesh Kumar R', role: 'Vice President', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-1.webp' },
      { name: 'Ramba Nishma', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-6.webp' },
      { name: 'Samadhi Yashwanthi', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-9-1.webp' },
      { name: 'Sankepalli Manasa', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-10.png' },
      { name: 'Rakesh Kavali', role: 'Core Member', image: 'https://izeeedu.com/wp-content/uploads/2026/02/Profile-Picture-5.webp' }
    ]
  }
];
