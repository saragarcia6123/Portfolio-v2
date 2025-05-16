export default function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {images.map((src: string, id: number) => (
        <div className="flex items-center border-[var(--primary)] border-1">
          <img
            className="md:object-contain object-cover w-full"
            src={src}
            alt={`Project Image ${id + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
