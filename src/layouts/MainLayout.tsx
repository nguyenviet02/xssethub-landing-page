import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center">
      <Header />
      <main className="max-w-1440 size-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
