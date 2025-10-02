"use client"

const categories = [
  { name: "Next.js", description: "Guides & tutorials about Next.js" },
  { name: "React", description: "Everything about React ecosystem" },
  { name: "Tailwind CSS", description: "Tips for styling faster" },
  { name: "Backend", description: "APIs, databases & servers" },
]

export default function Categories() {
  return (
    <section className="py-32 bg-muted px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Categories</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.name} className="p-6 border rounded-lg bg-background hover:shadow-md transition">
            <h3 className="text-xl font-semibold">{cat.name}</h3>
            <p className="text-muted-foreground mt-2">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
