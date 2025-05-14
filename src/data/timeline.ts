export const timeline: TimelineItem[] = [
  {
    title: "Data Science & Machine Learning Bootcamp",
    location: "HACK A BOSS",
    link: "https://www.hackaboss.com/ciencia-datos-bootcamp",
    from: "October 2024",
    to: "March 2025",
    projects: [
      {
        title: "Meteorology Dashboard",
        description:
          "Led a cross-functional team of 3 for the final project, delivering a complete solution including Supabase DB, automated ETL, ML models, FastAPI, and Streamlit, with a successful Heroku deployment within 2 weeks. Engineered 4 advanced temperature prediction models with industry-competitive metrics (0.5% MSE, 0.5% MAE, 0.7% RMSE, 70% R²) using Keras GRU, LSTM, and SimpleRNN architectures, as well as Facebook Prophet.",
      },
      {
        title: "Billboard Music ETL",
        description:
          "Developed a Streamlit app for the midterm project, integrating Billboard charts and the Spotify API. Scraped lyrics from Genius using BeautifulSoup and performed sentiment analysis with NLTK and BERT, providing insights into the emotional landscape of music.",
      },
    ],
  },
  {
    title: "Sofware Developer - Work Experience",
    location: "BALIDEA",
    link: "https://www.balidea.com/gidi-supera-primer-piloto/",
    from: "February 2024",
    to: "April 2024",
    projects: [
      {
        title: "Android Application",
        description:
          "Developed a production-ready Android application for elderly users in a team of 2, utilizing Jetpack Compose and implementing a real-time audio visualization system, achieving low-latency across various low-end devices while delivering all features ahead of schedule.",
      },
      {
        title: "Chatbot API Testing Page",
        description:
          "Created a company Chatbot API testing page in Streamlit, with a voice cloning feature using XTTS.",
      },
      {
        title: "ML Dataset Validation",
        description:
          "Contributed to Galician audio sample validation for AI Chatbot training data.",
      },
    ],
  },
  {
    title: "International Baccalaureate",
    location: "Bexley Grammar School",
    link: "https://www.bexleygs.co.uk/page/?title=What+is+the+IB%3F&pid=132",
    from: "September 2020",
    to: "May 2022",
    projects: [
      {
        title: "Internal Assessment",
        description:
          "Engineered a custom Java game engine from first principles, implementing an efficient entity-component system architecture and a custom rendering pipeline using Swing. Maintained 60FPS across various low-end devices.",
      },
      {
        title: "Coursework",
        description:
          "Learnt about OOP, Networking, several Data Structures & Algorithms (Recursion, Binary Trees, Genetic Algorithms, Stacks, Heaps & Queues and the Instruction Cycle etc.) and more.",
      },
      {
        title: "Extended Essay",
        description:
          "Wrote a 4000 word essay on the ethics of Digital ID Systems and Biometrics.",
      },
    ],
  },
];

export type TimelineItem = {
  title: string;
  location: string;
  link: string;
  from: string;
  to: string;
  projects: TimelineProject[];
};

export type TimelineProject = {
  title: string;
  description: string;
};
