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
        <p className="font-medium">Answering the big questions.</p>
        <ul className="flex flex-col gap-3">
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
    nameEn: "02. Design",
    nameAr: "02. التصميم",
    bodyEn: "What this software will look like and how it will function In this phase a draft design is created to show us if the software requirements will work before we start the code. Test strategies are developed in this phase by testers by mentioning things to test and ways to check it. ",
    bodyAr: "كيف سيبدو هذا البرنامج وكيف سيعمل في هذه المرحلة يتم إنشاء مسودة تصميم لإظهار ما إذا كانت متطلبات البرنامج ستعمل قبل أن نبدأ في كتابة الكود. يتم تطوير استراتيجيات الاختبار في هذه المرحلة من قبل المختبرين من خلال ذكر الأشياء التي يجب اختبارها وطرق التحقق منها.",
    icon: <DesignIcon />,
    hoveredIcon: <DesignHoveredIcon />,
  },
  {
    id: 3,
    nameEn: "03. Software Development",
    nameAr: "03. تطوير البرمجيات",
    bodyEn: "Where actual coding begins In this phase our experienced developers start breathing life into the design through code. This is the longest phase, but you’ll be updated all through it so you always know where we are.",
    bodyAr: "حيث يبدأ الترميز الفعلي في هذه المرحلة يبدأ مطورونا ذوو الخبرة في إضفاء الحياة على التصميم من خلال الترميز. هذه هي المرحلة الأطول، ولكنك ستتلقى التحديثات طوال هذه المرحلة حتى تعرف دائمًا أين نحن.",
    icon: <DevelopmentIcon />,
    hoveredIcon: <DevelopmentHoveredIcon />,
  },
  {
    id: 4,
    nameEn: "04. Testing",
    nameAr: "04. الاختبار",
    bodyEn: "Testing, tracking and fixing bugs We need to know before hand what isn’t working, and fix it, because it increases end-customer satisfaction from the very beginning.",
    bodyAr: "الاختبار والتتبع وإصلاح الأخطاء نحتاج إلى معرفة ما لا يعمل مسبقًا وإصلاحه، لأنه يزيد من رضا العميل النهائي منذ البداية.",
    icon: <TestingIcon />,
    hoveredIcon: <TestingHoveredIcon />,
  },
  {
    id: 5,
    nameEn: "05. Launch",
    nameAr: "05. الإطلاق",
    bodyEn: "Pushing the code into production After the development of the application is completed and it has been thoroughly tested, it can be finally released to the market and made available for the users. This phase includes functional testing, way of acceptance criteria validation. We always monitor the product closely and ensure it works as intended after launch.",
    bodyAr: "دفع الكود إلى الإنتاج بعد اكتمال تطوير التطبيق واختباره بشكل كامل، يمكن إطلاقه أخيرًا في السوق وإتاحته للمستخدمين. تتضمن هذه المرحلة الاختبار الوظيفي وطريقة التحقق من معايير القبول. نحن نراقب المنتج دائمًا عن كثب ونضمن أنه يعمل كما هو مقصود بعد الإطلاق.",
    icon: <LaunchIcon />,
    hoveredIcon: <LaunchHoveredIcon />,
  },
  {
    id: 6,
    nameEn: "06. After-Sales Service",
    nameAr: "06. خدمة ما بعد البيع",
    bodyEn: "We’re not done yet! After the launch is over, we’ll continue support you by improving the software to make sure it’s bug-free and operational. We’ll listen to what your users have to say, and maybe make a few changes, and this phase lasts as the product lasts.",
    bodyAr: "لم ننتهِ بعد! بعد انتهاء الإطلاق، سنستمر في دعمك من خلال تحسين البرنامج للتأكد من خلوه من الأخطاء وقدرته على التشغيل. سنستمع إلى آراء المستخدمين، وربما نجري بعض التغييرات، وتستمر هذه المرحلة طالما استمر المنتج.",
    icon: <SalesIcon />,
    hoveredIcon: <SalesHoveredIcon />,
  },
];
