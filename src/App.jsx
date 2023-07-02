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
import NotFound from "./pages/NotFound";
import Careers, { careersLoader } from "./Layouts/Careers";
import CareersLayout from "./Layouts/CareersLayout";
import CareerDetails, { careerDetailsLoader } from "./pages/CareerDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path="about" element={<About/>}/>
      <Route path="help" element={<HelpLayout/>}>
        <Route path="Faq" element={<Faq/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>

      <Route path="careers" element={<CareersLayout/>}>
        <Route 
          index 
          element={<Careers/>}
          loader={careersLoader}
        />
        <Route 
          path=":id"  
          element={<CareerDetails/>}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Route>
  )
)
function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App
