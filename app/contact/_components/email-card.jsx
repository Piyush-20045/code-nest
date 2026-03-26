import { ArrowUpRight, Mail } from "lucide-react";

export default function EmailCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-6 md:p-8">
      <div className="w-14 h-14 rounded-2xl bg-[#feda6a]/10 flex items-center justify-center mb-5">
        <Mail className="size-7 text-[#feda6a]" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Email us directly</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        For detailed inquiries, proposals, or partnership discussions.
      </p>
      <a
        href="mailto:codenestt.studio@gmail.com"
        className="text-[#feda6a] text-sm font-medium hover:underline underline-offset-4 inline-flex items-center gap-1"
      >
        codenestt.studio@gmail.com
        <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  );
}
