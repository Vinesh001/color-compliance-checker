
import ColorChecker from "./components/ColorChecker.jsx";
import Threads from "./components/Threads.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Profile from "./components/Profile.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Layout component to include Header and Footer
const Layout = () => {
  return (
    <div className="flex flex-col justify-between z-10 w-full h-screen">
      <Header />
      <Outlet /> {/* This renders the current route's component */}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap pages with Layout
    children: [
      { path: "/", element: <ColorChecker /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element:<Contact />},
      { path: "/profile", element:<Profile />}
    ],
  },
]);

const BackgroundComponent = () => {
  return (
    <div className="fixed inset-0 bg-black bg-cover bg-center z-0">
      <div className="w-screen h-screen relative">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <BackgroundComponent />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
