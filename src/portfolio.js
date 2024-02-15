/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/AnimationSplash"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hansika Yedlapalli",
  title: "Helloo! I'm Hansika!",
  subTitle: emoji(
    "An enthusiastic Full Stack Software Developer 💻 with experience in crafting dynamic Web and Mobile applications using JavaScript / Reactjs / Nodejs / React Native, and other innovative libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12QfaWgJShtrM3aLpOG_CzAMYspOCDAN5/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HansikaC",
  linkedin: "https://www.linkedin.com/in/hansika-yedlapalli/",
  gmail: "hansikayedlapalli@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ I Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ I like to explore various Full Stacks with cloud solutions"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS/ Azure/ Docker"
    ),
    emoji("⚡ Proficient in crafting full-stack applications with .Net")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia State University",
      logo: require("./assets/images/GSULogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2022 - April 2024",
      desc: "Worked as Graduate Computing Assistand and Teaching Assistant alongside the coursework.",
      descBullets: [
        "Spearheaded the development of Study Abroad Program Web Application",
        " Took courses about Web and Mobile App Development, Advanced Software Engineering, Machine Learning, Big Data Programming, Network (Neural) Science, ..."
      ]
    },
    {
      schoolName: "Osmania University - Vasavi college of Engineering",
      logo: require("./assets/images/VCELogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science & Engineering",
      duration: "August 2015 - May 2019",
      desc: "Took courses about Data Structures and Algorithms, Cryptography, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "85%" 
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "CADY Studios",
      companylogo: require("./assets/images/CadyLogo.png"),
      date: "July 2023 – Dec 2023",
      desc: "Significantly improved a dynamic photo management application, resulting in a significant improvement in customer satisfaction.",
      descBullets: [
        "Developed a responsive UI and backend services utilizing Angular, TypeScript, C#, and MS SQL.",
        "Implemented AWS services to optimize application performance and reduce latency."
      ]
    },
    {
      role: "Software Engineer",
      company: "Deloitte.",
      companylogo: require("./assets/images/DeloitteLogo.png"),
      date: "July 2019 – Nov 2021",
      desc: "Contributed significantly to the enhancement and performance of enterprise-level applications, ensuring seamless operation and efficiency.",
      descBullets: [
        "Improved app functionality and service performance through Azure Insights integration.",
        "Led successful migration projects and collaborated with support teams to streamline issue resolution.",
        "Implemented containerized application deployment for scalability and reliability."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Deloitte.",
      companylogo: require("./assets/images/DeloitteLogo.png"),
      date: "Jan 2019 – Jul 2019",
      desc: "Played a key role in developing efficient algorithms and enhancing chatbot functionality, optimizing user interaction and response times",
      descBullets: [
        "Developed efficient algorithms and implemented a knowledge base to enhance chatbot functionality.",
        "Realized cost reductions and improved scalability through serverless deployment with AWS Lambda."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "My Collaborations with startups and companies to develop their tech solutions",
  projects: [
    {
      image: require("./assets/images/VajraaLogo.png"),
      projectName: "Vajraa Foods",
      projectDesc: "Designed and implemented a user-friendly e-commerce website with seamless browsing and ordering capabilities.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://vajraa.in/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/OiiLogo.png"),
      projectName: "GSU - Office of International Initiatives",
      projectDesc: "Revamped the Study Abroad Program website, optimizing functionality and automated the streamlined manual operations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://international.gsu.edu/internationaltravel/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in touch!"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all."
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
