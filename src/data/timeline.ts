export const timeline: TimelineItem[] = [
  {
    title: "Data Science & Machine Learning Bootcamp",
    location: "HACK A BOSS",
    link: "https://www.hackaboss.com/ciencia-datos-bootcamp",
    from: "October 2024",
    to: "March 2025",
    projects: [
      {
        title: "Weekly Tasks",
        description: `<strong>Completed various weekly ML model tasks with an average mark of ~95% including the following and more</strong>:
        
        • PySpark Heart Disease Classification
        
        • Keras Car Price Regression
        
        • SciKit-Learn Fraud Classification
      `,
      },
      {
        title: "Meteorology Dashboard",
        description: `• Led a team of 3, delivering a full-stack Python solution with a FastAPI backend and Streamlit frontend.          
        
        • Engineered 4 advanced temperature prediction models with industry-competitive metrics (0.5% MSE, 0.5% MAE, 0.7% RMSE, 70% R²) leveraging Keras’ GRU, LSTM, and SimpleRNN architectures, as well as Facebook Prophet.
        
        • Developed a live weather dashboard with real-time interactive charts & choropleth maps with Plotly and GeoJSON.
        
        • Designed a fully-automated ETL pipeline extracting 20+ years worth of data in < 1 day utilizing rotating API keys.
        
        • Managed a PostgreSQL database on Supabase with RLS and Custom Table Policies.
        
        • Achieved a successful Heroku deployment within the first 2 weeks.`,
      },
      {
        title: "Billboard Music ETL",
        description: `• Developed a Streamlit app for the midterm project, integrating Billboard charts and the Spotify API.
          
        • Scraped lyrics from Genius using BeautifulSoup and performed sentiment analysis with NLTK and BERT, providing insights into the emotional landscape of music.`,
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
        description: `
        <strong>Delivered all features ahead of schedule and received a 10/10 satisfaction rating from the company.</strong>
        
        • Developed in a team of 2 a production-ready Android Jetpack Compose application for elderly users
        
        • Leveraged Kotlin’s asynchronous coroutines for a real-time, <2ms latency audio visualisation system`,
      },
      {
        title: "Chatbot API Testing Page",
        description:
          "• Created a company Chatbot API testing page in Streamlit, with a voice cloning feature using XTTS.",
      },
      {
        title: "ML Dataset Validation",
        description:
          "• Contributed to Galician audio sample validation for AI Chatbot training data.",
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
          "• Engineered a custom Java game engine from first principles, implementing an efficient entity-component system architecture and a custom rendering pipeline using Swing. Maintained 60FPS across various low-end devices.",
      },
      {
        title: "Coursework",
        description:
          "• Learnt about OOP, Networking, several Data Structures & Algorithms (Recursion, Binary Trees, Genetic Algorithms, Stacks, Heaps & Queues and the Instruction Cycle etc.) and more.",
      },
      {
        title: "Extended Essay",
        description:
          "• Wrote a 4000 word essay on the ethics of Digital ID Systems and Biometrics.",
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
