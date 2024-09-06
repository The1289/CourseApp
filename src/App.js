import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses, MyCourses,  StudentDashboard} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<Cart />} />
        <Route path = "dashboard/mycourses" element = {<MyCourses />} />
        <Route path = "/dashboard/mycourse/:id" element = {<StudentDashboard  />} /> 
      </Routes>
    </BrowserRouter>
  );   
}

export default App;
