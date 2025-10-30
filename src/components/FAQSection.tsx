import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
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
  );
};

export default FAQSection;
