import { Outlet } from "react-router-dom";
import "./index.css"
import Navbar from "./components/Navbar";
// Outlet will render all of App's children
export default function App() {
  return (
    <>
    
    <main className="font-primary text-2xl min-h-screen max-w-screen-2xl mx-auto px-4 py-6" >
    <Navbar />
   <Outlet />
    </main>
    <footer>Footer</footer>
    </>
  )
}