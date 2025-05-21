function getImages(id: string, total: number) {
  const images = [];
  for (let i = 1; i <= total; i++) {
    images.push(`/project-images/${id}/${id}-${i}.webp`);
  }
  return images;
}

export const projects: Project[] = [
  {
    id: "meteo",
    title: "Meteorology Dashboard",
    description:
      "Weather Dashboard with AEMET API featuring ML predictions for daily temperature forecast.",
    images: getImages("meteo", 4),
    technologies: [
      "Streamlit",
      "FastAPI",
      "Supabase",
      "Pandas",
      "Plotly",
      "Keras",
      "Heroku",
    ],
    repoLink:
      "https://github.com/HAB-Equipo-Meteorologia/Proyecto-Meteorologico",
    liveLink: null,
  },
  {
    id: "sentiverse",
    title: "Sentiverse",
    description:
      "Full-stack application that analyzes song lyrics and classifies them into emotionally opposite pairs.",
    images: getImages("sentiverse", 4),
    technologies: [
      "React",
      "TailwindCSS",
      "FastAPI",
      "OpenAI",
      "GraphQL",
      "Nginx",
      "Google Cloud",
    ],
    repoLink: "https://github.com/saragarcia6123/Sentiverse",
    liveLink: null,
  },
  {
    id: "brand-plots",
    title: "Leads Summary Sheet",
    description:
      "Generates a collection of diverse plots for various insights into leads and time interval analysis.",
    images: getImages("brand-plots", 6),
    technologies: ["Streamlit", "Pandas", "Seaborn", "MatplotLib", "SciPy"],
    repoLink: "https://github.com/saragarcia6123/brand-data-summary-sheet",
    liveLink: "https://leads-summary-sheet.streamlit.app/",
  },
  {
    id: "audio-recorder",
    title: "Live Audio Visualizer",
    description:
      "Generates realtime audio visualization with Jetpack Compose. Part of a larger app made during Work Experience.",
    images: getImages("audio-recorder", 2),
    technologies: ["Kotlin", "Android", "Android Studio", "Jetpack Compose"],
    repoLink: "https://github.com/saragarcia6123/audio-recorder-visualizer",
    liveLink: null,
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  repoLink: string;
  liveLink: string | null;
};
