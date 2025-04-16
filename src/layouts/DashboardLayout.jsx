import { Outlet } from "react-router-dom";

import Navbar from "../components/dashboard/Navbar";
import DevicePreview from "../components/dashboard/DevicePreview";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-light-grey flex flex-col">
      {/* Navbar */}
      <div className="px-4 md:px-6 lg:px-10 pt-4 md:pt-6 lg:pt-10">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto p-4 md:p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="hidden lg:flex lg:col-span-5 bg-white rounded-xl p-6 justify-center items-center">
            <DevicePreview />
          </section>

          <section className="col-span-1 lg:col-span-7 bg-white rounded-xl flex flex-col h-full max-h-[calc(100vh-100px)]">
            <div className="overflow-y-auto flex-1">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
