import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PortfolioSection = () => {
  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/ff5ddcf0-698e-473f-853e-35cce749a94c/files/500c926e-487b-4d78-981d-6e5f46f4fc2b.jpg',
      title: 'Реставрация классической ванны',
      description: 'До и после полного восстановления'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ff5ddcf0-698e-473f-853e-35cce749a94c/files/29c95b60-b341-4ec3-abbc-8dd6cad9af97.jpg',
      title: 'Глянцевое покрытие',
      description: 'Идеально гладкая поверхность'
    },
    {
      image: 'https://cdn.poehali.dev/projects/ff5ddcf0-698e-473f-853e-35cce749a94c/files/4998ce62-5de1-43a8-99de-c9c0cded9abf.jpg',
      title: 'Процесс работы',
      description: 'Профессиональное нанесение акрила'
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Портфолио работ</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:scale-105">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
