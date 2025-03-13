import location from "../../assets/images/location.svg";
import phoneIcon from "../../assets/images/phone.svg";
import emailIcon from "../../assets/images/email.svg";
import { useInView } from "react-intersection-observer";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../Hooks/i18n";
import { axios } from "@/lib/axios.js";
import { toast } from "sonner";

// Define Zod schema
const contactSchema = z.object({
  name: z.string().min(1, "errors.nameRequired"),
  phone: z.string().min(1, "errors.phoneRequired"),
  email: z.string().min(1, "errors.emailRequired").email("errors.invalidEmail"),
  subject: z.string().min(1, "errors.subjectRequired"),
  message: z.string().min(1, "errors.messageRequired"),
});

const ContactUs = () => {
  const { t } = useTranslation("contactus");

  // Initialize form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  // Submit handler
  const onSubmit = async (data) => {
    try {
      await axios.post("contactus", data);
      toast.success(t("toast.messageSent"));
    } catch (err) {
      toast.error(t("toast.error"));

      console.log(err);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px 0px",
  });

  return (
    <section ref={ref} id="contactUS" className="container md:mb-[120px]">
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.185860007346!2d29.9658102!3d31.243277799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c546bb2e062d%3A0xbc10bed166e00160!2sAQuadic%20Software%20Solutions!5e0!3m2!1sen!2seg!4v1741888273517!5m2!1sen!2seg"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabIndex="0"
              className="w-[547px] mx-auto h-[366px]"
            />
            <div className="flex md:flex-row flex-col gap-[36px] mt-6">
              <div className="flex flex-col items-center md:gap-4">
                <img src={location} alt="Location" />
                <p className="md:w-[176px] text-center text-[#5D5D5D] text-xl leading-[30px]">
                  Zizinia, Alexandria, Egypt
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={phoneIcon} alt="Phone" />
                <p className="text-[#5D5D5D] text-xl leading-5" dir="ltr">
                  (+20) 110 178 2890
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <img src={emailIcon} alt="Email" />
                <p className="text-[#5D5D5D] text-xl leading-5">
                  hello@aquadic.com
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contact Form */}
        <AnimateOnScroll inView={inView} direction={"rightToLeft"}>
          <form
            className="flex flex-col items-center gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name Field */}
            <div className="relative">
              <input
                type="text"
                {...register("name")}
                className="sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0"
                placeholder={t("fullName")}
              />
              {errors.name && (
                <p className=" mt-2 text-red-500 text-sm">
                  {t(errors.name.message)}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="relative">
              <input
                type="text"
                {...register("phone")}
                className="sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0"
                placeholder={t("phoneNumber")}
              />
              {errors.phone && (
                <p className=" mt-2 text-red-500 text-sm">
                  {t(errors.phone.message)}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="text"
                {...register("email")}
                className="sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0"
                placeholder={t("enterEmail")}
              />
              {errors.email && (
                <p className=" mt-2 text-red-500 text-sm">
                  {t(errors.email.message)}
                </p>
              )}
            </div>

            {/* Subject Field */}
            <div className="relative">
              <input
                type="text"
                {...register("subject")}
                className="sm:w-[421px] w-[350px] h-[58px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0"
                placeholder={t("subject")}
              />
              {errors.subject && (
                <p className=" mt-2 text-red-500 text-sm">
                  {t(errors.subject.message)}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <textarea
                {...register("message")}
                className="sm:w-[421px] w-[350px] h-[120px] rounded-[10px] border border-[#A9A7A7] p-2 focus:outline-0"
                placeholder={t("message")}
              />
              {errors.message && (
                <p className=" mt-2 text-red-500 text-sm">
                  {t(errors.message.message)}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[206px] h-14 bg-brandColor rounded-[50px] text-white text-base font-bold"
            >
              {t("sendMsg")}
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContactUs;
