import Hero from "@components/Hero";
import OurPartner from "@components/OurPartner";
import PaymentSovereignty from "@components/PaymentSovereignty";
import MainLayout from "@layouts/MainLayout";

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <PaymentSovereignty />
      <OurPartner />
    </MainLayout>
  );
}
