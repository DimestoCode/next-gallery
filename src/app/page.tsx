import { db } from "~/server/db";

const urls = [
  "https://utfs.io/f/034b289a-79d6-41ff-a576-6984e8c5e95b-1d.jpeg",
  "https://utfs.io/f/c13500bd-1f27-48e3-88ad-897d3eb8c669-1f.avif",
  "https://utfs.io/f/299c41f6-3550-4e0b-b1de-205be143ca3d-1e.jpeg",
];

const mockImages = urls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
