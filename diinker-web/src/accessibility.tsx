// import Footer from "./components/Footer";
import AccessibilityHero from "./components/Heros/AccessibilityHero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-dvh w-full bg-linear-to-b from-[#1f23d6] to-black">
      {/* HEADER */}
      <NavBar />
      <AccessibilityHero />
      {/* MAIN CONTENT */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
