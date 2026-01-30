import { Github, Linkedin, Mail } from 'lucide-react';

export const personalInfo = {
    name: "ALBI AJU",
    role: "Data Analyst",
    bio: "Transforming raw data into actionable insights. Skilled in Python, SQL, and Data Visualization. Graduating in March 2026.",
    email: "albiaju2001@gmail.com",
    phone: "+91-8281035489",
    socials: [
        { name: "GitHub", url: "https://github.com/albiaju", icon: Github },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/albi-aju-249391296/", icon: Linkedin },
        { name: "Email", url: "mailto:albiaju2001@gmail.com", icon: Mail },
    ]
};

export const projects = [
    {
        id: 1,
        title: "AI Document Query System",
        description: "Built an AI-based document query system by designing clean REST APIs using FastAPI. Implemented session memory and multi-document querying with vector search optimization.",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=640",
        tags: ["Python", "FastAPI", "React.js", "Vector Search"],
        code: "https://github.com/albiaju/ceino_chatbot"
    },
    {
        id: 2,
        title: "Heart Attack Risk Analysis",
        description: "Built a data pipeline for cleaning, EDA, and feature selection. Implemented Logistic Regression, Random Forest, and KNN models. Delivered results via Streamlit app.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=640",
        tags: ["Python", "Streamlit", "ML", "EDA"],
        code: "https://github.com/albiaju/Heart_Attack_prediction"
    }
];

export const experience = [
    {
        id: 1,
        role: "AI Engineer Intern",
        company: "Ceino Technologies",
        companyUrl: "https://ceino.com/",
        period: "May 2025 – Jun 2025",
        description: "Built an AI-based document query system using FastAPI and React. Optimized retrieval logic with vector search and collaborated in a Git-based remote workflow."
    },
    {
        id: 2,
        role: "Java Developer Intern",
        company: "Cognifyz Technologies",
        companyUrl: "https://cognifyz.com/",
        period: "May 2024 – Jun 2024",
        description: "Strengthened Java OOP concepts. Built a Java Swing Tic-Tac-Toe application and practiced debugging and writing maintainable code."
    }
];
