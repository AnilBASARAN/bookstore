import { Outlet } from "react-router-dom";
import "./index.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Outlet will render all of App's children
export default function App() {
  return (
    <>
    
    <Navbar />
    <main className="font-primary text-2xl min-h-screen max-w-screen-2xl mx-auto px-4 py-6" >
   <Outlet />
    </main>
    <Footer />

    
    </>
  )
}