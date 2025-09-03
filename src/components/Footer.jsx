export default function Footer() {
    return (
        <footer
            id="contact"
            className="py-6 bg-gray-800 text-white text-center"
        >
            <p>© 2025 Kevin DMO | Sígueme en mis redes</p>
            <div className="mt-2 space-x-4">
                <a
                    href="https://github.com/kevinW132"
                    target="_blank"
                    className="hover:underline"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    className="hover:underline"
                >
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}
