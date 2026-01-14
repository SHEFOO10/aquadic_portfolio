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
          <Route path="process" element={<ProcessPage />} />
          <Route path="career" element={<CareerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
