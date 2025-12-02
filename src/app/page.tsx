"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Wrench, Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import AboutImage from "@/assets/images/Raphautos brand identity 5.jpg"; // Billboard
import FeatureImage from "@/assets/images/Raphautos brand identity 4.jpg"; // Tires/Abstract

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />

      {/* About / Brand Philosophy Section */}
      <section className="py-32 px-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[600px] w-full rounded-sm overflow-hidden group"
            >
              <Image
                src={AboutImage}
                alt="Raphautos Brand Philosophy"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tight">
                More Than<br />
                <span className="text-zinc-600">Just Cars.</span>
              </h2>
              <p className="text-zinc-400 text-xl mb-8 leading-relaxed font-light">
                At RAPHAUTOS, we believe that a vehicle is more than just a mode of transportation—it's an extension of your personality.
                Our curated collection represents the pinnacle of automotive engineering and design.
              </p>
              <div className="h-px w-full bg-zinc-900 mb-8" />
              <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
                Whether you are looking for raw power, sophisticated luxury, or cutting-edge technology, we have something that speaks to you.
              </p>
              <Button variant="link" className="text-white p-0 h-auto text-lg group w-fit" asChild>
                <Link href="/about" className="flex items-center gap-3 uppercase tracking-widest text-sm font-medium">
                  Read Our Story <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services / Features Section */}
      <section className="py-32 bg-zinc-950 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              The Raphautos Standard
            </motion.h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Excellence is not just a goal; it's our baseline.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: ShieldCheck, title: "Certified Quality", desc: "Every vehicle undergoes a rigorous 150-point inspection to ensure it meets our uncompromising standards." },
              { icon: Star, title: "Premium Experience", desc: "From the moment you step into our showroom to the day you drive off, we provide white-glove service." },
              { icon: Wrench, title: "After-Sales Support", desc: "Our relationship doesn't end at the sale. We offer comprehensive maintenance and support packages." }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/30 px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-500"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 flex-none rounded-full bg-zinc-900 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-xs sm:text-sm md:text-[15px] text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Inventory Teaser */}
      <section className="py-32 px-4 bg-black">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">Featured Inventory</h2>
              <p className="text-zinc-500 text-lg">Hand-picked for the discerning driver.</p>
            </div>
            <Button variant="outline" className="hidden md:flex border-zinc-800 text-zinc-300 hover:bg-white hover:text-black hover:border-white transition-all duration-300 rounded-full px-8" asChild>
              <Link href="/inventory">View All Cars</Link>
            </Button>
          </div>

          {/* Mock Grid - Replace with dynamic component later */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[4/3] bg-zinc-900 relative overflow-hidden rounded-sm mb-6">
                  {/* Placeholder for car images */}
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono text-sm group-hover:scale-105 transition-transform duration-700">
                    Vehicle Image
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    AVAILABLE
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-zinc-300 transition-colors">202{i} Luxury Model X</h3>
                    <span className="text-xl font-medium text-zinc-400">$45,000</span>
                  </div>
                  <p className="text-zinc-500 text-sm mb-4 flex gap-3">
                    <span>Automatic</span>
                    <span className="text-zinc-700">•</span>
                    <span>Petrol</span>
                    <span className="text-zinc-700">•</span>
                    <span>5,000 miles</span>
                  </p>
                  <div className="w-full h-px bg-zinc-900 group-hover:bg-zinc-800 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Button variant="outline" className="w-full border-zinc-800 text-white hover:bg-zinc-900 py-6" asChild>
              <Link href="/inventory">View All Cars</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Visual Showcase / CTA */}
      <section className="relative py-40 px-4 bg-zinc-900 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-40"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <Image
            src={FeatureImage}
            alt="Background Texture"
            fill
            className="object-cover grayscale"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-8 text-white leading-[0.9]"
            >
              Ready to Drive<br />
              <span className="text-zinc-500">Your Dream?</span>
            </motion.h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-lg leading-relaxed">
              Don't settle for ordinary. Discover the extraordinary collection at RAPHAUTOS today.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 text-lg h-14 px-10 rounded-full font-bold" asChild>
                <Link href="/contact">Schedule a Test Drive</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:border-white text-lg h-14 px-10 rounded-full backdrop-blur-sm transition-all" asChild>
                <Link href="/inventory">Browse Showroom</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
