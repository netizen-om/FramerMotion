import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-950 flex items-center justify-center"
      style={{
        backgroundImage: 'radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)',
        backgroundSize: "8px 8px",
        backgroundRepeat : "repeat",
      }}
    >

      <button className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)]_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset">Framer

      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3.4 mx-auto"></span>

      <span className="absolute group-hover:opacity-100 opacity-0 transition-opacity-300 inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3.4 mx-auto blur-sm"></span>

      </button>

    </div>
  );
}
