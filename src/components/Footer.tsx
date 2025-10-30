import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
