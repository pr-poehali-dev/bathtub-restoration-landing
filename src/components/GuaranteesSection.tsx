import Icon from '@/components/ui/icon';

const GuaranteesSection = () => {
  return (
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
  );
};

export default GuaranteesSection;
