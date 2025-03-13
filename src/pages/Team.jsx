import { Helmet } from "react-helmet-async";
import PagesHeader from "@/components/general/PagesHeader";
import { useTranslation } from "react-i18next";
import "../components/Hooks/i18n";
import { useQuery } from "@tanstack/react-query";
import { axios } from "@/lib/axios.js";
import Loading from "@/components/general/Loading.jsx";
import TeamCard from "@/components/Team/TeamCard.jsx";

const Team = () => {
  const { t } = useTranslation("team");
  const { data: departments, isLoading } = useQuery({
    queryKey: ["departments"],
    queryFn: async () => await axios.get("department"),
    select: (data) => data.data,
  });
  if (isLoading) return <Loading />;
  return (
    <section>
      <Helmet>
        {/* Page Title */}
        <title>AQuadic | Meet Our Expert Team</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Meet AQuadic’s team of expert developers, designers, and strategists dedicated to delivering cutting-edge digital solutions."
        />

        {/* Keywords for SEO */}
        <meta
          name="keywords"
          content="AQuadic team, software developers, UI/UX designers, project managers, expert engineers, software house"
        />

        {/* Author */}
        <meta name="author" content="AQuadic Software House" />

        {/* Open Graph (OG) Meta Tags - For Social Sharing */}
        <meta property="og:title" content="AQuadic | Meet Our Expert Team" />
        <meta
          property="og:description"
          content="Discover the talented professionals behind AQuadic’s success in software development and design."
        />
        <meta
          property="og:image"
          content="https://example.com/aquadic-team.jpg"
        />
        <meta property="og:url" content="https://aquadic.com/team" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AQuadic | Meet Our Expert Team" />
        <meta
          name="twitter:description"
          content="Meet the talented software engineers, designers, and project managers behind AQuadic’s success."
        />
        <meta
          name="twitter:image"
          content="https://example.com/aquadic-team.jpg"
        />
      </Helmet>
      <PagesHeader sheader={t("bestTalent")} title={t("teamTitle")} />
      <div className="container flex flex-col items-center md:items-start md:py-[72px]">
        {departments &&
          departments.map((department) => (
            <TeamCard
              key={department.id}
              title={department.name}
              teamData={department.teams}
              image={department.image}
            />
          ))}
      </div>
    </section>
  );
};

export default Team;
