import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Елена Смирнова',
      rating: 5,
      text: 'Отличная работа! Ванна как новая, покрытие держится уже полгода. Мастер приехал вовремя, все сделал аккуратно.',
      date: '2 недели назад'
    },
    {
      name: 'Дмитрий Петров',
      rating: 5,
      text: 'Очень доволен результатом. Цена адекватная, качество на высоте. Рекомендую!',
      date: '1 месяц назад'
    },
    {
      name: 'Анна Волкова',
      rating: 5,
      text: 'Спасибо за профессионализм! Думали покупать новую ванну, но реставрация обошлась в 5 раз дешевле.',
      date: '3 недели назад'
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-xs">{review.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
