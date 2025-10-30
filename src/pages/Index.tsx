import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });
  const [chatMessage, setChatMessage] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setBookingForm({ name: '', phone: '', date: '', message: '' });
  };

  const handleChat = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мастер ответит вам в течение 30 минут.",
    });
    setChatMessage('');
  };

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

  const faqs = [
    {
      question: 'Сколько времени занимает реставрация?',
      answer: 'Работа занимает 3-4 часа. После нанесения покрытия необходимо выждать 24 часа до полного высыхания перед использованием ванны.'
    },
    {
      question: 'Какой срок службы покрытия?',
      answer: 'При правильной эксплуатации наливное акриловое покрытие служит от 5 до 15 лет. Мы используем только проверенные материалы премиум-класса.'
    },
    {
      question: 'Можно ли реставрировать старую чугунную ванну?',
      answer: 'Да, наливной акрил отлично подходит для реставрации чугунных, стальных и акриловых ванн любого возраста.'
    },
    {
      question: 'Какая гарантия на работу?',
      answer: 'Мы даем официальную гарантию 3 года на все виды работ. Гарантия распространяется на отслоение и растрескивание покрытия.'
    },
    {
      question: 'Нужно ли снимать ванну?',
      answer: 'Нет, все работы выполняются на месте без демонтажа. Это экономит ваше время и деньги.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Droplet" className="text-primary" size={28} />
            <span className="text-xl font-semibold">РеставрацияВанн.рф</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="hover:text-primary transition-colors">Вопросы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Записаться</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Онлайн запись</DialogTitle>
                <DialogDescription>
                  Заполните форму и мы свяжемся с вами для уточнения деталей
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="date">Желаемая дата</Label>
                  <Input
                    id="date"
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                    placeholder="Опишите состояние ванны, адрес..."
                  />
                </div>
                <Button type="submit" className="w-full">Отправить заявку</Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <section className="bg-gradient-to-br from-secondary via-background to-white py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Реставрация ванн наливным акрилом
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Как новая ванна за 1 день без замены. Гарантия 3 года. Выезд мастера — бесплатно!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="text-lg">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться онлайн
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Онлайн запись</DialogTitle>
                    <DialogDescription>
                      Заполните форму и мы свяжемся с вами для уточнения деталей
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div>
                      <Label htmlFor="hero-name">Имя</Label>
                      <Input
                        id="hero-name"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="hero-phone">Телефон</Label>
                      <Input
                        id="hero-phone"
                        type="tel"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="hero-date">Желаемая дата</Label>
                      <Input
                        id="hero-date"
                        type="date"
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="hero-message">Комментарий</Label>
                      <Textarea
                        id="hero-message"
                        value={bookingForm.message}
                        onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                        placeholder="Опишите состояние ванны, адрес..."
                      />
                    </div>
                    <Button type="submit" className="w-full">Отправить заявку</Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="tel:+79001234567">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 (900) 123-45-67
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Наши гарантии</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Гарантия 3 года</h3>
                  <p className="opacity-90">На все виды работ с официальным договором</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="BadgeCheck" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Сертифицированные материалы</h3>
                  <p className="opacity-90">Используем только проверенный немецкий акрил</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Точно в срок</h3>
                  <p className="opacity-90">Работа занимает 3-4 часа, приезжаем вовремя</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="Sparkles" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Чистота</h3>
                  <p className="opacity-90">Убираем за собой, защищаем поверхности от брызг</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Частые вопросы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Связаться с мастером</h2>
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам прямо сейчас</CardTitle>
                <CardDescription>Мастер ответит в течение 30 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleChat} className="space-y-4">
                  <Textarea
                    placeholder="Здравствуйте! Хочу узнать стоимость реставрации..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    required
                    rows={4}
                  />
                  <Button type="submit" className="w-full">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить сообщение
                  </Button>
                </form>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <a href="tel:+79001234567" className="text-lg hover:text-primary transition-colors">
                      +7 (900) 123-45-67
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <a href="mailto:info@restavraciya-vann.ru" className="hover:text-primary transition-colors">
                      info@restavraciya-vann.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Droplet" size={24} />
                <span className="text-lg font-semibold">РеставрацияВанн.рф</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональная реставрация ванн наливным акрилом в Москве и области
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Услуги</a>
                <a href="#portfolio" className="opacity-80 hover:opacity-100 transition-opacity">Портфолио</a>
                <a href="#reviews" className="opacity-80 hover:opacity-100 transition-opacity">Отзывы</a>
                <a href="#faq" className="opacity-80 hover:opacity-100 transition-opacity">Вопросы</a>
              </nav>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="text-sm space-y-2 opacity-80">
                <p>Телефон: +7 (900) 123-45-67</p>
                <p>Email: info@restavraciya-vann.ru</p>
                <p>График: Пн-Вс, 9:00-21:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p>© 2024 РеставрацияВанн.рф. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
