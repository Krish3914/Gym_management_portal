import { Cards } from "./Dashboard/Cards";
import { ToastContainer, toast } from "react-toastify";
import { LeftDashboard } from "./Dashboard/LeftDashboard";
import { Navbar } from "./Dashboard/Navbar";
import { Transactions } from "./Dashboard/Transactions";
import { CongratsCard } from "./Dashboard/CongratsCard";

export const Dashboard = () => {
  // const [basicInput, setbasicInput] = useState(false);

  return (
    <div className="grid grid-cols-6 gap-4 bg-slate-100 ">
      <LeftDashboard />
      <div className="col-span-5 ">
        <Navbar />
        <div className="grid grid-cols-5 ">
          {/* left side */}
          <div className="col-span-3 ">
            <CongratsCard />
          </div>
          

          {/* right side */}
          <div className="col-span-2 items-center flex flex-col gap-5">
            <Cards />
            <Transactions />
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
