"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailCard from "./_components/email-card";
import QuickInfo from "./_components/quick-info";
import ContactForm from "./_components/contact-form";
import WhatsAppCard from "./_components/whatsapp-card";
import ContactHeader from "./_components/contact-header";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Dot matrix background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#0a0a0a",
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
            radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
          imageRendering: "pixelated",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col bg-background font-mono">
        <Navbar />

        <main className="flex-1 w-full">
          {/* Hero Header */}
          <ContactHeader />

          {/* Content */}
          <section className="w-full max-w-[1200px] mx-auto px-4 pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Form — takes 3 cols */}
              <ContactForm />

              {/* Right sidebar — takes 2 cols */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="lg:col-span-2 flex flex-col gap-6"
              >
                {/* WhatsApp card */}
                <WhatsAppCard />

                {/* Email card */}
                <EmailCard />

                {/* Quick info */}
                <QuickInfo />
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
