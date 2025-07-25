export function Subproject({ title, description, githubLink, websiteLink, onHover }) {
  return (
    <div
      onMouseEnter={onHover}
      className="w-[240px] h-[400px] bg-black text-white rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <hr className="mb-1 border-white" />
        <p className="text-sm mb-2">{description}</p>
      </div>

      <div>
        <hr className="mb-1 border-white" />
        <div className="flex flex-row justify-between text-sm text-blue-400">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">Live Website ↗</a>
        </div>
      </div>
    </div>
  );
}
