import {
    SiCplusplus,
    SiFramer,
    SiGit,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig,
    SiNodedotjs
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Portfolio 2023",
        description:
            "My Portfolio",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "https://github.com/carlos-saiz/Portfolio-Final",
        demo: "https://carlossaizdev.netlify.app/",
        image: "/projects/portfolio.webp",
        available: true,
    },
    {
        id: 1,
        name: "Pokedex",
        description:
            "Application of pokedex for android using react native with Jest testing",
        technologies: [SiTypescript, SiReact, SiGithub,SiNodedotjs],
        techNames: ["TypeScript", "React","Github","NodeJS"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/","https://github.com/","https://node.org"],
        github: "https://github.com/carlos-saiz/rn-pokedex/tree/dev",
        demo: "https://github.com/carlos-saiz/rn-pokedex/tree/dev",
        image: "/projects/Pokedex-final.png",
        available: true,
    },
    {
        id: 2,
        name: "U-Know Stiinta",
        description:
            "u-know frontend is a website that sells programming courses. Courses are stored in a MongoDB database.",
        technologies: [SiTypescript, SiReact, SiGithub,SiNodedotjs],
        techNames: ["TypeScript", "React","Github","NodeJS"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/","https://github.com/","https://node.org"],
        github: "https://github.com/factoriaf5-p7/ui-uknow-stiinta/tree/dev",
        demo: "",
        image: "/projects/stinta-final.png",
        available: true,
    },
    {
        id: 3,
        name: "Coming Soon",
        description:
            "I'm currently working on a couple of projects. I'll update this section as soon as I'm done.",
        technologies: [SiReact,SiTypescript],
        techNames: ["React","Typescript"],
        techLinks: ["https://www.react.org/","www.typescript.com"],
        github: "https://github.com/nuIIpointerexception/",
        demo: "https://github.com/nuIIpointerexception/",
        image: "/projects/construction.webp",
        available: false,
    },
];
