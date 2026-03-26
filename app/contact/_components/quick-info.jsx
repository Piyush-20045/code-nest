export default function QuickInfo() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-sm p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
            Response time
          </p>
          <p className="text-white font-semibold text-sm">{"< 24 hours"}</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
            Availability
          </p>
          <p className="text-white font-semibold text-sm">Mon – Sat</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
            Based in
          </p>
          <p className="text-white font-semibold text-sm">India</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
            Projects
          </p>
          <p className="text-white font-semibold text-sm">Worldwide</p>
        </div>
      </div>
    </div>
  );
}
