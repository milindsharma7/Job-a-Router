import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import Contact from "./help/Contact";
import Faq from "./help/Faq";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>}/>
      <Route path="help" element={<HelpLayout/>}>
        <Route path="Faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Route>
  )
)
function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App
