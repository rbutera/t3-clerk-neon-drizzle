import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/192a0280-3a37-4bbb-80d8-3adca00c8ce2-zaz7iu.png",
  "https://utfs.io/f/1a543cbb-620d-43f5-8a29-517e55189f5a-1n164m.jpg",
  "https://utfs.io/f/2d476b96-29d4-4b9d-a5b1-c1efa9263716-k7uii1.png",
  "https://utfs.io/f/52e96d94-6015-4cc5-a643-8fae14224fed-etb98h.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <>
      <h1 className="font-serif text-5xl sm:text-[5rem]">Gallery</h1>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img
              src={image.url}
              alt={`Image ${image.id}`}
              className="h-auto w-full rounded-lg"
            />
          </div>
        ))}
      </div>
      <div>
        <h2 className="font-serif text-3xl sm:text-[3rem]">Posts</h2>
        <ul className="font-sm ">
          {posts.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
