import {
    mobile,
    backend,
    // creator,
    web,
    javascript,
    java,
    // typescript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    // mongodb,
    git,
    // figma,
    docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    dfm,
    carrent,
    jobit,
    tripguide,
    threejs,
    haskell,
    profolio,
    python,
    researchAssistant
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

// add your titles
const services = [
    {
        title: "Machine Learning Engineer",
        icon: backend,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Kubernetes & Docker",
        icon: backend
    },
];

// TODO: add your technologies
const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Haskell",
        icon: haskell,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    // {
    //     name: "MongoDB",
    //     icon: mongodb,
    // },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Kubernetes",
        icon: java,
    }
];

const experiences = [
    {
        title: "Machine Learning Engineer",
        company_name: "Dongfeng Motor Corporation",
        icon: dfm,
        iconBg: "#383E56",
        date: "Jan 2022 - Aug 2023",
        points: [
            "Coordinated a cross-functional team and supervised 3 Machine Learning Engineers to develop 5 end-to-end ML workflows using Kubeflow pipelines for model auto-training.",
            "Utilized the Snapdragon Neural Processing Engine SDK to convert TensorFlow models into DLC format, optimizing for Qualcomm 8155 chips, maintaining over 85\% multi-label model accuracy.",
            "Implemented an ML monitoring dashboard using Evidently.ai, reducing model downtime by 90\% through proactive monitoring of key performance indicators (data drift, model accuracy, and customer prediction acceptance rate).",
            "Developed an interactive User Feedback Dashboard with Streamlit, resulting in a 60\% increase in concrete requests from first-party buyers. Deployed the Streamlit Docker App in the first-party LAN’s Kubernetes network, achieving a 50\% reduction in loading times.",
            "Connected the dashboard with Apache Hive data, enabling non-machine learning users to query real-time updates dynamically. It empowers users to derive tangible measurements for comprehensive model performance assessment.",
            "Achievement: Received the Innovation Support Award from first-party buyers."
        ],
    },
    {
        title: "Machine Learning Engineer",
        company_name: "Dongfeng Motor Corporation",
        icon: dfm,
        iconBg: "#383E56",
        date: "Dec 2021 - Jan 2022",
        points: [
            "Engineered a license plate censor API with YOLOv5 and Flask, achieving an average inference speed of 0.26 seconds per image using a 2.3 GHz 8-Core Intel Core i9 CPU for images sized around 1152 x 746 pixels",
            "Deployed the API on a Kubernetes cluster, optimizing resource utilization with Gunicorn’s concurrent request processing for efficient and scalable performance"
        ],
    }
];

const testimonials = [
    //{
    // testimonial:
    //      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //    designation: "CFO",
    //     company: "Acme Co",
    //     image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
];

const projects = [
    {
        name: "Personal Portfolio",
        description:
            "personal portfolio website built with React, Tailwind CSS, vite.js, and Motion.js",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "motionjs",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: profolio,
        source_code_link: "https://github.com/davidgao7/Portfolio_x",
    },
    {
        name: "research assistant",
        description:
            "a research assistant chat bot to help you get the latest and greatest research papers in a second!",
        tags: [
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "rag",
                color: "green-text-gradient",
            },
            {
                name: "web scraping",
                color: "pink-text-gradient",
            },
        ],
        image: researchAssistant,
        source_code_link: "https://github.com/davidgao7/research_assistant",
    },
];

export { services, technologies, experiences, testimonials, projects };

