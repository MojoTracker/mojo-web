import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="text-white flex flex-row justify-between bg-[#0000007c] h-20 rounded-b-2xl items-center px-10">
      <div className="text-3xl font-bold">
        <Link to="/">
          <p className="font-nature">diinker</p>
        </Link>
      </div>
      <div className="hidden text-lg sm:flex flex-row gap-8 font-nature-light">
        <Link to="/purchase" className="hover:font-nature">
          <p>Purchase</p>
        </Link>
        <Link to="/download" className="hover:font-nature">
          <p>Download</p>
        </Link>
        <Link to="/about" className="hover:font-nature">
          <p>About</p>
        </Link>
        <Link to="/contact" className="hover:font-nature">
          <p>Contact</p>
        </Link>
      </div>
    </div>
  )
}