import PreferencesHero from "./components/Heros/PreferencesHero";
// import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-dvh w-full bg-linear-to-b from-[#1f23d6] to-black">
      {/* HEADER */}
      <NavBar />
      <PreferencesHero />
      {/* MAIN CONTENT */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
