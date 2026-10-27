import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/general/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const MobDevelopment = lazy(() => import("./pages/MobDevelopment"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Team = lazy(() => import("./pages/Team"));
const Testing = lazy(() => import("./pages/Testing"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const ProcessPage = lazy(() => import("./pages/company/ProcessPage"));
const CareerPage = lazy(() => import("./pages/company/CareerPage"));
const AboutUsPage = lazy(() => import("./pages/company/AboutUsPage"));
const JobDetailsPage = lazy(() => import("./pages/company/JobDetailsPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const BlogDetails = lazy(() => import("./pages/BlogDetailsPage"));
const SingleProjectPage = lazy(() => import("./pages/SingleProjectPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
          <Route path="blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
