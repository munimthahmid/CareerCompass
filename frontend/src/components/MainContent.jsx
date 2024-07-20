import { Outlet } from "react-router-dom";

export default function MainContent() {
  return (
    <main>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <Outlet />
      </div>
    </main>
  );
}
