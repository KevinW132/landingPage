import { motion } from "framer-motion";

const projects = [
    {
        name: "App de Tareas",
        description: "App en React con Supabase, notificaciones y PWA.",
        img: "/task.png",
        github: "#",
        demo: "#",
    },
    {
        name: "Clon de ChatGPT",
        description:
            "Chatbot con MLC LLM y Web Workers para IA en el navegador.",
        img: "/chatgpt.png",
        github: "#",
        demo: "#",
    },
    {
        name: "E-commerce de Muebles",
        description: "Tienda online con React, Tailwind y base de datos.",
        img: "/shop.png",
        github: "#",
        demo: "#",
    },
    {
        name: "Compilador COOL",
        description: "Proyecto de compiladores en Java para lenguaje COOL.",
        img: "/compiler.png",
        github: "#",
        demo: "#",
    },
];

export default function ProjectSection() {
    return (
        <section
            id="projects"
            className="py-20 
        bg-gradient-to-b from-blue-800 from-70% to-gray-800 to-99%
        px-6"
        >
            <h2 className="text-4xl font-bold text-center mb-12">
                Mis Proyectos 🚀
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={p.img}
                            alt={p.name}
                            className="w-full h-40 object-cover"
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
