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
    // { title: "Blogs", path: "/blogs" },
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
    title: "E-Vision",
    description:
      "E Vision is an all-in-one open-source e-commerce solution that integrates CMS, CRM, and a powerful page builder. Built with a robust stack of modern technologies, it leverages Node.js (pure and with Express) and MongoDB for the backend, while utilizing Next.js, React, and Vite for the user interface and admin panel. Designed to be modular and efficient, this ongoing project aims to streamline the creation and management of e-commerce platforms.",
    link: "https://github.com/ChillHubCore/e-Vision-admin-panel",
    role: "Full Stack Developer",
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
    title: "NEM Server Template",
    description:
      "NEM Server Template is a template that helps you to create a Node Express MongoDB Server with JWT Authentication and Role Based Access Control , It Can be Used as a Starter Template For Your Next Node Express MongoDB Project and Can be Setup in Minutes",
    link: "https://github.com/ChillHubCore/NEM-Server-Template",
    // image: NemServerImage,
    role: "Creator Of The Template And Responsible For Developing & Maintaining The Template , The Template is Being Used In My Applications and Has Been Adobted By a Few Developers to Create Their Own Projects With It.",
  },
];
