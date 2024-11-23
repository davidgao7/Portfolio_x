import {
    // mobile,
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
    // carrent,
    // jobit,
    // tripguide,
    threejs,
    haskell,
    profolio,
    python,
    // researchAssistant,
    // structureRAresult,
    metaverse_museum,
    museumResponse,
    neu,
    unl,
    // decisionboundary,
    // licensePlateCensorAPI,
    // erDiagram,
    researchAssistant,
    aws,
    db,
    resnet,
    droneProgram,
    structureRAresult,
    decisionboundary,
    licensePlateCensorAPI
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
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    {
        title: "Data Scientist",
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
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "Hive",
        icon: db,
    }
];

const experiences = [
    {
        title: "Machine Learning Engineer",
        company_name: "Dongfeng Motor Corporation",
        icon: dfm,
        iconBg: "#383E56",
        date: "Jan 2022 - Aug 2023",
        tags: [
            { name: "kubeflow", color: "blue-text-gradient" },
            { name: "tensorflow", color: "green-text-gradient" },
            { name: "evidently.ai", color: "pink-text-gradient" },
            { name: "streamlit", color: "purple-text-gradient" },
            { name: "apache hive", color: "orange-text-gradient" },
        ],
        points: [
            "Coordinated a cross-functional team and supervised 3 Machine Learning Engineers to develop 5 end-to-end ML workflows using Kubeflow pipelines for model auto-training.",
            "Utilized the Snapdragon Neural Processing Engine SDK to convert TensorFlow models into DLC format, optimizing for Qualcomm 8155 chips, maintaining over 85% multi-label model accuracy.",
            "Implemented an ML monitoring dashboard using Evidently.ai, reducing model downtime by 90% through proactive monitoring of key performance indicators (data drift, model accuracy, and customer prediction acceptance rate).",
            "Developed an interactive User Feedback Dashboard with Streamlit, resulting in a 60% increase in concrete requests from first-party buyers. Deployed the Streamlit Docker App in the first-party LAN’s Kubernetes network, achieving a 50% reduction in loading times.",
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
        tags: [
            { name: "yolov5", color: "blue-text-gradient" },
            { name: "flask", color: "green-text-gradient" },
            { name: "kubernetes", color: "pink-text-gradient" },
            { name: "gunicorn", color: "orange-text-gradient" },
        ],
        points: [
            "Engineered a license plate censor API with YOLOv5 and Flask, achieving an average inference speed of 0.26 seconds per image using a 2.3 GHz 8-Core Intel Core i9 CPU for images sized around 1152 x 746 pixels.",
            "Deployed the API on a Kubernetes cluster, optimizing resource utilization with Gunicorn’s concurrent request processing for efficient and scalable performance."
        ],
    },
    {
        title: "AI Engineer",
        company_name: "Metaverse Museum",
        icon: metaverse_museum,
        iconBg: "#1F2937",
        date: "May 2024 - Jun 2024",
        tags: [
            { name: "gpt-4", color: "blue-text-gradient" },
            { name: "langchain", color: "green-text-gradient" },
            { name: "vr", color: "pink-text-gradient" },
            { name: "prompt engineering", color: "orange-text-gradient" },
        ],
        points: [
            "Developed an AI tour guide for a VR art museum using GPT-4 and LangChain, enhancing conversational AI response handling.",
            "Implemented prompt engineering and utilized LangSmith for debugging pipelines, improving task complexity handling.",
            "Achievement: Secured 1st place in the Mideast Overseas Chinese Entrepreneurship Competition."
        ],
    },
    {
        title: "CS Student @ UNL",
        company_name: "Personal Project",
        icon: python,
        iconBg: "#1F2937",
        date: "Jun 2023 - Aug 2023",
        tags: [
            { name: "tensorflow", color: "blue-text-gradient" },
            { name: "deep learning", color: "green-text-gradient" },
            { name: "resnet", color: "pink-text-gradient" },
            { name: "cifar-10", color: "orange-text-gradient" },
        ],
        points: [
            "Implemented an image classification model using ResNet and PlainNet on the CIFAR-10 dataset, achieving 97% test accuracy.",
            "Conducted experiments comparing ResNet and PlainNet architectures, optimizing hyperparameters for improved performance.",
            "Utilized TensorFlow and Keras to train and validate models on GPU-accelerated systems."
        ],
    },
    {
        title: "Master Student @ NEU",
        company_name: "Personal Project",
        icon: neu,
        iconBg: "#1F2937",
        date: "May 2024",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "langchain", color: "green-text-gradient" },
            { name: "web scraping", color: "pink-text-gradient" },
            { name: "beautifulsoup", color: "orange-text-gradient" },
        ],
        points: [
            "Built and deployed a chatbot for research assistance using LangChain and web scraping tools like BeautifulSoup.",
            "Integrated Scraper Google Search API to gather web links and parsed content to provide references in under a minute.",
            "Streamlined logic debugging with LangSmith and deployed the assistant using LangServe for real-time interactions."
        ],
    },
    {
        title: "Master Student @ NEU",
        company_name: "Personal Project",
        icon: neu,
        iconBg: "#1F2937",
        date: "Mar 2024 - Nov 2024",
        tags: [
            { name: "aws", color: "blue-text-gradient" },
            { name: "lambda", color: "green-text-gradient" },
            { name: "rekognition", color: "pink-text-gradient" },
            { name: "serverless", color: "orange-text-gradient" },
        ],
        points: [
            "Created a serverless object detection application using AWS Lambda and Rekognition for a simulated manufacturing scenario.",
            "Automated widget inspections, reducing manual effort by 50% and enhancing overall developer efficiency.",
            "Achievement: Received perfect marks and praise from a professor with AWS Academy certification."
        ],
    },
    {
        title: "Drone Tracking Developer",
        company_name: "Personal Project",
        icon: unl,
        iconBg: "#1F2937",
        date: "Sep 2019 - Nov 2019",
        tags: [
            { name: "java", color: "blue-text-gradient" },
            { name: "mysql", color: "green-text-gradient" },
            { name: "agile", color: "pink-text-gradient" },
            { name: "junit", color: "orange-text-gradient" },
        ],
        points: [
            "Developed a drone tracking system using Java and MySQL with a three-tier architecture.",
            "Applied agile methodologies and implemented features with unit tests using JUnit.",
            "Presented the project to over 100 attendees, showcasing technical and teamwork achievements."
        ],
    },
    {
        title: "ResNet Classification",
        company_name: "Personal Project",
        icon: unl,
        iconBg: "#1F2937",
        date: "Jan 2021 - Feb 2021",
        tags: [
            { name: "tensorflow", color: "blue-text-gradient" },
            { name: "deep learning", color: "green-text-gradient" },
            { name: "resnet", color: "pink-text-gradient" },
            { name: "cifar-10", color: "orange-text-gradient" },
        ],
        points: [
            "Implemented an image classification model using ResNet and PlainNet on the CIFAR-10 dataset, achieving 97% test accuracy.",
            "Conducted an extensive analysis of various initialization techniques, activation functions, and learning rate optimizers to optimize performance.",
            "Authored a detailed research report documenting advantages, disadvantages, and experimentation processes of different model components."
        ],
    },
];

const projects = [
    {
        name: "Personal Portfolio",
        description:
            "Personal portfolio website built with React, Tailwind CSS, Vite.js, and Motion.js.",
        tags: [
            { name: "react", color: "blue-text-gradient" },
            { name: "motionjs", color: "green-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: profolio,
        source_code_link: "https://github.com/davidgao7/Portfolio_x",
    },
    {
        name: "Research Assistant",
        description:
            "A research assistant chatbot to help you get the latest and greatest research papers in a second!",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "rag", color: "green-text-gradient" },
            { name: "web scraping", color: "pink-text-gradient" },
        ],
        image: researchAssistant,
        source_code_link: "https://github.com/davidgao7/research_assistant",
    },
    {
        name: "Structure RA",
        description: "Your personal assistant on structured data!",
        tags: [
            { name: "agent", color: "blue-text-gradient" },
            { name: "rag", color: "green-text-gradient" },
            { name: "langchain", color: "pink-text-gradient" },
            { name: "langsmith", color: "purple-text-gradient" },
            { name: "langserve", color: "red-text-gradient" },
            { name: "structured data", color: "yellow-text-gradient" },
        ],
        image: structureRAresult,
        source_code_link: "https://github.com/davidgao7/StructureRA",
    },
    {
        name: "Museum AI Tour Guide",
        description: "Your personalized museum tour guide!",
        tags: [
            { name: "agent", color: "blue-text-gradient" },
            { name: "rag", color: "green-text-gradient" },
            { name: "langchain", color: "pink-text-gradient" },
            { name: "langsmith", color: "purple-text-gradient" },
            { name: "streamlit", color: "red-text-gradient" },
            { name: "structured data", color: "yellow-text-gradient" },
        ],
        image: museumResponse,
        source_code_link: "https://github.com/davidgao7/museum-tour-guide",
    },
    {
        name: "Decision Boundary",
        description:
            "A decision boundary visualizer for machine learning models.",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "numpy", color: "green-text-gradient" },
            { name: "matplotlib", color: "pink-text-gradient" },
            { name: "pandas", color: "yellow-text-gradient" },
            { name: "support vector machine", color: "blue-text-gradient" },
            { name: "machine learning", color: "pink-text-gradient" },
        ],
        image: decisionboundary,
        source_code_link:
            "https://github.com/davidgao7/MachineLearning/blob/master/Gao_David_assignment4.ipynb",
    },
    {
        name: "License Plate Censor API",
        description:
            "Developed an API using YOLOv5 for censoring license plates in images, achieving 0.26-second inference speed with optimized performance on Kubernetes.",
        tags: [
            { name: "yolov5", color: "blue-text-gradient" },
            { name: "pytorch", color: "green-text-gradient" },
            { name: "flask", color: "pink-text-gradient" },
            { name: "docker", color: "purple-text-gradient" },
            { name: "kubernetes", color: "red-text-gradient" },
        ],
        image: licensePlateCensorAPI,
        source_code_link: "https://github.com/davidgao7/licence-plate-censor",
    },
    {
        name: "Package Tracker",
        description:
            "Package-Tracker: A small unmanned aerial systems (SUAS) to track packages within the Lincoln and Omaha, Nebraska, areas.",
        tags: [
            { name: "java", color: "blue-text-gradient" },
            { name: "maven", color: "green-text-gradient" },
            { name: "hibernate", color: "pink-text-gradient" },
            { name: "google cloud platform", color: "purple-text-gradient" },
            { name: "gson", color: "red-text-gradient" },
            { name: "junit", color: "yellow-text-gradient" },
        ],
        image: droneProgram,
        source_code_link: "https://github.com/davidgao7/Package-Tracker",
    },
    {
        name: "ResNet Image Classifier",
        description:
            "Implemented an image classification model using ResNet and PlainNet on the CIFAR-10 dataset, achieving 97% accuracy through TensorFlow.",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "tensorflow", color: "green-text-gradient" },
            { name: "deep learning", color: "pink-text-gradient" },
            { name: "resnet", color: "purple-text-gradient" },
            { name: "cifar-10", color: "yellow-text-gradient" },
        ],
        image: resnet, // Update with actual image path
        source_code_link: "https://github.com/davidgao7/MachineLearning/blob/master/Choi_Gao_assignment2_Report.pdf",
    },
];

export { services, technologies, experiences, projects };

