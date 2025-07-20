// Icons
import html from "../assets/icons/skills-icon/html.svg";
import css from "../assets/icons/skills-icon/css.svg";
import js from "../assets/icons/skills-icon/javascript.svg";
import mdb from "../assets/icons/skills-icon/mongodb.svg";
import express from "../assets/icons/skills-icon/expjs.png";
import react from "../assets/icons/skills-icon/react-js.svg";
import node from "../assets/icons/skills-icon/nodejs.png";
import leaflet from "../assets/icons/skills-icon/leaflet.png";
import ml from "../assets/icons/skills-icon/ml.png"
import py from "../assets/icons/skills-icon/python.svg";
import fast from "../assets/icons/skills-icon/fastapi.png";
import skl from "../assets/icons/skills-icon/scikit.png";
import scy from "../assets/icons/skills-icon/spacy.png";
import tsflow from "../assets/icons/skills-icon/tensorflow.png";
import sns from "../assets/icons/skills-icon/seaborn.png"
import ol from "../assets/icons/skills-icon/ollama.png"

// projectImagess
import IP from "../assets/images/projectImages/IP.png"
import news from "../assets/images/projectImages/News.png"
import quest from "../assets/images/projectImages/Quest.png"
import agri from "../assets/images/projectImages/AgriAsst.png"
import threat from "../assets/images/projectImages/ThreatDetect.png"
import obscure from "../assets/images/projectImages/Obscure.png"
import disaster from "../assets/images/projectImages/Disaster2.png"
import vaayu from "../assets/images/projectImages/Vaayu2.png"
import alzheimer from "../assets/images/projectImages/Alzheimer.png"
import bull from "../assets/images/projectImages/Bull.png"



export const Projects = {
    "IP": {
        "image": IP,
        "title": "IP Address Tracker",
        "subTitle": "Real-Time IP Geolocation and Mapping Tool",
        "insights": {
            "desc": ` IP Address Tracker is a web-based tool that tracks and visualizes any IP address by displaying its location, ISP, and timezone on an interactive map. 
            It simplifies IP-based lookup and helps users understand geolocation data in an intuitive way.`,
            "category": "Networking, Web Application, JavaScript ",
            "techStack": [html, css, js, leaflet],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
    "News": {
        "image": news,
        "title": "News Today",
        "subTitle": "Real-Time News, Weather & Stocks Dashboard",
        "insights": {
            "desc": `News Today is a dynamic web application that aggregates top news headlines, live weather updates, and real-time stock market data into a single, user-friendly dashboard. 
            It streamlines access to essential daily information, enhancing user convenience and engagement.`,
            "category": "Developer Tools, Community, Web Application ",
            "techStack": [html, css, js, react],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
    "Quest": {
        "image": quest,
        "title": "CodeQuest",
        "subTitle": "Programmer Q&A and Community Discussion Platform",
        "insights": {
            "desc": `CodeQuest is a full-stack web application that enables programmers to ask questions, share answers, and vote on solutions. 
            The platform fosters collaborative learning and knowledge exchange within the developer community through a clean, interactive interface and secure user authentication.`,
            "category": "Cybersecurity, AI/ML, Web Application",
            "techStack": [mdb, express, react, node],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
    "Agriculture ": {
        "image": agri,
        "title": "Smart Agriculture Assistant",
        "subTitle": "AI-Powered Support Platform for Farmers",
        "insights": {
            "desc": `Smart Agriculture Assistant is a web-based platform designed to help farmers with crop diagnosis, weather updates, and real-time agricultural support. 
            It features AI-driven image analysis for crop diseases, multi-language support, and a voice-enabled chatbot to provide market prices, farming tips, and live assistance—making modern agriculture more accessible and efficient.`,
            "category": "Agriculture, AI, Web Application",
            "techStack": [mdb, express, react, node],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
    "Threat": {
        "image": threat,
        "title": "AI Cyber Threat Detection",
        "subTitle": "Real-Time Phishing & Malicious Link Detection System",
        "insights": {
            "desc": `AI Cyber Threat Detection is a browser-based security tool that uses machine learning and natural language processing to identify phishing attempts and malicious websites in real time. 
            The system prioritizes user privacy while delivering proactive protection against cyber threats through intelligent analysis of links and messages. `,
            "category": "Cybersecurity, AI, Web Application",
            "techStack": [py, skl, fast, scy, js],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
    "Obscure ": {
        "image": obscure,
        "title": "Project Obscure",
        "subTitle": "Lightweight, Screen-Aware Desktop AI Assistant",
        "insights": {
            "desc": "Project Obscure is a stealthy desktop AI assistant that delivers real-time, screen-aware voice interaction. It runs locally using a lightweight Phi LLM via Ollama, featuring speech-to-text, JSON-based memory, and tailored prompt engineering for natural conversations—all while maintaining ultra-low CPU usage.",
            "category": "AI Assistant, Voice Interaction, Desktop Tool",
            "techStack": [py, ol],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
    "Disaster ": {
        "image": disaster,
        "title": "Disaster Whisperer",
        "subTitle": "AI-Powered Disaster Risk Prediction and Visualization System",
        "insights": {
            "desc": "Disaster Whisperer is an AI-powered web application designed to predict and visualize region-specific disaster risks. It combines geospatial data analysis with an interactive map and natural language processing to provide localized insights and support proactive disaster preparedness.",
            "category": "Environment, Geospatial AI, Web Application",
            "techStack": [react, fast, leaflet, ol],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
    "Vaayu": {
        "image": vaayu,
        "title": "VAAYU",
        "subTitle": "AI-Powered Satellite-Based Air Quality Monitoring System",
        "insights": {
            "desc": `VAAYU is an AI-driven air quality monitoring platform that estimates PM2.5 and PM10 levels across India using satellite imagery and weather data, even in areas lacking ground sensors. 
            It provides real-time pollution maps, forecasts, and health alerts via a multilingual mobile app and SMS/IVR services—bridging the data gap for underserved and rural communities. `,
            "category": "Environment, AI, Satellite Data, Mobile Application",
            "techStack": [py, skl, fast, react],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
    "Alzheimer": {
        "image": alzheimer,
        "title": "Early Detection of Alzheimer’s",
        "subTitle": "Speech-Driven Cognitive Health Screening Tool",
        "insights": {
            "desc": `his project is an AI-based system that detects early signs of Alzheimer’s disease by analyzing spontaneous speech. 
            It leverages linguistic and acoustic features extracted from patient transcripts and audio recordings, applying NLP and machine learning models to enable scalable, non-invasive cognitive screening.`,
            "category": "Healthcare, AI, NLP, Accessibility",
            "techStack": [ml, py, skl, scy],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
    "BullSeer": {
        "image": bull,
        "title": "BullSeer",
        "subTitle": "Stock Market Trend Prediction Platform",
        "insights": {
            "desc": `BullSeer is a machine learning-based platform designed to predict future stock price movements using historical data, market trends, and sentiment analysis. 
            By combining classical ML models and LSTM neural networks, it empowers investors to make smarter, data-driven trading decisions in volatile financial markets.`,
            "category": "Web Design, Landing Page",
            "techStack": [py, skl, sns, tsflow],
            "reportLink": ""
        },
        "githubLink": "https://github.com/sanafathima-00"
    },
}
