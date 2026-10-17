export default function ImageGrid({
  images,
  project_id,
}: {
  images: string[];
  project_id: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {images.map((src: string, id: number) => (
        <div
          key={`${project_id}-image-${id + 1}`}
          className="flex items-center border-[var(--primary)] border-1"
        >
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
