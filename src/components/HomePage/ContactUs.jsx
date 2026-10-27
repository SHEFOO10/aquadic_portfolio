import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import AnimateOnScroll from "@/components/general/AnimateOnScroll.jsx";
import { axios } from "@/lib/axios.js";
import location from "../../assets/images/location.svg";
import phoneIcon from "../../assets/images/phone.svg";
import emailIcon from "../../assets/images/email.svg";
import "../Hooks/i18n";

const contactSchema = z.object({
  name: z.string().trim().min(1, "errors.nameRequired"),
  phone: z.string().trim().min(1, "errors.phoneRequired"),
  email: z.string().trim().min(1, "errors.emailRequired").email("errors.invalidEmail"),
  subject: z.string().trim().min(1, "errors.subjectRequired"),
  message: z.string().trim().min(1, "errors.messageRequired"),
});

const fieldClassName =
  "h-14 w-full rounded-xl border border-slate-300 bg-white/90 px-4 text-[#121212] shadow-sm transition placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandColor/50 focus-visible:border-brandColor";

const ContactUs = () => {
  const { t } = useTranslation("contactus");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    try {
      await axios.post("contactus", data);
      toast.success(t("toast.messageSent"));
      reset();
    } catch {
      toast.error(t("toast.error"));
    }
  };

  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: "-300px 0px" });

  return (
    <section ref={ref} id="contactUS" className="container mb-16 overflow-x-hidden md:mb-[120px]">
      <h2 className="flex justify-center text-lg leading-8 text-[#121212] md:text-[32px]">
        {t("contactus")}
      </h2>
      <h3 className="mt-2 flex justify-center text-2xl font-bold text-[#121212] md:mt-6 md:text-[56px] md:leading-[56px]">
        <span className="text-brandColor">{t("connectWithUs")}&nbsp;</span>
        {t("today")}
      </h3>
      <div className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-[72px]">
        <AnimateOnScroll inView={inView} direction="leftToRight">
          <div className="w-full max-w-[614px]">
            <iframe
              title="AQuadic office location in Alexandria, Egypt"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.185860007346!2d29.9658102!3d31.243277799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c546bb2e062d%3A0xbc10bed166e00160!2sAQuadic%20Software%20Solutions!5e0!3m2!1sen!2seg!4v1741888273517!5m2!1sen!2seg"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mx-auto h-[300px] w-full rounded-2xl shadow-lg md:h-[366px]"
            />
            <div className="mt-6 flex flex-col justify-between gap-6 sm:flex-row">
              <div className="flex flex-col items-center gap-3">
                <img src={location} alt="" aria-hidden="true" />
                <p className="text-center text-base leading-6 text-[#5D5D5D]">Zizinia, Alexandria, Egypt</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img src={phoneIcon} alt="" aria-hidden="true" />
                <a href="tel:+201101782890" className="text-base text-[#5D5D5D] hover:text-brandColor" dir="ltr">(+20) 110 178 2890</a>
              </div>
              <div className="flex flex-col items-center gap-3">
                <img src={emailIcon} alt="" aria-hidden="true" />
                <a href="mailto:hello@aquadic.com" className="text-base text-[#5D5D5D] hover:text-brandColor">hello@aquadic.com</a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll inView={inView} direction="rightToLeft">
          <form
            className="flex w-full max-w-[421px] flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
            aria-busy={isSubmitting}
          >
            <div>
              <label htmlFor="contact-name" className="mb-1 block text-sm font-semibold text-slate-700">{t("fullName")}</label>
              <input
                id="contact-name"
                type="text"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                {...register("name")}
                className={fieldClassName}
                placeholder={t("fullName")}
              />
              {errors.name && <p id="contact-name-error" role="alert" className="mt-1 text-sm text-red-600">{t(errors.name.message)}</p>}
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-1 block text-sm font-semibold text-slate-700">{t("phoneNumber")}</label>
              <input
                id="contact-phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                {...register("phone")}
                className={fieldClassName}
                placeholder={t("phoneNumber")}
              />
              {errors.phone && <p id="contact-phone-error" role="alert" className="mt-1 text-sm text-red-600">{t(errors.phone.message)}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1 block text-sm font-semibold text-slate-700">{t("enterEmail")}</label>
              <input
                id="contact-email"
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                {...register("email")}
                className={fieldClassName}
                placeholder={t("enterEmail")}
              />
              {errors.email && <p id="contact-email-error" role="alert" className="mt-1 text-sm text-red-600">{t(errors.email.message)}</p>}
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-1 block text-sm font-semibold text-slate-700">{t("subject")}</label>
              <input
                id="contact-subject"
                type="text"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                {...register("subject")}
                className={fieldClassName}
                placeholder={t("subject")}
              />
              {errors.subject && <p id="contact-subject-error" role="alert" className="mt-1 text-sm text-red-600">{t(errors.subject.message)}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-1 block text-sm font-semibold text-slate-700">{t("message")}</label>
              <textarea
                id="contact-message"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                {...register("message")}
                className={`${fieldClassName} h-32 resize-y py-3`}
                placeholder={t("message")}
              />
              {errors.message && <p id="contact-message-error" role="alert" className="mt-1 text-sm text-red-600">{t(errors.message.message)}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mx-auto mt-2 inline-flex min-h-14 w-[206px] items-center justify-center rounded-full bg-brandColor px-5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brandColor disabled:cursor-wait disabled:opacity-60"
            >
              {isSubmitting ? t("sending", { defaultValue: "Sending…" }) : t("sendMsg")}
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ContactUs;
