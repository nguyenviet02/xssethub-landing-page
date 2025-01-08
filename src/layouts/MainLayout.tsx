import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center">
      <Header />
      <main className="flex size-full max-w-1440 flex-col gap-[5.375rem]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
