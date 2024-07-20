import PageNav from "../components/PageNav";

export default function MentorApplicationReceived() {
  return (
    <main className="page-container">
      <PageNav />

      <div className="flex flex-col items-center">
        <img
          src="public/assets/icons/mail.svg"
          className="mx-auto w-[150] h-[150] m-6"
        />
        <h1 className="text-sky-950 text-3xl font-bold tracking-wide m-0.1">
          We have Received Your Application!
        </h1>
        <p className="tracking-wide text-gray-500 text-sm">
          We will contact you within 2-3 working days.
        </p>
        <button className="px-5 py-3 bg-white-500 rounded-lg w-1/3 mt-6 border-teal-500 border-2 hover:bg-teal-500 font-bold text-black text-2xl hover:text-white duration-300 ">
          Done
        </button>
      </div>
    </main>
  );
}
