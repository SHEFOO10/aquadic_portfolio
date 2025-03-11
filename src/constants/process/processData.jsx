import AnalysisIcon from "@/components/icons/process/AnalysisIcon.jsx";
import DesignIcon from "@/components/icons/process/DesignIcon.jsx";
import DesignHoveredIcon from "@/components/icons/process/DesignHoveredIcon.jsx";
import DevelopmentIcon from "@/components/icons/process/DevelopmentIcon.jsx";
import DevelopmentHoveredIcon from "@/components/icons/process/DevelopmentHoveredIcon.jsx";
import TestingIcon from "@/components/icons/process/TestingIcon.jsx";
import TestingHoveredIcon from "@/components/icons/process/TestingHoveredIcon.jsx";
import LaunchIcon from "@/components/icons/process/LaunchIcon.jsx";
import LaunchHoveredIcon from "@/components/icons/process/LaunchHoveredIcon.jsx";
import SalesIcon from "@/components/icons/process/SalesIcon.jsx";
import SalesHoveredIcon from "@/components/icons/process/SalesHoveredIcon.jsx";
import RedArrow from "@/components/icons/process/RedArrow";

export const processData = [
  {
    id: 1,
    nameEn: "01. Analysis And Planning",
    nameAr: "01. تحليل وتخطيط",
    bodyEn: (
      <div className="flex flex-col gap-4 text-[#121212] text-base">
        <p className="font-medium">Answering the big questions:.</p>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <RedArrow />
            Who is supposed to use this software?
          </li>
          <li className="flex items-center gap-2">
            <RedArrow />
            Who is supposed to use this software?
          </li>
          <li className="flex items-center gap-2">
            <RedArrow />
            Who is supposed to use this software?
          </li>
          <li className="flex items-center gap-2">
            <RedArrow />
            Who is supposed to use this software?
          </li>
        </ul>
        <p className="text-[#5D5D5D]">
          And defining project scheduling and cost, we’ve an outline to focus
          on, and move forward. This data is then analyzed to ensure its
          validity.
        </p>
      </div>
    ),
    bodyAr: (
      <div className="flex flex-col gap-4 text-[#121212] text-base">
        <p className="font-medium">الاجابة على الاسئلة الكبيرة.</p>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2">
            <RedArrow />
            من يستخدم هذا البرنامج
          </li>
          <li className="flex items-center gap-2">
            <RedArrow />
            من يستخدم هذا البرنامج
          </li>
          <li className="flex items-center gap-2">
            <RedArrow />
            من يستخدم هذا البرنامج
          </li>
          <li className="flex items-center gap-2">
            <RedArrow />
            من يستخدم هذا البرنامج
          </li>
        </ul>
        <p className="text-[#5D5D5D]">
          وتحديد جدول المشروع وتكلفته، لدينا مخطط نركز عليه ونتقدم إلى الأمام.
          ثم يتم تحليل هذه البيانات لضمان صحتها.
        </p>
      </div>
    ),
    icon: <AnalysisIcon />,
    hoveredIcon: <AnalysisIcon />,
  },
  {
    id: 2,
    name: "02. Design",
    body: "What this software will look like and how it will function In this phase a draft design is created to show us if the software requirements will work before we start the code. Test strategies are developed in this phase by testers by mentioning things to test and ways to check it. ",
    icon: <DesignIcon />,
    hoveredIcon: <DesignHoveredIcon />,
  },
  {
    id: 3,
    name: "03. Software Development",
    body: "Where actual coding begins In this phase our experienced developers start breathing life into the design through code. This is the longest phase, but you’ll be updated all through it so you always know where we are.",
    icon: <DevelopmentIcon />,
    hoveredIcon: <DevelopmentHoveredIcon />,
  },
  {
    id: 4,
    name: "04. Testing",
    body: "Testing, tracking and fixing bugs We need to know before hand what isn’t working, and fix it, because it increases end-customer satisfaction from the very beginning.",
    icon: <TestingIcon />,
    hoveredIcon: <TestingHoveredIcon />,
  },
  {
    id: 5,
    name: "05. Launch",
    body: "Pushing the code into production After the development of the application is completed and it has been thoroughly tested, it can be finally released to the market and made available for the users. This phase includes functional testing, way of acceptance criteria validation. We always monitor the product closely and ensure it works as intended after launch.",
    icon: <LaunchIcon />,
    hoveredIcon: <LaunchHoveredIcon />,
  },
  {
    id: 6,
    name: "06. After-Sales Service",
    body: "We’re not done yet! After the launch is over, we’ll continue support you by improving the software to make sure it’s bug-free and operational. We’ll listen to what your users have to say, and maybe make a few changes, and this phase lasts as the product lasts.",
    icon: <SalesIcon />,
    hoveredIcon: <SalesHoveredIcon />,
  },
];
