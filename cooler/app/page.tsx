"use client";

import Note from "./components/Note";

export default function FridgePage() {
  const dummyNotes = [
    { id: 1, note: "Koupit mléko 🥛", color: "#fef08a", rotate: "-rotate-2" },
    { id: 2, note: "Vynést koš! 🗑️", color: "#bbf7d0", rotate: "rotate-3" },
    { id: 3, note: "Miluju Next.js ❤️", color: "#bfdbfe", rotate: "rotate-1" },
  ];

  const rotations = [
    "rotate-1",
    "-rotate-1",
    "rotate-2",
    "-rotate-2",
    "rotate-3",
  ];

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center py-12 px-4">
      {/* Značka */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-black text-gray-800 tracking-tighter uppercase italic">
          Cooler <span className="text-blue-500">2000</span>
        </h1>
        <div className="h-1 w-full bg-gray-400 mt-2 rounded-full shadow-inner"></div>
      </div>

      {/* Input */}
      <div className="w-full max-w-md bg-gray-400 p-1 rounded-xl shadow-2xl mb-12">
        <div className="bg-gray-800 rounded-lg p-4 flex gap-2 border-2 border-gray-600">
          <input
            type="text"
            placeholder="Napiš vzkaz..."
            className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all"
          />
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded shadow-lg active:transform active:scale-95 transition-all text-sm uppercase">
            Přilepit
          </button>
        </div>
      </div>

      {/* Hlavní plocha */}
      <div className="w-full max-w-5xl bg-linear-to-br from-gray-400 via-gray-200 to-gray-400 min-h-150 rounded-t-[50px] shadow-[inset_0_0_50px_rgba(0,0,0,0.2)] p-10 border-x-8 border-t-8 border-gray-500 relative overflow-hidden">
        {/* Odlesk */}
        <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white opacity-10 skew-x-12 pointer-events-none"></div>

        {/* Grid se vzkazy */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10">
          {dummyNotes.map((n) => (
            <Note
              key={n.id}
              note={n.note}
              color={n.color}
              rotate={rotations[n.id % rotations.length]}
            />
          ))}
        </div>

        {/* detail dveří */}
        <div className="absolute bottom-10 right-10 opacity-20 text-gray-900 font-bold text-2xl">
          NO FROST
        </div>
      </div>
    </div>
  );
}
