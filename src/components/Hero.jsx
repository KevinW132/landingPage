import { color, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    // Inicializar partículas

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-gray-800 text-white px-6">
            {/* Burbujas animadas */}
            <motion.div
                className="absolute w-72 h-72 bg-pink-400/40 rounded-full blur-3xl top-20 left-5"
                animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-96 h-96 bg-blue-400/30 rounded-full blur-3xl bottom-15 right-16"
                animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl top-1/3 left-1/4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                }}
            />

            {/* Contenido principal */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Hola, soy <span className="text-yellow-300">Kevin</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                <Typewriter
                    words={[
                        "Fullstack Developer",
                        "Frontend Specialist",
                        "Backend Developer",
                        "AI Enthusiast",
                        "Data Analyst",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </h2>

            <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                Apasionado por crear aplicaciones{" "}
                <span className="font-semibold">modernas</span>, experiencias
                web interactivas y soluciones impulsadas por{" "}
                <span className="font-semibold">IA</span>.
            </p>

            <a
                href="#projects"
                className="z-10 bg-white/20 text-white-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
            >
                Ver Proyectos
            </a>

            {/* Tecnologías */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 mt-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {[
                    "React",
                    "Angular",
                    "Node.js",
                    "Java",
                    "Python",
                    "SQL",
                    "JavaScript",
                    "Tailwind",
                    "C#",
                    "TypeScript",
                    "React Native",
                ].map((tech, i) => (
                    <motion.span
                        key={i}
                        className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-lg shadow-lg"
                        whileHover={{ scale: 1.2 }}
                    >
                        {tech}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
}
