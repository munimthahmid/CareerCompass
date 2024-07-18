import PageNav from "../components/PageNav";
import useSignup from "../hooks/useSignup";
// import IntroSection from "../components/IntroSection";
// import FeaturesSection from "../components/FeaturesSection";
// import SuccessStories from "../components/SuccessStories";

export default function Home() {
  return (
    <main
      className={`h-[calc(100vh)] bg-cover bg-center bg-[linear-gradient(rgba(36,42,46,0.5),rgba(36,42,46,0.5)),url(../bg-8.jpeg)] p-10`}
    >
      <PageNav isHome={true} />
      <section className="flex flex-col h-[85%] items-center justify-center gap-10 text-center">
        <h1 className="text-6xl leading-tight">Welcome to CareerCompass</h1>
        <h2 className="w-[90%] text-xl text-var-color-light--1 mb-10">
          Your journey to success starts here.
        </h2>
        {/* <IntroSection />
        <FeaturesSection />
        <SuccessStories /> */}
      </section>
    </main>
  );
}
