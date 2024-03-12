import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

export default function layout(
  { children }: { children: React.ReactNode },
  props: any
) {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header>
        <Header />
      </header>
      <main className="flex-1">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
