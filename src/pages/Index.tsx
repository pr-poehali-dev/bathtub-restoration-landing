import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ReviewsSection from '@/components/ReviewsSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

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

  return (
    <div className="min-h-screen">
      <Header 
        bookingForm={bookingForm}
        setBookingForm={setBookingForm}
        handleBooking={handleBooking}
      />
      <HeroSection 
        bookingForm={bookingForm}
        setBookingForm={setBookingForm}
        handleBooking={handleBooking}
      />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <GuaranteesSection />
      <FAQSection />
      <ContactSection 
        chatMessage={chatMessage}
        setChatMessage={setChatMessage}
        handleChat={handleChat}
      />
      <Footer />
    </div>
  );
};

export default Index;
