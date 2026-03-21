"use client";
import React from "react";

export default function Contact() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/1234567890?text=I%20am%20interested%20in%20building%20a%20website%20with%20CodeNest",
      "_blank",
    );
  };

  return (
    <section id="contact" className="w-full max-w-[1200px] mx-auto py-24 px-4">
      <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-soft flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
          Let's build your website
        </h2>
        <p className="text-muted-foreground mb-10 text-lg md:text-xl max-w-2xl mx-auto">
          Start a conversation on WhatsApp to discuss your project. We'll get
          back to you immediately with a quote and timeframe.
        </p>
        <button
          onClick={handleWhatsApp}
          className="bg-primary text-primary-foreground h-14 px-10 inline-flex items-center justify-center rounded-md font-bold text-lg hover:opacity-90 transition-opacity w-full sm:w-auto shadow-md hover:shadow-lg hover:-translate-y-1 transform duration-300"
        >
          Start Your Project
        </button>
      </div>
    </section>
  );
}
