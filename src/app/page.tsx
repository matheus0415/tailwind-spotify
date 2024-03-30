import { Footer } from "@/feature/Footer";
import Main from "@/feature/Main";
import { Sidebar } from "@/feature/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
