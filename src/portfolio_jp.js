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

const greetingJp = {
  username: "Benjamin Di Giorgio",
  firstName: "Benjamin",
  lastName: "Di Giorgio", 
  subTitle:
    "データの深みにすごい興味を持っているデータアナリスト・プログラマー",
    resumeLink: "/resume/BenDiGiorgioRireki.docx",
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

const skillsSectionJp = {
  title: "何をする",
  subTitle: "データから本当に活用できる洞察力を見つける",
  skills: [
    emoji(
      "● ステークホルダーのご協力で何をしたいか、どんな質問を聞けばいいか、考える事、"),
    emoji("● Pythonでのウェブスクレーピングなどツールを使用し、データを集める事、"),
    emoji("● 使える状態にクリーニングし、分析で役に立つ計算をする事、"),
    emoji(
      "● 分析を行って、活用できる結果を出し、意味深くて、分かりやすいビジュアルを作る事。"
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
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfoJp = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Deakin University（ディーキン大学）オーストラリア",
      logo: require("./assets/images/deakinLogo.png"),
      subHeader: "商学士号（マーケティング専攻）",
      duration: "2018年3月 - 2023年6月",
      desc: "",
      descBullets: [
        "大学でマーケティングについて本当のデータで会社の分析のプロジェクトを何回か行いました。",
        "フランスで留学し、リスクマネージメントやブランドマネージメントを勉強しました。"
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

const workExperiencesJp = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "アパレル店員",
      company: "WEGO - 博多キャナルシティ店",
      companylogo: require("./assets/images/wegoLogo.png"),
      date: "2019年12月 – 2021年4月",
      desc: "パート",
      descBullets: [
        "レジ",
        "接客",
        "在庫管理"
      ]
    },
    {
      role: "料理長",
      company: "イタリアンバジル薬院店",
      companylogo: require("./assets/images/itabasiLogo.png"),
      date: "2020年11月 – 2022年4月",
      desc: "正社員",
      descBullets: [
        "在庫管理・発注担当",
            "会社で使う為や販売の為の農家さんからの野菜のスプレッドシートを作り、自動計算で共立を高めました。",
            "シフト作成",
            "発注",
            "新しいメニューを作成し、販売できるようにウーバーイーツや出前館などのプラットフォームの設定を行い"
      ]
    },
    {
      role: "ホールスタッフ",
      company: "ホテル日航福岡",
      companylogo: require("./assets/images/nikkoLogo.png"),
      date: "2022年5月 – 現在",
      desc: "派遣社員",
      descBullets: [
        "在庫管理・発注担当",
            "在庫管理・発注",
            "ネーム作成・英訳",
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

const bigProjectsJp = {
  title: "プロジェクト",
  subtitle: "行ったデータ分析/プログラミングのプロジェクト",
  projects: [
    {
      image: require("./assets/images/marketAnalysis.jpg"),
      projectName: "マーケティングキャンペーンアナリシス",
      projectDesc: "Kaggleからのデータを使用し、Pythonでデータをクリーンし、色々計算しました。分析をし、Tableauでビジュアルを作成しました。",
      footerLink: [
        {
          name: "コードを見る!",
          url: "https://github.com/bendigiorgio/Marketing_Analsysis/tree/main/Marketing_Analysis"
        },
        {
          name: "ビジュアルを見る！",
          url: "https://public.tableau.com/views/Marketing_Campaign_16651367845250/KMeansSegments?:language=en-US&:display_count=n&:origin=viz_share_link"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/crypto.png"),
      projectName: "暗号通貨の価格を予測するモデル",
      projectDesc: "マシーンラーニングを使用し、暗号通貨の価格を予測し、Binanceで暗号通貨を購入したり、売ったり、するモデル",
      footerLink: [
        {
          name: "コードを見る!",
          url: "https://github.com/bendigiorgio/crypto_machine_learning"
        }
      ]
    },
    {
      image: require("./assets/images/abLogo.png"),
      projectName: "広告の分析",
      projectDesc: "Pythonで広告の2種類の効果を比べて、レポートを書いた",
      footerLink: [
        {
          name: "もっと見る！",
          url: "https://github.com/bendigiorgio/Marketing_Analsysis/tree/main/Capstone_Project_AB"
        },
        
      ]
    },
    {
      image: require("./assets/images/faceWeb.png"),
      projectName: "フェイスIDログイン",
      projectDesc: "只今組んでいるフェイスIDのAPIとウェブサイト",
      footerLink: [
        {
          name: "途中",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSectionJp = {
  title: "資格",
  subtitle:
    "",

  achievementsCards: [
  {
      title: "Google Data Analytics Professional Certificate 　　（グーグルデータアナリストプロフェショナル）",
      subtitle:
        "グーグルとコーセーラからのデータ分析の資格",
      image: require("./assets/images/googleProLogo.png"),
      imageAlt: "Google Data Analytics Professional",
      footerLink: [
        {
          name: "資格を見る",
          url: "https://www.credly.com/badges/0c9cb685-05bc-4104-931a-a6d01f1da261/"
        }
      ]
    },
    {
      title: "日本語能力試験",
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


const contactInfoJp = {
  title: "連絡先",
  subtitle:
    "連絡して下さい!",
  email_address: "bendigiorgio@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greetingJp,
  socialMediaLinks,
  splashScreen,
  skillsSectionJp,
  educationInfoJp,
  techStack,
  workExperiencesJp,
  openSource,
  bigProjectsJp,
  achievementSectionJp,
  contactInfoJp,
  isHireable
};
