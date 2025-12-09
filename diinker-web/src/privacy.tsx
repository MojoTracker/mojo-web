import PrivacyHero from "./components/Heros/PrivacyHero";
// import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-dvh w-full bg-linear-to-b from-[#1f23d6] to-black">
      {/* HEADER */}
      <NavBar />
      <PrivacyHero />
      {/* MAIN CONTENT */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
