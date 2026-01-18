import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";
import HomePage from "./pages/HomePage";
import MobDevelopment from "./pages/MobDevelopment";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Testing from "./pages/Testing";
import WebDevelopment from "./pages/WebDevelopment";
import ProcessPage from "./pages/company/ProcessPage";
import CareerPage from "./pages/company/CareerPage";
import AboutUsPage from "./pages/company/AboutUsPage";
import JobDetailsPage from "./pages/company/JobDetailsPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetails from "./pages/BlogDetailsPage";
import SingleProjectPage from "./pages/SingleProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="team" element={<Team />} />
          <Route path="webdev" element={<WebDevelopment />} />
          <Route path="mobiledev" element={<MobDevelopment />} />
          <Route path="testing" element={<Testing />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<SingleProjectPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="career" element={<CareerPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="job_details/:id" element={<JobDetailsPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
