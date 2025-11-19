// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nozhana', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['nozhana/stocks-clone'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      // manual: {
      //   // Properties for manually specifying projects
      //   projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      // },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: "Nozhan Amiri, Mid-Level iOS Engineer based in Tehran, Iran.",
    description: "Mid-Level iOS Engineer, 4+ years in Swift, Objective-C, and mobile development.",
    imageURL: "",
    schema: {
      "@context": "http://schema.org",
      "@type": "Person",
      name: "Nozhan Amiri",
      alternateName: [
        "Nozhan",
        "Sayed Nozhan Amiri Naini",
        "nozhana",
        "نوژن امیری",
        "سید نوژن امیری نایینی",
      ],
      email: "nozhan.work@gmail.com",
      familyName: "Amiri",
      givenName: "Nozhan",
      knowsLanguage: ["English", "Persian", "German"],
      jobTitle: "Mid-Level iOS Engineer",
      worksFor: {
        "@type": "Organization",
        name: "GCo Apps"
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "University of Kashan"
      },
      url: "https://nozhana.github.io",
      image: "",
      sameAs: [
        "http://www.linkedin.com/in/nozhana",
        "http://www.github.com/nozhana"
      ],
      workLocation: {
        "@type": "Place",
        address: {
          "@type": "75230",
          addressLocality: "Tehran",
          addressRegion: "Tehran"
        }
      }
    }
  },
  social: {
    linkedin: 'nozhana',
    x: 'get__swifty',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'nozhan.dev',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: 'nozhana',
    telegram: 'nozhanw',
    website: 'https://nozhana.github.io',
    phone: '+98 913 269 8743',
    email: 'nozhan.work@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/13oCSExURkd-Eik-emOlYJUolRSiAwtnL/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Swift',
    'SwiftUI',
    'UIKit',
    'Combine',
    'AVKit',
    'CoreImage',
    'CoreData',
    'SwiftData',
    'Fluent',
    'Realm',
    'Concurrency API',
    'MVVM',
    'Clean Architecture',
    'MVC',
    'Composable Architecture (TCA)',
    'MV (Model-View)',
    'Swift Testing',
    'XCTest',
    'Fastlane',
    'Github Actions',
    'Testflight',
    'Diawi',
    'Figma',
    'Sketch',
    'RESTful APIs',
    'GraphQL',
    'Git',
    'CocoaPods',
    'SPM',
    'Linux'
  ],
  experiences: [
    {
      company: 'GCo Apps',
      position: 'Mid-Level iOS Engineer',
      from: 'October 2024',
      to: 'Present',
      companyLink: 'https://gcoapps.com',
      achievements: [
        'Sole developer of LOMO, a photography app focused on creative filters and retro aesthetics.',
        'Sole developer of Recipin, an AI meal planner and recipe generator.',
        'Contributed to Voix, a voice recorder app with AI integration for transcription and content summarization.',
        'Architecting and developing high-performance SwiftUI applications, with a focus on maintainable, scalable code, adhering to SOLID principles.',
        'Designing and implementing custom GPU-accelerated image filters using CoreImage, CIKernel, Metal, and GPUImage3, including fragment shaders for optimal performance.',
        'Employing dependency injection to enhance modularity and testability.',
        'Profiling and optimizing app performance with Instruments, reducing bottlenecks by over 50% in LOMO.'
      ]
    },
    {
      company: 'Luminatech',
      position: 'Junior iOS Developer',
      from: 'June 2022',
      to: 'October 2024',
      companyLink: 'https://tisitano.com',
      achievements: [
        'Architected key components of the iOS project, including a custom Markdown parser compatible with iOS 12+ using a bespoke tokenizer.',
        'Migrated RxSwift pub/sub streams to Combine, improving maintainability and performance.',
        'Connected the app to Google and Facebook marketing services, enabling Firebase/FB analytics and user engagement tracking.',
        'Developed complex interfaces using UIKit, both programmatically with SnapKit and via Storyboards, optimizing for flexibility and maintainability.',
        'Contributed to CI/CD pipelines with Fastlane and managed dependencies using CocoaPods/SPM.',
        'Implemented a custom dependency injection system using a factory abstraction pattern.'
      ]
    },
  ],
  certifications: [
    {
      name: 'Advanced Programming in Swift',
      body: 'Credential ID: DXCSHKETM6S8 | Grade: 98%',
      year: 'February 2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/DXCSHKETM6S8',
    },
  ],
  educations: [
    {
      institution: 'University of Kashan',
      degree: 'ASc Software Engineering',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Shahid Ejei (NODET)',
      degree: 'High School Diploma (Mathematics)',
      from: '2011',
      to: '2015',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  clarity: {
    id: ""
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '157db58b19526', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],

    // Custom theme, applied to the "procyon" theme.
    customTheme: {
      primary: "rgba(113,206,109,0.68)",
      "base-100": "rgba(31,31,37,0.09)",
      "base-400": "rgba(233,233,253,0.09)",
      "--rounded-box": "1rem",
      "--rounded-btn": "1rem"
    }
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
