import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function layout({ children }: { children: React.ReactNode }, props: any) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

