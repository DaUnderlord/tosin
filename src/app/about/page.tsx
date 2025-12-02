"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Shield, Heart } from "lucide-react";

import AboutHero from "@/assets/images/Raphautos brand identity 2.jpg"; // Close up of logo/badge
import VisionImage from "@/assets/images/Raphautos brand identity 5.jpg"; // Billboard
import TeamImage from "@/assets/images/Raphautos brand identity 8.jpg"; // Car rear/light

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
         <div className="absolute inset-0 opacity-40">
            <Image 
               src={AboutHero} 
               alt="Raphautos Emblem" 
               fill 
               className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
         </div>
         <div className="relative z-10 mx-auto max-w-5xl text-center">
            <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
            >
               We Don't Just Sell Cars.<br />
               <span className="text-zinc-500">We Sell Dreams.</span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            >
               RAPHAUTOS was founded on a simple premise: that buying a car should be as exhilarating as driving one. 
               We curate the finest vehicles for those who refuse to compromise on quality, performance, or style.
            </motion.p>
         </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-4">
         <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative h-[600px] w-full rounded-2xl overflow-hidden"
               >
                  <Image 
                     src={VisionImage} 
                     alt="Our Vision" 
                     fill 
                     className="object-cover"
                  />
               </motion.div>
               <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-4xl font-bold mb-6">The RAPHAUTOS Standard</h2>
                  <div className="grid grid-cols-1 gap-4 md:gap-5">
                     <div className="group rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 hover:border-zinc-600 transition-colors">
                        <div className="flex items-start gap-3 sm:gap-4">
                           <div className="mt-0.5 h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 flex-none rounded-full bg-white/10 flex items-center justify-center">
                              <Target className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                           </div>
                           <div>
                              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-1.5">Precision Curation</h3>
                              <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed">
                                We don't just stock inventory; we hand-select vehicles that meet our rigorous standards for maintenance history, aesthetic condition, and mechanical integrity.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="group rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 hover:border-zinc-600 transition-colors">
                        <div className="flex items-start gap-3 sm:gap-4">
                           <div className="mt-0.5 h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 flex-none rounded-full bg-white/10 flex items-center justify-center">
                              <Shield className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                           </div>
                           <div>
                              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-1.5">Uncompromising Trust</h3>
                              <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed">
                                Transparency is at the core of everything we do. Detailed history reports, comprehensive inspections, and honest advice are standard with every interaction.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="group rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 hover:border-zinc-600 transition-colors">
                        <div className="flex items-start gap-3 sm:gap-4">
                           <div className="mt-0.5 h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 flex-none rounded-full bg-white/10 flex items-center justify-center">
                              <Heart className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                           </div>
                           <div>
                              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-1.5">Customer Obsession</h3>
                              <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed">
                                Your satisfaction is our metric for success. From the first inquiry to years of ownership, we are your partners in the automotive journey.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Stats / Trust */}
      <section className="py-24 bg-zinc-900 border-y border-zinc-800">
         <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="p-8">
                  <p className="text-6xl font-bold text-white mb-2">500+</p>
                  <p className="text-zinc-500 uppercase tracking-widest text-sm">Cars Sold</p>
               </div>
               <div className="p-8 border-y md:border-y-0 md:border-x border-zinc-800">
                  <p className="text-6xl font-bold text-white mb-2">98%</p>
                  <p className="text-zinc-500 uppercase tracking-widest text-sm">Customer Satisfaction</p>
               </div>
               <div className="p-8">
                  <p className="text-6xl font-bold text-white mb-2">150+</p>
                  <p className="text-zinc-500 uppercase tracking-widest text-sm">Inspection Points</p>
               </div>
            </div>
         </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 text-center">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
         >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Experience the Difference</h2>
            <p className="text-xl text-zinc-400 mb-10">
               Visit our showroom or browse our inventory online. Your dream car awaits.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg h-14 px-8" asChild>
               <Link href="/inventory">View Inventory</Link>
            </Button>
         </motion.div>
      </section>

      <Footer />
    </main>
  );
}
