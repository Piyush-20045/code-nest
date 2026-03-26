import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCard() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi CodeNest! I'm interested in discussing a web project.",
    );
    window.open(`https://wa.me/7822950439?text=${message}`, "_blank");
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-6 md:p-8">
      <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-5">
        <MessageCircle className="size-7 text-green-400" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Prefer to chat?</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        Get instant responses on WhatsApp. We&apos;re available Monday–Saturday,
        9 AM – 6 PM IST.
      </p>
      <Button
        onClick={handleWhatsApp}
        className="w-full h-11 rounded-xl bg-green-600 hover:bg-green-500 text-white font-medium transition-all duration-300 cursor-pointer"
      >
        <MessageCircle className="mr-2 size-4" />
        Chat on WhatsApp
      </Button>
    </div>
  );
}
