import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import pinkBG from "../../assets/images/pinkBG.webp";
import Projects from "../general/Projects";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const Content = () => {
  const { t } = useTranslation("portfolio");
  return (
    <section className="container md:py-16">
      <h1 className="text-[#121212] md:text-[56px] text-3xl font-semibold flex justify-center">
        <span className="text-brandColor"> {t("portfolio")}&nbsp;</span>{" "}
        {t("company")}
      </h1>
      <Tabs defaultValue="all" className="">
        <TabsList className="flex flex-wrap md:gap-4">
          <TabsTrigger value="all">{t("all")}</TabsTrigger>
          <TabsTrigger value="booking">{t("booking")}</TabsTrigger>
          <TabsTrigger value="business">{t("business")}</TabsTrigger>
          <TabsTrigger value="medical">{t("medical")}</TabsTrigger>
          <TabsTrigger value="e-commerce">{t("ecommerce")}</TabsTrigger>
          <TabsTrigger value="islamic">{t("islamic")}</TabsTrigger>
          <TabsTrigger value="crm">{t("CRM")}</TabsTrigger>
          <TabsTrigger value="hotel">{t("hotel")}</TabsTrigger>
          <TabsTrigger value="car-services">{t("carServices")}</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="lg:!w-[1200px]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mb-[120px]">
            <Projects image={pinkBG} title="MS Player" type="Media / Social" />
            <Projects
              image={pinkBG}
              title="Fresh Farm"
              type="E-commerce / Food"
            />
            <Projects image={pinkBG} title="Find Help" type="Services" />
            <Projects image={pinkBG} title="Reaya" type="Medical" />
            <Projects image={pinkBG} title="Mamulaat" type="Books / Reading" />
            <Projects
              image={pinkBG}
              title="Spacey"
              type="Services / Management"
            />
            <Projects
              image={pinkBG}
              title="Pharmacy"
              type="E-commerce / Medical"
            />
            <Projects
              image={pinkBG}
              title="Al-Watania HR"
              type="Services / HR"
            />
            <Projects
              image={pinkBG}
              title="Eshhaar"
              type="E-commerce / Exchange"
            />
          </div>
        </TabsContent>

        <TabsContent value="booking" className="lg:!w-[1200px]">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 mb-[120px]">
            <Projects image={pinkBG} title="Reaya" type="Medical" />
            <Projects image={pinkBG} title="Mamulaat" type="Books / Reading" />
            <Projects
              image={pinkBG}
              title="Spacey"
              type="Services / Management"
            />
            <Projects
              image={pinkBG}
              title="Pharmacy"
              type="E-commerce / Medical"
            />
            <Projects
              image={pinkBG}
              title="Al-Watania HR"
              type="Services / HR"
            />
            <Projects
              image={pinkBG}
              title="Eshhaar"
              type="E-commerce / Exchange"
            />
          </div>
        </TabsContent>

        <TabsContent value="business">
          <p>test</p>
        </TabsContent>
        <TabsContent value="medical"></TabsContent>
        <TabsContent value="e-commerce"></TabsContent>
        <TabsContent value="islamic"></TabsContent>
        <TabsContent value="crm"></TabsContent>
        <TabsContent value="hotel"></TabsContent>
        <TabsContent value="car-services"></TabsContent>
      </Tabs>
    </section>
  );
};

export default Content;
