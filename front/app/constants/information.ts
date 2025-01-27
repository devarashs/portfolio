import GithubLogo from "@/material/github.png";
import EmailLogo from "@/material/email.png";
import TelegramLogo from "@/material/Telegram_logo.svg.webp";
import TwitchLogo from "@/material/twitch.jpg";

export const HeaderInfo = {
  title: "Welcome to my Portfolio!",
  logo: "./",
  githubLink: "https://github.com/devarashs",
  navLinks: [
    { title: "Home", path: "/" },
    { title: "Blogs", path: "/blogs" },
  ],
};

export const ContactInfo = [
  {
    title: "Github",
    link: "https://github.com/devarashs",
    description: "Check out my projects on Github",
    logo: GithubLogo,
  },
  {
    title: "Email",
    link: "me@devarash.icu",
    description: "For any queries, feel free to reach out to me at",
    logo: EmailLogo,
  },
  {
    title: "Telegram",
    link: "https://t.me/jungleash",
    description: "For a quick chat, you can also message me on",
    logo: TelegramLogo,
  },
  {
    title: "Twitch",
    link: "https://twitch.tv/damagedcodaa",
    description: "Catch me live on Twitch",
    logo: TwitchLogo,
  },
];

export const WorkShowcaseData = [
  {
    title: "Melk Pro Mobile App",
    description:
      "Melk Pro is a mobile application that helps real estate agents to manage their properties and clients. The app is built using React Native And is Available on Cafe Bazaar",
    link: "https://cafebazaar.ir/app/com.arashsalehkhah.melkproapp",
    // image: MelkproImage,
    role: "React Native Developer Responsible For Developing The App From Scratch And Publishing It On Cafe Bazaar",
  },
  {
    title: "Bridgit Audio Web App",
    description:
      "Bridgit Audio is a web application that helps users to listen to exclusive audio content. The app is built using React",
    link: "https://bridgitaudio.com",
    // image: BridgitAudioImage,
    role: "React Developer Responsible For Developing The App",
  },
  {
    title: "Nodeeweb Web App Builder",
    description:
      "Nodeeweb is an Open Source Web App Builder That Helps You To Create Web Apps Without Writing Any Code. The App Is Built Using React",
    link: "https://github.com/idehweb/nodeeweb",
    // image: NodeewebImage,
    role: "React Developer That Helped To Develop The App And Add New Features To It Which was being Used by Many Clients To Create Their Web Apps as a SaaS Product , I was Responsible For Developing Both Their Admin Panel and Their Frontend User Interface Which Was Being Used as Shops , Company Websites and etc, as Long as I was the contributor of the project I was also responsible for reviewing the code and merging the pull requests of other contributors.",
  },
  {
    title: "NEM Server Template",
    description:
      "NEM Server Template is a template that helps you to create a Node Express MongoDB Server with JWT Authentication and Role Based Access Control , It Can be Used as a Starter Template For Your Next Node Express MongoDB Project and Can be Setup in Minutes",
    link: "https://github.com/ChillHubCore/NEM-Server-Template",
    // image: NemServerImage,
    role: "Creator Of The Template And Responsible For Developing & Maintaining The Template , The Template is Being Used In My Applications and Has Been Adobted By a Few Developers to Create Their Own Projects With It.",
  },
  {
    title: "E-Vision",
    description:
      "E Vision is an all-in-one open-source e-commerce solution that integrates CMS, CRM, and a powerful page builder. Built with a robust stack of modern technologies, it leverages Node.js (pure and with Express) and MongoDB for the backend, while utilizing Next.js, React, and Vite for the user interface and admin panel. Designed to be modular and efficient, this ongoing project aims to streamline the creation and management of e-commerce platforms.",
    link: "https://github.com/ChillHubCore/e-Vision-admin-panel",
    role: "Full Stack Developer",
  },
];
