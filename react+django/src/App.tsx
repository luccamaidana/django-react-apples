import { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import './App.css'

interface Apple {
    name: string;
    color: string;
    photo_url: string;
}

function App() {
    const [apples, setApples] = useState<Apple[]>([])
    const [selectedApple, setSelectedApple] = useState<Apple | null>(null)

    useEffect(() => {
        const applesListUrl = 'http://localhost:8000/apples/'
        axios.get<Apple[]>(applesListUrl)
            .then(response => setApples(response.data))
    }, [])

    const handleAppleClick = (apple: Apple) => {
        setSelectedApple(apple)
    }

    const handleAppleClose = () => {
        setSelectedApple(null)
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <motion.div
                className="max-w-2xl mx-auto grid grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {apples.map((apple, index) => (
                    <motion.div
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAppleClick(apple)}
                    >
                        <motion.img
                            src={apple.photo_url}
                            alt={`${apple.name} apple`}
                            className="w-full h-32 object-cover"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        />
                        <div className="p-3">
                            <h3 className="text-base font-semibold text-gray-800 mb-1">{apple.name}</h3>
                            <p className="text-sm text-gray-600">Color: {apple.color}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {selectedApple && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleAppleClose}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={selectedApple.photo_url}
                            alt={`${selectedApple.name} apple`}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{selectedApple.name}</h3>
                            <p className="text-gray-600">Color: {selectedApple.color}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}

export default App