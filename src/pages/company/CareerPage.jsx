import { Helmet } from "react-helmet-async";
import CareerHeader from "@/components/career/CareerHeader";
import OpenPositions from "@/components/career/OpenPositions";

const CareerPage = () => (
  <>
    <Helmet>
      <title>Careers at AQuadic | Open Positions</title>
      <meta name="description" content="Explore career opportunities at AQuadic and apply to join our software and design team in Alexandria, Egypt." />
      <link rel="canonical" href="https://aquadic.com/career" />
    </Helmet>
    <div>
      <CareerHeader />
      <OpenPositions />
    </div>
  </>
);

export default CareerPage;
