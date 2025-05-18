export function formatDate(date) {
  const d = new Date(date);
  d.setDate(d.getDate() + 1);
  const dayOfWeek = d.toLocaleString("pt-BR", { weekday: "long" });
  const dateStr = d.toLocaleDateString("pt-BR");
  return `${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)} - ${dateStr}`;
}
