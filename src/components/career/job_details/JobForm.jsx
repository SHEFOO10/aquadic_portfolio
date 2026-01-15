import { useRef, useState } from "react";
import Upload from "@/components/icons/career/Upload";
import { useTranslation } from "react-i18next";

const JobForm = () => {
    const { t } = useTranslation("aboutus"); // translation namespace
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("phone", formData.phone);
        data.append("email", formData.email);
        if (file) data.append("cv", file);

        console.log("Form submitted:", {
            ...formData,
            fileName: file ? file.name : null,
        });
    };

    return (
        <section className="container py-[112px]">
            <h2 className="text-[#121212] text-[32px] font-medium">
                {t("applyingForm")} <span className="text-[#EA433A]">{t("form")}</span>
            </h2>

            <form className="mt-6" onSubmit={handleSubmit}>
                {/* Full Name */}
                <div>
                    <label htmlFor="name" className="text-[#000000] text-lg font-medium">
                        {t("fullName")}
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full h-14 border border-[#E3E3E3] rounded-[10px] mt-3 bg-transparent px-4"
                        placeholder={t("enterFullName")}
                        required
                    />
                </div>

                {/* Phone */}
                <div className="mt-6">
                    <label htmlFor="phone" className="text-[#000000] text-lg font-medium">
                        {t("phoneNumber")}
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-14 border border-[#E3E3E3] rounded-[10px] mt-3 bg-transparent px-4"
                        placeholder={t("phonePlaceholder")}
                        required
                    />
                </div>

                {/* Email */}
                <div className="mt-6">
                    <label htmlFor="email" className="text-[#000000] text-lg font-medium">
                        {t("email")}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full h-14 border border-[#E3E3E3] rounded-[10px] mt-3 bg-transparent px-4"
                        placeholder={t("enterEmail")}
                        required
                    />
                </div>

                {/* Upload CV */}
                <div className="mt-6">
                    <label className="text-[#000000] text-lg font-medium">{t("uploadCV")}</label>

                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.png"
                        className="hidden"
                    />

                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full h-[150px] border border-[#E3E3E3] rounded-[10px] mt-3 bg-transparent flex flex-col items-center justify-center cursor-pointer hover:border-[#EA433A] transition"
                    >
                        <Upload />

                        <p className="text-[#5D5D5D] text-sm mt-3">
                            {file ? file.name : t("chooseFile")}
                        </p>

                        <p className="text-[#5D5D5D] text-sm mt-1">
                            {t("acceptedFileTypes")}
                        </p>
                    </div>
                </div>

                {/* Submit */}
                <div>
                    <button
                        type="submit"
                        className="w-full h-14 bg-[#EA433A] rounded-[50px] mt-6 text-[#FFFFFF] text-lg font-bold"
                    >
                        {t("submit")}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default JobForm;
