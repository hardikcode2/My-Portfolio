import front from "../assets/images/pngegg (1).png"
import prog from "../assets/images/—Pngtree—vector programming icon_4101344.png"
import tool from "../assets/images/tool-icon-8065.png"
import skilu from "../assets/images/icons8-problem-solving-skills-100.png"
export const SKILLS=[
    {
        title:"Frontend",
        icon:front,
        skills:[
            {skill:"HTML5", percentage:"95%"},
            {skill:"CSS3", percentage:"98%"},
            {skill:"JavaScript", percentage:"80%"},
            {skill:"ReactJS", percentage:"90%"},
        ],
    },
    {
        title:"Programming",
        icon:prog,
        skills:[
            {skill:"JAVA", percentage:"95%"},
            {skill:"PYTHON", percentage:"90%"},
            {skill:"C++", percentage:"60%"},
            {skill:"SQL", percentage:"70%"},
        ],
    },
    {
        title:"Tools",
        icon:tool,
        skills:[
            {skill:"Git & Github", percentage:"95%"},
            {skill:"Visual Studio Code", percentage:"98%"},
            {skill:"MS Office", percentage:"75%"},
            // {skill:"ReactJS", percentage:"80%"},
        ],
    },
    {
        title:"Technical Skills",
        icon:skilu,
        skills:[
            {skill:"Data Structures & Algorithms", percentage:"90%"},
            {skill:"Object Oriented Programming", percentage:"95%"},
            {skill:"Problem Solving", percentage:"85%"},
            // {skill:"ReactJS", percentage:"80%"},
        ],
    },
];



export const PROJECTS = [
  {
    title: "Vidya AI",
    date: "Streamlit, Python, HTML, CSS",
    responsibilities: [
      "Developed the Frontend for Vidya AI, an educational chatbot with various AI features, in a collaborative hackathon project.",
      "It can extract information from PDFs and YouTube links, providing concise summaries and effectively responds to user queries.",
      " Developed an intuitive and user-friendly interface for Vidya AI, making it accessible to a wide range of learners.",
      "Leveraged the Vidya AI chatbot to provide a personalized and interactive learning experience, fostering user engagement and knowledge retention."
    ]
  },
  {
    title: "Currency Convertor",
    date: "ReactJS , TailwindCSS",
    responsibilities: [
      "Developed a sleek Currency Converter using ReactJS and Tailwind CSS, integrated with an API for accurate real-time exchange rates and supporting over 100 currencies worldwide. ",
      "Simplified currency conversions, ensuring seamless financial transactions globally and enhancing user accessibility. ",
      "Employed responsive design principles in the Currency Converter, ensuring a seamless and optimized user experience across various screen sizes and devices",
      "In future, Enabled currency alerts to notify users when exchange rates reach a predefined threshold."
    ]
  },
  {
    title: "Studio Website",
    date: "HTML, CSS, JS",
    responsibilities: [
      "Designed and developed a professional photography studio website with HTML, CSS, and JavaScript, featuring an animated aesthetically user interface for an enhanced user experience.",
      "Included key details about the studio's services, portfolio, and contact information, effectively communicating the brand and offerings on the website.",
      "Structured the website's content logically and visually, making it easy for users to find the information they need.",
      "Composed clear and concise text that accurately outlines the studio's services and expertise"
    ]
  },

];
