"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
   const [submitted, setSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);

      const formData = new FormData(e.currentTarget);
      const inquiry = {
         id: crypto.randomUUID(),
         first_name: formData.get('firstName') as string,
         last_name: formData.get('lastName') as string,
         email: formData.get('email') as string,
         phone: formData.get('phone') as string || null,
         message: formData.get('message') as string,
         car_interest: formData.get('carInterest') as string || null,
         status: 'new' as const,
         created_at: new Date().toISOString(),
      };

      try {
         if (supabase) {
            // Use Supabase if configured
            const { error } = await supabase
               .from('inquiries')
               .insert([inquiry]);

            if (error) throw error;
         } else {
            // Fallback to localStorage if Supabase is not configured
            const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
            existingInquiries.push(inquiry);
            localStorage.setItem('inquiries', JSON.stringify(existingInquiries));
         }

         setSubmitted(true);
      } catch (error) {
         console.error('Error submitting inquiry:', error);
         alert('There was an error submitting your inquiry. Please try again.');
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <main className="min-h-screen bg-black text-white flex flex-col">
         <Navbar />

         {/* Header */}
         <section className="pt-32 pb-12 px-4 text-center bg-zinc-900/20 border-b border-zinc-800">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
            >
               <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
               <p className="text-zinc-400 max-w-2xl mx-auto">
                  We're here to help you find your perfect vehicle. Visit our showroom or send us a message.
               </p>
            </motion.div>
         </section>

         <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

               {/* Contact Info */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-10"
               >
                  <div>
                     <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="mt-1 h-10 w-10 flex-none rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                              <MapPin className="h-5 w-5 text-white" />
                           </div>
                           <div>
                              <h3 className="font-medium text-white">Our Showroom</h3>
                              <p className="text-zinc-400 mt-1">123 Auto Drive, Car City<br />Automotive District, AD 90210</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="mt-1 h-10 w-10 flex-none rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                              <Phone className="h-5 w-5 text-white" />
                           </div>
                           <div>
                              <h3 className="font-medium text-white">Phone</h3>
                              <p className="text-zinc-400 mt-1">+1 (555) 123-4567</p>
                              <p className="text-xs text-zinc-500 mt-1">Mon-Fri from 9am to 6pm</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="mt-1 h-10 w-10 flex-none rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
                              <Mail className="h-5 w-5 text-white" />
                           </div>
                           <div>
                              <h3 className="font-medium text-white">Email</h3>
                              <p className="text-zinc-400 mt-1">sales@raphautos.com</p>
                              <p className="text-zinc-400">support@raphautos.com</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
                     <h3 className="flex items-center gap-2 font-semibold mb-4">
                        <Clock className="h-5 w-5 text-zinc-400" />
                        Business Hours
                     </h3>
                     <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                           <span className="text-zinc-400">Monday - Friday</span>
                           <span className="text-white">9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-zinc-400">Saturday</span>
                           <span className="text-white">10:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                           <span className="text-zinc-400">Sunday</span>
                           <span className="text-white">By Appointment Only</span>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Contact Form */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
               >
                  <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                  {submitted ? (
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="h-full flex flex-col items-center justify-center text-center py-12"
                     >
                        <div className="h-16 w-16 rounded-full bg-green-900/30 flex items-center justify-center mb-4 text-green-400 border border-green-900/50">
                           <Send className="h-8 w-8" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-zinc-400 mb-6">Thank you for contacting us. One of our team members will get back to you shortly.</p>
                        <Button
                           variant="outline"
                           className="border-zinc-700 text-white hover:bg-zinc-800"
                           onClick={() => setSubmitted(false)}
                        >
                           Send Another Message
                        </Button>
                     </motion.div>
                  ) : (
                     <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <div>
                              <label htmlFor="firstName" className="block text-sm font-medium text-zinc-400 mb-1">
                                 First Name
                              </label>
                              <input
                                 type="text"
                                 id="firstName"
                                 name="firstName"
                                 required
                                 className="block w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                                 placeholder="John"
                              />
                           </div>
                           <div>
                              <label htmlFor="lastName" className="block text-sm font-medium text-zinc-400 mb-1">
                                 Last Name
                              </label>
                              <input
                                 type="text"
                                 id="lastName"
                                 name="lastName"
                                 required
                                 className="block w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                                 placeholder="Doe"
                              />
                           </div>
                        </div>

                        <div>
                           <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                              Email Address
                           </label>
                           <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              className="block w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                              placeholder="john@example.com"
                           />
                        </div>

                        <div>
                           <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">
                              Phone Number (Optional)
                           </label>
                           <input
                              type="tel"
                              id="phone"
                              name="phone"
                              className="block w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                              placeholder="+1 (555) 000-0000"
                           />
                        </div>

                        <div>
                           <label htmlFor="carInterest" className="block text-sm font-medium text-zinc-400 mb-1">
                              Car of Interest (Optional)
                           </label>
                           <input
                              type="text"
                              id="carInterest"
                              name="carInterest"
                              className="block w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                              placeholder="e.g., Toyota 86, Mercedes C-Class"
                           />
                        </div>

                        <div>
                           <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">
                              Message
                           </label>
                           <textarea
                              id="message"
                              name="message"
                              required
                              rows={4}
                              className="block w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors resize-none"
                              placeholder="I'm interested in the Toyota 86..."
                           />
                        </div>

                        <Button
                           type="submit"
                           className="w-full bg-white text-black hover:bg-gray-200 h-12 text-base font-medium"
                           disabled={isLoading}
                        >
                           {isLoading ? "Sending..." : "Send Message"}
                        </Button>
                     </form>
                  )}
               </motion.div>
            </div>
         </div>

         <Footer />
      </main>
   );
}
