interface NoteProps {
  note: string;
  color?: string;
  rotate?: string;
}

const Note = ({ note, color="#fef08a", rotate="rotate-0" }: NoteProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`relative aspect-square p-6 shadow-xl ${rotate} hover:rotate-0 hover:scale-110 transition-all duration-300 cursor-pointer flex items-center justify-center text-center group border-b-4 border-black/10`}
    >
      {/* magnet */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 rounded-full shadow-md group-hover:bg-red-500"></div>

      <p className="font-medium text-gray-800 text-lg leading-tight">{note}</p>
    </div>
  );
};

export default Note;
