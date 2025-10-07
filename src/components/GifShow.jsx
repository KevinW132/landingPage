import demoGif from "../assets/img/demoA.gif";

function GifPlayer() {
    return (
        <div className="flex flex-col items-center">
            <img
                src={demoGif}
                alt="Cargando..."
                className="rounded-lg shadow-lg w-3/6"
            />
            <p className="mt-2 text-sm text-gray-600">Reproduciendo GIF...</p>
        </div>
    );
}

export default function PopupWithGif({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed !ml-0 inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="h-full bg-white p-6 rounded-lg shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black"
                >
                    ✖
                </button>
                <GifPlayer />
            </div>
        </div>
    );
}
