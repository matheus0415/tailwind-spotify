import KeepListening from "@/components/KeepListening";
import Recommended from "@/components/Recommended";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-4">
        <button className=" rounded-full bg-black/40">
          <ChevronLeft />
        </button>
        <button className=" rounded-full bg-black/40">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
      <KeepListening />

      <h2 className="font-semibold text-2xl mt-10">Made for Matheus</h2>
      <Recommended />
    </main>
  );
}

export default Main;
