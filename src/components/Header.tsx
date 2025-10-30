import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  bookingForm: {
    name: string;
    phone: string;
    date: string;
    message: string;
  };
  setBookingForm: (form: any) => void;
  handleBooking: (e: React.FormEvent) => void;
}

const Header = ({ bookingForm, setBookingForm, handleBooking }: HeaderProps) => {
  return (
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
  );
};

export default Header;
