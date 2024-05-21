import { db } from "~/server/db";

export default async function HomePage() {
  const images = await db.query.images.findMany();
  return (
    <section className="flex flex-col gap-4">
      <h1 className="font-serif text-5xl sm:text-[5rem]">Gallery</h1>
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="h-auto w-full rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
