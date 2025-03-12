import contactBg from "../../assets/images/contactBG.webp";
import location from "../../assets/images/location.svg";
import phone from "../../assets/images/phone.svg";
import email from "../../assets/images/email.svg";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import { useTranslation } from "react-i18next";
import "../Hooks/i18n";

const ContactUs = () => {
  const { t } = useTranslation("contactus");
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });
  return (
    <section ref={ref} className="container md:mb-[120px]">
      <h1 className="text-[#121212] md:text-[32px] text-lg flex justify-center md:leading-8">
        {t("contactus")}
      </h1>
      <h2 className="text-[#121212] md:text-[56px] text-2xl font-bold flex justify-center md:leading-[56px] md:mt-6">
        <span className="text-brandColor">{t("connectWithUs")}&nbsp;</span>
        {t("today")}
      </h2>
      <div className="mt-12 flex lg:flex-row flex-col items-center lg:gap-[97px] gap-5">
        <AnimateOnScroll inView={inView} direction={"leftToRight"}>
          <div className="md:w-[614px] mx-auto">
            <img
              src={contactBg}
              className="w-[547px] mx-auto h-[366px]"
              alt="Placeholder"
            />
            <div className="flex md:flex-row flex-col gap-[36px] mt-6">
              <div className="flex flex-col items-center md:gap-4">
                <img src={location} alt="Location" />
                <p className="md:w-[176px] text-center text-[#5D5D5D] text-xl leading-[30px]">
                  Zizinia, Alexandria, Egypt
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={phone} alt="Phone" />
                <p className="text-[#5D5D5D] text-xl leading-5">
                  (+20) 110 178 2890
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={email} alt="Email" />
                <p className="text-[#5D5D5D] text-xl leading-5">
                  hello@aquadic.com
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll inView={inView} direction={"rightToLeft"}>
          <form className="flex flex-col items-center gap-4">
            <input
              type="text"
              name="name"
              className="sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base"
              placeholder={t("fullName")}
            />
            <input
              type="text"
              name="phone"
              className="sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base"
              placeholder={t("phoneNumber")}
            />
            <input
              type="text"
              name="email"
              className="sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base"
              placeholder={t("enterEmail")}
            />
            <input
              type="text"
              name="text"
              className="sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base"
              placeholder={t("subject")}
            />
            <input
              type="text"
              name="text"
              className="sm:w-[421px] w-[350px] h-[120px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0 placeholder:text-[#5D5D5D] placeholder:font-medium placeholder:text-base"
              placeholder={t("message")}
            />
            <button className="w-[206px] h-14 bg-brandColor rounded-[50px] text-white text-base font-bold">
              {t("sendMsg")}
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContactUs;
