import { motion } from "framer-motion";
import ia from "../assets/img/ia.png";
import coffe from "../assets/img/coffe.png";
import task from "../assets/img/task.png";
import movies from "../assets/img/movie.png";
import PopupWithGif from "./GifShow";
import Proyecto from "./Proyecto";

const projects = [
    {
        name: "App de Tareas",
        description: "App en React con Supabase, notificaciones y PWA.",
        img: task,
        github: "https://github.com/KevinW132/task-tracker-app",
        demo: "https://task-tracker-app-ten.vercel.app/",
    },
    {
        name: "Clon de ChatGPT",
        description:
            "Chatbot con MLC LLM y Web Workers para IA en el navegador.",
        img: ia,
        github: "https://github.com/KevinW132/IAGenerativaLocal",
        demo: "https://ia-generativa-local.vercel.app/",
    },
    {
        name: "E-commerce de Muebles",
        description: "Tienda online con React, Tailwind y base de datos.",
        img: "/shop.png",
        github: "#",
        demo: "#",
    },
    {
        name: "Coffee Finder",
        description:
            "Aplicacion para encontrar cafes cercanos con APIS externas.",
        img: coffe,
        github: "https://github.com/KevinW132/Coffe-Finder",
        demo: "https://coffe-finder.vercel.app/",
    },
    {
        name: "Movies Recap",
        description:
            "Aplicación móvil multiplataforma creada con React Native, Expo Router y NativeWind, con navegación tipo Stack/Tabs y diseño moderno adaptable a iOS, Android y Web.",
        img: movies,
        github: "https://github.com/KevinW132/Movie-Getter",
        demo: "",
    },
];

export default function ProjectSection() {
    return (
        <section
            id="projects"
            className="relative py-20 bg-gradient-to-b from-gray-800 from-70% to-blue-800 to-99% px-6"
        >
            <motion.div
                className="absolute w-72 h-72 bg-purple-400/40 rounded-full blur-3xl top-10 left-10"
                animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl top-20 right-20"
                animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-64 h-64 bg-teal-300/30 rounded-full blur-3xl bottom-40 left-1/3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                }}
            />
            <h2 className="text-4xl text-white font-bold text-center mb-12">
                Mis Proyectos 🚀
            </h2>

            <div className="z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((p, i) => (
                    <Proyecto p={p} i={i} />
                ))}
            </div>
        </section>
    );
}
