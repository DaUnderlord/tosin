"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { useEffect, useState } from "react";

export function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Lock scroll when splash screen is visible
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3500); // Total duration

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "unset";
        };
    }, [isVisible]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                >
                    {/* Logo Animation */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: [0.8, 1.1, 1],
                            opacity: 1
                        }}
                        transition={{
                            duration: 1.5,
                            times: [0, 0.6, 1],
                            ease: "easeOut"
                        }}
                        className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
                    >
                        <Image
                            src={Logo}
                            alt="Raphautos Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full -z-10 animate-pulse" />
                    </motion.div>

                    {/* Loading Bar */}
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 200, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
                        className="h-1 bg-zinc-800 rounded-full overflow-hidden"
                    >
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
                            className="h-full w-full bg-white"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
