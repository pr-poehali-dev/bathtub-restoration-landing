import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  bookingForm: {
    name: string;
    phone: string;
    date: string;
    message: string;
  };
  setBookingForm: (form: any) => void;
  handleBooking: (e: React.FormEvent) => void;
}

const HeroSection = ({ bookingForm, setBookingForm, handleBooking }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
