
import { HashRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CareerPath from "./components/CareerPath/CareerPath";
import Testimonials from "./components/testimonials/testimonials";
import Category from "./components/category/category";
import Playlist from "./components/playlist/Playlist";
import Portfolio from "./components/Portfolio/portfolio";
import Footer from "./components/Footer/Footer";
import Cert from "./components/cert/Cert";
import Subs from "./components/subs/Subscription";
import Project from "./components/projectlits/projectlits";
import CAreerPath from "./components/pathcareer/pathcareer";

// Ecommerce Landing Page
import Ecommerce from "./components/category/landingpage/ecommerce";
import ShopEasy from "./components/category/landingpage/shopeasy/shopeasy";
import Academ from "./components/category/school/academ";
import EnrollmentSystem from "./components/category/school/enrollmentsystem/enrollmentsystem";



// Cpp
import Learn from "./components/problemlanding/learn";
import CppProblems from "./components/problemlanding/cpplist/cppproblems";
import EasySpsc from "./components/problemlanding/cpplist/cppproblems/easyspsc";
import MediumOac from "./components/problemlanding/cpplist/cppproblems/mediumoac";
import HardScep from "./components/problemlanding/cpplist/cppproblems/hardscep";
import EasyMediumJSAS from "./components/problemlanding/cpplist/cppproblems/easymediumjsas";
import MediumJPFCS from "./components/problemlanding/cpplist/cppproblems/mediumjpfcs";
import SmartParkingGarageManagementSystem from "./components/problemlanding/cpplist/cppproblems/smartparkinggaragemanagementsystem";
import CharacterPositionFinder from "./components/problemlanding/cpplist/cppproblems/characterpositionfinder";
import SmartQueueManagementSystem from "./components/problemlanding/cpplist/cppproblems/smartqueuemanagementsystem";



import CharacterSelling from "./components/sellingproduct/python/charactersearchsystem/CharacterSelling";
import SellingProducts from "./components/sellingcategory/sellingproducts";
import FileOrganizer from "./components/sellingproduct/python/fileorganizer/fileorganizer";


import RoadmapCpp from "./components/roadmap/cpp/RoadmapCpp";
import RoadmapJava from "./components/roadmap/java/RoadmapJava";
import RoadmapPython from "./components/roadmap/python/RoadmapPython";
import RoadmapCSharp from "./components/roadmap/CSharp/RoadmapCSharp";
import RoadmapC from "./components/roadmap/c/RoadmapC";

import "./App.css";

function App() {
  return (
    <HashRouter>

      <div className="App">

        <Navbar />

        <Routes>

          {/* ========================================
              HOME
          ======================================== */}

          <Route
            path="/"
            element={
              <>
                <Hero />
                <SellingProducts/>
                <Portfolio />
                <Cert />
                <Subs />
                <Testimonials />
                <Category />
                <Playlist />
                <CareerPath />
              </>
            }
          />





          {/* ========================================
              ECOMMERCE PROJECTS
          ======================================== */}

          <Route path="/ecommerce" element={<Ecommerce />} />

          <Route path="/shopeasy"  element={<ShopEasy />} />
          
          <Route path="/academ" element={<Academ />} /> 
          
          <Route path="/enrollmentsystem" element={<EnrollmentSystem />} />
          
          <Route path="/projects" element={<Project />} />
          
          <Route path="/pathcareer" element={<CAreerPath />} />


          {/* ========================================
              Selling Products
          ======================================== */}
          
          <Route path="/" element={<SellingProducts />} />

           <Route path="/character-search" element={<CharacterSelling />} />

           <Route path="/file-organizer" element={<FileOrganizer />} />







        {  /* Learning Page */}
        <Route path="/learn" element={<Learn />} />

        <Route path="/learn/cpp" element={<CppProblems />} />

        <Route path="/learn/cpp/problem/1" element={<EasySpsc />} />

        <Route path="/learn/cpp/problem/2" element={<MediumOac />}/>
          
        <Route path="/learn/cpp/problem/3" element={<HardScep />} />

        <Route path="/learn/cpp/problem/6" element={<EasyMediumJSAS />}/>

        <Route path="/learn/cpp/problem/5"element={<MediumJPFCS />} />

        <Route path="/learn/cpp/problem/7" element={<SmartParkingGarageManagementSystem />} />

        <Route path="/learn/cpp/problem/8" element={<CharacterPositionFinder/>} />

        <Route path="/learn/cpp/problem/9"  element={<SmartQueueManagementSystem />} />

        {/* ======================================== PYTHON CHARACTER SEARCH SYSTEM ======================================== */} 
        
        <Route path="/learn/python/character-search" element={<CharacterSelling />} />


          {/* ========================================
              Road Map
          ======================================== */}

          <Route path="/roadmap/cpp" element={<RoadmapCpp />} />
           <Route path="/roadmapjava/java" element={<RoadmapJava />} />
            <Route path="/roadmappy/python" element={<RoadmapPython />} />
            <Route path="/roadmapcsharp/csharp" element={<RoadmapCSharp />} />
            <Route path="/roadmapC/c" element={<RoadmapC />} />
           

        </Routes>

        <Footer />

      </div>

    </HashRouter>
  );
}

export default App;