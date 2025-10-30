import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      title: 'Реставрация ванны',
      price: 'от 4 500 ₽',
      description: 'Полное восстановление поверхности наливным акрилом',
      icon: 'Droplet'
    },
    {
      title: 'Покрытие душевой кабины',
      price: 'от 3 800 ₽',
      description: 'Обновление душевого поддона акриловым покрытием',
      icon: 'Sparkles'
    },
    {
      title: 'Реставрация раковины',
      price: 'от 2 500 ₽',
      description: 'Восстановление эмали раковины и умывальника',
      icon: 'Waves'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-primary" size={32} />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-2xl font-semibold text-primary">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
