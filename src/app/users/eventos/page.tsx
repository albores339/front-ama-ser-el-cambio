import Card from "@/app/components/users/EventCards";

// Convertimos la fecha a objeto Date para poder comparar
const articles = [
  {
    title: 'Cruzada Mundial Contra el Hambre',
    description: 'Entrega de comida a personas con necesidad en el día mundial contra el hambre',
    tags: ['Asilos', 'Cruceros', 'Hospitales'],
    date: '2024-10-16', // Fecha en formato YYYY-MM-DD
    image: '/images/cruzada.jpeg',
    status: 'Realizado', // Estado del evento
  },
  {
    title: 'Hermanos Migrantes',
    description: 'Este día repartimos un plato de comida, un evento para más de 150 personas.',
    tags: ['Next.js', 'Optimization', 'Web'],
    date: '2024-10-10',
    image: '/images/migrante.jpeg',
    status: 'Realizado',
  },
];

// Función para ordenar por fecha
const compareDates = (a: { date: string }, b: { date: string }) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
};

export default function Home() {
  const sortedArticles = articles.sort(compareDates); // Ordenamos los artículos por fecha
  
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-stone-600">
      <h1 className="text-4xl font-bold my-8 text-cyan-700">Eventos benéficos</h1>
      <div className="grid grid-cols-1 gap-6">
        {sortedArticles.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            description={article.description}
            tags={article.tags}
            date={article.date}
            image={article.image}
            status={article.status}
          />
        ))}
      </div>
    </div>
  );
}
