// components/subproject1.jsx
export function Subproject({ onHover }) {
  return (
    <div
      onMouseEnter={onHover}
      className="w-[240px] bg-white/20 backdrop-blur-md text-black rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-2">Instant-eats</h3>
      <p className="text-sm mb-2">
        Modern food delivery app using Supabase, PostgreSQL, Node.js, React-TSX, TypeScript, etc.
      </p>
      <div className="text-sm text-blue-400 space-y-1">
        <a href="#" target="_blank">Frontend - GitHub ↗</a><br />
        <a href="#" target="_blank">Backend - API ↗</a><br />
        <a href="#" target="_blank">Website ↗</a>
      </div>
    </div>
  );
}
