import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

const ComputersFallback: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleInteraction = useCallback(() => {
        setIsHovered(true);
        setTimeout(() => setIsHovered(false), 1000);
    }, []);

    return (
        <motion.div
            className="w-full h-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div
                className="relative w-[280px] h-[280px] group cursor-pointer"
                onClick={handleInteraction}
            >
                <motion.div
                    className="w-full h-full bg-tertiary rounded-xl flex items-center justify-center"
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                        rotate: isHovered ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="text-white text-4xl"
                        animate={{
                            scale: isHovered ? 1.2 : 1,
                            rotate: isHovered ? 10 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        💻
                    </motion.div>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-xl"
                    animate={{
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                />
                <motion.div
                    className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0"
                    animate={{
                        opacity: isHovered ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    );
};

export default ComputersFallback;
