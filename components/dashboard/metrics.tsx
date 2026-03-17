export function Metrics({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.label} className="card">
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="mt-2 text-2xl font-bold">{item.value}</p>
        </article>
      ))}
    </div>
  );
}
