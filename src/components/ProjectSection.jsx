import { motion } from "framer-motion";

const projects = [
    {
        name: "App de Tareas",
        description: "App en React con Supabase, notificaciones y PWA.",
        img: "../../public/img/task.png",
        github: "https://github.com/KevinW132/task-tracker-app",
        demo: "https://task-tracker-app-ten.vercel.app/",
    },
    {
        name: "Clon de ChatGPT",
        description:
            "Chatbot con MLC LLM y Web Workers para IA en el navegador.",
        img: "../assets/img/ia.png",
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
        img: "../../public/img/coffe.png",
        github: "https://github.com/KevinW132/Coffe-Finder",
        demo: "https://coffe-finder.vercel.app/",
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
                    <motion.div
                        key={i}
                        className="z-10 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={p.img}
                            alt={p.name}
                            className="w-full object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                            <p className="text-gray-600 mb-4">
                                {p.description}
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href={p.github}
                                    target="_blank"
                                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={p.demo}
                                    target="_blank"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
