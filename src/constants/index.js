import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    dfm,
    carrent,
    jobit,
    tripguide,
    threejs,
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

// TODO: add your titles
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
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
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };

