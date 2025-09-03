export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center 
        bg-gradient-to-b from-gray-800 from-70% to-blue-800 to-92%
        
        px-6 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                {/* Texto de presentación */}
                <div className="text-white">
                    <h1 className="text-5xl font-bold mb-4">
                        Hola, soy Kevin 👋
                    </h1>
                    <p className="text-lg mb-6">
                        Desarrollador Fullstack con experiencia en{" "}
                        <span className="font-semibold">
                            React, Angular, Java y bases de datos
                        </span>
                        . Me apasiona crear aplicaciones modernas, rápidas y con
                        diseños atractivos.
                    </p>
                    <a
                        href="#projects"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
                    >
                        Ver Proyectos
                    </a>
                </div>

                {/* Foto circular animada */}
                <div className="flex justify-center relative">
                    <div className="w-96 h-96 rounded-full bg-gradient-to-r from-blue-800 to-gray-800 border-4 border-white overflow-hidden relative floating-self shadow-2xl shadow-blue-500/50">
                        <img
                            src="/tu-foto.jpg"
                            alt="Kevin"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
