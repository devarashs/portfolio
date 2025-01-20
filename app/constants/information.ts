import GithubLogo from "@/material/github.png";
import EmailLogo from "@/material/email.png";
import TelegramLogo from "@/material/Telegram_logo.svg.webp";

export const HeaderInfo = {
  title: "Welcome to my Portfolio!",
  logo: "./",
  githubLink: "https://github.com/devarashs",
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
];
