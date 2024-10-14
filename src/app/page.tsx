import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandingPageScreen from "@/components/screens/landingPage/LandingPageScreen";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header />
        <LandingPageScreen />
        <Footer />
      </main>
    </div>
  );
}
