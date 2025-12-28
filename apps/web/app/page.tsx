import Link from "next/link";

const cards = [
  {
    title: "API",
    description: "Explore the FastAPI service powering pricing and health checks.",
    href: "http://localhost:8000/docs",
  },
  {
    title: "Database",
    description: "Connect to the Postgres instance provided in docker-compose.",
    href: "https://www.postgresql.org/",
  },
  {
    title: "Workspace",
    description: "Run make dev to start the full stack with Docker.",
    href: "https://turbo.build/",
  },
];

export default function Home() {
  return (
    <main style={{ padding: "64px", maxWidth: 960, margin: "0 auto" }}>
      <h1>PPA Pricing</h1>
      <p>
        Monorepo combining a FastAPI backend and Next.js frontend for pricing power purchase
        agreements.
      </p>

      <section style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: "32px" }}>
        {cards.map((card) => (
          <article key={card.title} style={{ padding: "16px", border: "1px solid #e2e8f0", borderRadius: "8px", background: "white" }}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <Link href={card.href}>Learn more</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
