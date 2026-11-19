// Edit your portfolio content here. Keep the club's production source private.
// Leave email blank until you are comfortable publishing a professional contact address.
export const profile = {
  name: 'Adheesha Imada Kulasekara',
  email: '',
  github: 'https://github.com/AdheeshaImada',
  linkedin: 'https://www.linkedin.com/in/adheesha-kulasekara-3050a9261/'
};

// `image` graphics are abstract design elements, not claimed to be screenshots.
// To show genuine product screenshots later, update the project cards in main.js.
export const projects = [
  {
    id: 'educat', title: 'Educat', subtitle: 'E-learning platform',
    category: 'web', categoryLabel: 'WEB APPLICATION', featured: true,
    number: '01',
    description: 'A client-commissioned final-year team project. I built the platform’s entire administrative side. A deployed preview is available; the client plans to use the system in the future.',
    tags: ['Admin-side development', 'Team project', 'Client work'],
    live: 'https://educat-elearning-platform.vercel.app/',
    source: 'https://github.com/UpendraNilupul/Educat-elearning-platform',
    graphic: 'educat'
  },
  {
    id: 'jrc', title: 'Jaffna Rugby Club', subtitle: 'Official club website',
    category: 'web', categoryLabel: 'WEB APPLICATION', featured: true,
    number: '02',
    description: 'Independently developed a deployed website for the club, including pages, a gallery, administrative features, and ongoing improvements. The original source repository is private.',
    tags: ['Next.js', 'Prisma', 'Sole developer'],
    live: 'https://gallery.jaffnarugbyclub.com/',
    source: null,
    graphic: 'rugby'
  },
  {
    id: 'alien', title: 'Alien Invasion', subtitle: 'Arcade shooter',
    category: 'games', categoryLabel: 'GAME DEVELOPMENT', featured: false,
    number: '03', description: 'A 2D shooting game developed using Python and Pygame.',
    tags: ['Python', 'Pygame', '2D game'], live: null,
    source: 'https://github.com/AdheeshaImada/Alian-invasion', graphic: 'alien'
  },
  {
    id: 'js-game', title: '2D JavaScript Game', subtitle: 'Browser-based game',
    category: 'games', categoryLabel: 'GAME DEVELOPMENT', featured: false,
    number: '04', description: 'An interactive 2D browser game created with HTML, CSS and JavaScript.',
    tags: ['JavaScript', 'HTML', 'CSS'], live: null,
    source: 'https://github.com/AdheeshaImada/2D_Game_JS', graphic: 'js'
  },
  {
    id: 'timber', title: 'Timber', subtitle: 'Desktop game',
    category: 'games', categoryLabel: 'GAME DEVELOPMENT', featured: false,
    number: '05', description: 'A 2D game project built in C++ using the SFML multimedia library.',
    tags: ['C++', 'SFML'], live: null,
    source: 'https://github.com/AdheeshaImada/Timber', graphic: 'timber'
  },
  {
    id: 'data-vis', title: 'Data Visualization', subtitle: 'Python explorations',
    category: 'python', categoryLabel: 'PYTHON / DATA', featured: false,
    number: '06', description: 'Python exercises exploring charts, simulated data and visual storytelling.',
    tags: ['Python', 'Data visualization'], live: null,
    source: 'https://github.com/AdheeshaImada/data_visualization', graphic: 'data'
  }
];
