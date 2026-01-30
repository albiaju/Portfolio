import { Github, Linkedin, Mail, Smartphone } from 'lucide-react';

export const personalInfo = {
    name: "Albi AJu",
    role: "Full Stack Developer",
    bio: "Passionate developer with a knack for building beautiful and functional web applications.",
    email: "contact@example.com",
    phone: "+1234567890",
    socials: [
        { name: "GitHub", url: "https://github.com", icon: Github },
        { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
        { name: "Email", url: "mailto:contact@example.com", icon: Mail },
    ]
};

export const projects = [
    {
        id: 1,
        title: "Project One",
        description: "A fantastic project that solves a real-world problem.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=640",
        tags: ["React", "Node.js", "MongoDB"],
        demo: "#",
        code: "#"
    },
    {
        id: 2,
        title: "Project Two",
        description: "Another great application with amazing features.",
        image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=640",
        tags: ["Vue", "Firebase"],
        demo: "#",
        code: "#"
    },
    {
        id: 3,
        title: "Project Three",
        description: "Creative design implementation.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=640",
        tags: ["HTML", "CSS", "JavaScript"],
        demo: "#",
        code: "#"
    }
];

export const experience = [
    {
        id: 1,
        role: "Senior Developer",
        company: "Tech Corp",
        period: "2023 - Present",
        description: "Leading the frontend team and shipping cool features."
    },
    {
        id: 2,
        role: "Web Developer",
        company: "Startup Inc",
        period: "2021 - 2023",
        description: "Built the main product from scratch using React."
    }
];
