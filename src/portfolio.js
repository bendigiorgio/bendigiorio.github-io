/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Benjamin Di Giorgio",
  title: "Benjamin Di Giorgio",
  subTitle:
    "A data analyst with a passion for getting to the bottom of data",
    resumeLink: "/resume/BenDiGiorgioResume.docx",
  displayGreeting: true // Set false to hide this section, defaults to true
  
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bendigiorgio",
  linkedin: "https://www.linkedin.com/in/bendigiorgio/",
  gmail: "bendigiorgio@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FIND ACTIONABLE INSIGHTS FROM DATA",
  skills: [
    emoji(
      "● work with stakeholders to define what questions to ask"
    ),
    emoji("● source data through various means, including scraping the web using Python"),
    emoji("● clean and process data into a workable state."),
    emoji(
      "● analyse and visualise the data to provide meaningful outcomes."
    )
  ],

  //https://fontawesome.com/icons?d=gallery

  softwareSkills: [
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
     skillName: "Tableau",
     fontAwesomeClassname: "fas fa-signal"
    },
    {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Deakin University",
      logo: require("./assets/images/deakinLogo.png"),
      subHeader: "Bachelor of Commerce Majoring in Marketing",
      duration: "March 2018 - June 2023",
      desc: "",
      descBullets: [
        "With a major in marketing I have undertaken many tasks relating directly to businesses and their data",
        "Study abroad in France with a focus on luxury brand management and risk management"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Excel", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python",
      progressPercentage: "70%"
    },
    {
      Stack: "Tableau",
      progressPercentage: "60%"
    },
    {
      Stack: "SQL",
      progressPercentage: "45%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Store Clerk",
      company: "WEGO - Japan",
      companylogo: require("./assets/images/wegoLogo.png"),
      date: "December 2019 – April 2021",
      desc: "Worked as a part time employee",
      descBullets: [
        "Operated the register",
        "Greeted and guided customers to find clothing that they love",
        "Operated inventory management systems, involving multiple stores across the country"
      ]
    },
    {
      role: "Head Chef",
      company: "Italian Basil - Japan",
      companylogo: require("./assets/images/itabasiLogo.png"),
      date: "November 2020 – April 2022",
      desc: "Worked full time as a full time employee (Managerial)",
      descBullets: [
        "Organised inventory and orders",
        "Created internal and external spreadsheets and documents for the sale of fresh produce",
        "Organised and and create shift rosters for staff",
        "Developed new menu and set up the systems to sell products through delivery applications"
      ]
    },
    {
      role: "Hall Staff",
      company: "Hotel Nikko Fukuoka - Japan",
      companylogo: require("./assets/images/nikkoLogo.png"),
      date: "May 2022 – Present",
      desc: "Work as a full time contract employee",
      descBullets: [
        "Organised inventory and orders",
        "Created nameplates for food/service",
        "Translated Japanese Nameplates and Instructions to English"
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
  title: "My Projects",
  subtitle: "DATA ANALYSIS/CODING PROJECTS I HAVE UNDERTAKEN",
  projects: [
    {
      image: require("./assets/images/marketAnalysis.jpg"),
      projectName: "Marketing Campaign Analysis",
      projectDesc: "Used Python to clean and create features for a dataset from Kaggle. Used Tableau to visualise findings and display recommendations",
      footerLink: [
        {
          name: "Check out the code!",
          url: "https://github.com/bendigiorgio/Marketing_Analsysis/tree/main/Marketing_Analysis"
        },
        {
          name: "View visualisation",
          url: "https://public.tableau.com/views/Marketing_Campaign_16651367845250/KMeansSegments?:language=en-US&:display_count=n&:origin=viz_share_link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/crypto.png"),
      projectName: "Cryptocurrency Machine Learning Model",
      projectDesc: "A cryptocurrency price-change prediction ML model based in Python, utilizing SQLite for a database",
      footerLink:[
        {
          name: "Check out the code!",
          url: "https://github.com/bendigiorgio/crypto_machine_learning"
        }
      ]
    },
    {
      image: require("./assets/images/abLogo.png"),
      projectName: "Advertisement Analysis",
      projectDesc: "Conducted an A/B analysis for an advertisement to determine the effectiveness of an advertisement compared to its previous version",
      footerLink: [
        {
          name: "Check it out!",
          url: "https://github.com/bendigiorgio/Marketing_Analsysis/tree/main/Capstone_Project_AB"
        },
        
      ]
    },
    {
      image: require("./assets/images/faceWeb.png"),
      projectName: "Facial Recognition Account Storage",
      projectDesc: "An in-progress mockup of a system to create accounts and login using facial recognition, and its implementation",
      footerLink: [
        {
          name: "Check it out!",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications",
  subtitle:
    "Certifications that I have achieved",

  achievementsCards: [
  {
      title: "Google Data Analytics Professional Certificate",
      subtitle:
        "Completed Google's data analytics professional course",
      image: require("./assets/images/googleProLogo.png"),
      imageAlt: "Google Data Analytics Professional",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credly.com/badges/0c9cb685-05bc-4104-931a-a6d01f1da261/"
        }
      ]
    },
    {
      title: "Japanese Language Proficiency Test (JLPT)",
      subtitle:
        "",
      image: require("./assets/images/jlptLogo.jpg"),
      imageAlt: "Japanese Language Proficeiency Test",
      footerLink: [
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: "Contact",
  subtitle:
    "Get in touch!",
  email_address: "bendigiorgio@gmail.com"
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
  contactInfo,
  isHireable
};
