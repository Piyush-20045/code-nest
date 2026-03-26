import { toast } from "sonner";
import { ArrowUpRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const projectTypes = [
    "Business Website",
    "Portfolio Website",
    "E-commerce Store",
    "Landing Page",
    "Website Redesign",
    "Custom Project",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, projectType: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectType) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="lg:col-span-3"
    >
      <div className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-[#feda6a]/10 flex items-center justify-center">
            <Send className="size-5 text-[#feda6a]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Send a message</h2>
            <p className="text-sm text-gray-500">
              We&apos;ll respond within 24 hours
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name <span className="text-[#feda6a]">*</span>
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-12 rounded-xl focus:border-[#feda6a]/50 focus:ring-[#feda6a]/20 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email <span className="text-[#feda6a]">*</span>
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-12 rounded-xl focus:border-[#feda6a]/50 focus:ring-[#feda6a]/20 transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Project Type <span className="text-[#feda6a]">*</span>
            </label>
            <Select
              value={formData.projectType}
              onValueChange={handleSelectChange}
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-[#feda6a]/50 focus:ring-[#feda6a]/20">
                <SelectValue placeholder="What do you need?" />
              </SelectTrigger>
              <SelectContent className="bg-[#191919] border-white/10">
                {projectTypes.map((type) => (
                  <SelectItem
                    key={type}
                    value={type}
                    className="text-gray-300 focus:bg-white/10 focus:text-white"
                  >
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tell us about your project
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your vision, timeline, and any specific requirements..."
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 min-h-36 rounded-xl resize-none focus:border-[#feda6a]/50 focus:ring-[#feda6a]/20 transition-all"
            />
          </div>

          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-[#feda6a] text-[#0a0a0a] font-semibold text-base hover:bg-[#feda6a]/90 transition-all duration-300 cursor-pointer group"
          >
            Send Message
            <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
