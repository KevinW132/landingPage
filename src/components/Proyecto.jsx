import { motion } from "framer-motion";
import PopupWithGif from "./GifShow";
import { useState } from "react";

export default function Proyecto({ p, i }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleDemoClick = (e) => {
        if (!p.demo) {
            e.preventDefault();
            setIsOpen(true);
        }
    };
    return (
        <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            viewport={{ once: true }}
        >
            <img src={p.img} alt={p.name} className="w-full object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-4">{p.description}</p>
                <div className="flex space-x-4">
                    <a
                        href={p.github}
                        target="_blank"
                        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href={p.demo || "#"}
                        target={p.demo ? "_blank" : undefined}
                        onClick={handleDemoClick}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Demo
                    </a>

                    <PopupWithGif
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                    />
                </div>
            </div>
        </motion.div>
    );
}
