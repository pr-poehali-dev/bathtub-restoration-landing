import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface ContactSectionProps {
  chatMessage: string;
  setChatMessage: (message: string) => void;
  handleChat: (e: React.FormEvent) => void;
}

const ContactSection = ({ chatMessage, setChatMessage, handleChat }: ContactSectionProps) => {
  return (
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
  );
};

export default ContactSection;
