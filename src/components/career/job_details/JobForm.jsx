import { useRef, useState } from "react";
import Upload from "@/components/icons/career/Upload";
import { useTranslation } from "react-i18next";
import { axios } from "@/lib/axios";

const COUNTRIES = [
    { code: "AF", name: "Afghanistan", dial: "+93" },
    { code: "AL", name: "Albania", dial: "+355" },
    { code: "DZ", name: "Algeria", dial: "+213" },
    { code: "AR", name: "Argentina", dial: "+54" },
    { code: "AU", name: "Australia", dial: "+61" },
    { code: "AT", name: "Austria", dial: "+43" },
    { code: "BH", name: "Bahrain", dial: "+973" },
    { code: "BD", name: "Bangladesh", dial: "+880" },
    { code: "BE", name: "Belgium", dial: "+32" },
    { code: "BR", name: "Brazil", dial: "+55" },
    { code: "BG", name: "Bulgaria", dial: "+359" },
    { code: "CA", name: "Canada", dial: "+1" },
    { code: "CL", name: "Chile", dial: "+56" },
    { code: "CN", name: "China", dial: "+86" },
    { code: "CO", name: "Colombia", dial: "+57" },
    { code: "HR", name: "Croatia", dial: "+385" },
    { code: "CZ", name: "Czech Republic", dial: "+420" },
    { code: "DK", name: "Denmark", dial: "+45" },
    { code: "EG", name: "Egypt", dial: "+20" },
    { code: "FI", name: "Finland", dial: "+358" },
    { code: "FR", name: "France", dial: "+33" },
    { code: "DE", name: "Germany", dial: "+49" },
    { code: "GR", name: "Greece", dial: "+30" },
    { code: "HK", name: "Hong Kong", dial: "+852" },
    { code: "HU", name: "Hungary", dial: "+36" },
    { code: "IN", name: "India", dial: "+91" },
    { code: "ID", name: "Indonesia", dial: "+62" },
    { code: "IR", name: "Iran", dial: "+98" },
    { code: "IQ", name: "Iraq", dial: "+964" },
    { code: "IE", name: "Ireland", dial: "+353" },
    { code: "IL", name: "Israel", dial: "+972" },
    { code: "IT", name: "Italy", dial: "+39" },
    { code: "JP", name: "Japan", dial: "+81" },
    { code: "JO", name: "Jordan", dial: "+962" },
    { code: "KW", name: "Kuwait", dial: "+965" },
    { code: "LB", name: "Lebanon", dial: "+961" },
    { code: "LY", name: "Libya", dial: "+218" },
    { code: "MY", name: "Malaysia", dial: "+60" },
    { code: "MX", name: "Mexico", dial: "+52" },
    { code: "MA", name: "Morocco", dial: "+212" },
    { code: "NL", name: "Netherlands", dial: "+31" },
    { code: "NZ", name: "New Zealand", dial: "+64" },
    { code: "NG", name: "Nigeria", dial: "+234" },
    { code: "NO", name: "Norway", dial: "+47" },
    { code: "OM", name: "Oman", dial: "+968" },
    { code: "PK", name: "Pakistan", dial: "+92" },
    { code: "PS", name: "Palestine", dial: "+970" },
    { code: "PH", name: "Philippines", dial: "+63" },
    { code: "PL", name: "Poland", dial: "+48" },
    { code: "PT", name: "Portugal", dial: "+351" },
    { code: "QA", name: "Qatar", dial: "+974" },
    { code: "RO", name: "Romania", dial: "+40" },
    { code: "RU", name: "Russia", dial: "+7" },
    { code: "SA", name: "Saudi Arabia", dial: "+966" },
    { code: "SG", name: "Singapore", dial: "+65" },
    { code: "ZA", name: "South Africa", dial: "+27" },
    { code: "KR", name: "South Korea", dial: "+82" },
    { code: "ES", name: "Spain", dial: "+34" },
    { code: "LK", name: "Sri Lanka", dial: "+94" },
    { code: "SD", name: "Sudan", dial: "+249" },
    { code: "SE", name: "Sweden", dial: "+46" },
    { code: "CH", name: "Switzerland", dial: "+41" },
    { code: "SY", name: "Syria", dial: "+963" },
    { code: "TW", name: "Taiwan", dial: "+886" },
    { code: "TH", name: "Thailand", dial: "+66" },
    { code: "TN", name: "Tunisia", dial: "+216" },
    { code: "TR", name: "Turkey", dial: "+90" },
    { code: "AE", name: "United Arab Emirates", dial: "+971" },
    { code: "GB", name: "United Kingdom", dial: "+44" },
    { code: "US", name: "United States", dial: "+1" },
    { code: "VN", name: "Vietnam", dial: "+84" },
    { code: "YE", name: "Yemen", dial: "+967" },
];

const JobForm = () => {
    const { t } = useTranslation("aboutus");
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        phone_country: "EG",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("phone", formData.phone);
            data.append("email", formData.email);
            data.append("phone_country", formData.phone_country);
            if (file) data.append("file", file);

            await axios.post("applications", data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setSuccess(t("successMessage") || "Application submitted successfully!");
            setFormData({ name: "", phone: "", email: "", phone_country: "EG" });
            setFile(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (err) {
            console.error(err.response?.data || err);
            const errorMsg = err.response?.data?.message ||
                err.response?.data?.errors?.phone?.[0] ||
                err.response?.data?.errors?.phone_country?.[0] ||
                "Submission failed!";
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    const selectedCountry = COUNTRIES.find(c => c.code === formData.phone_country);

    return (
        <section className="container py-[112px]">
            <h2 className="text-[#121212] text-[32px] font-medium">
                {t("applyingForm")} <span className="text-[#EA433A]">{t("form")}</span>
            </h2>

            <div className="mt-6">
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

                <div className="mt-6">
                    <label className="text-[#000000] text-lg font-medium">
                        {t("phoneCountry") || "Country"}
                    </label>
                    <select
                        name="phone_country"
                        value={formData.phone_country}
                        onChange={handleChange}
                        className="w-full h-14 border border-[#E3E3E3] rounded-[10px] mt-3 bg-transparent px-4"
                        required
                    >
                        {COUNTRIES.map((country) => (
                            <option key={country.code} value={country.code}>
                                {country.name} ({country.dial})
                            </option>
                        ))}
                    </select>
                </div>

                {/* Phone */}
                <div className="mt-6">
                    <label htmlFor="phone" className="text-[#000000] text-lg font-medium">
                        {t("phoneNumber")}
                    </label>
                    <div className="relative">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full h-14 border border-[#E3E3E3] rounded-[10px] mt-3 bg-transparent px-4 pl-20"
                            required
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 mt-1.5 text-[#5D5D5D] text-base">
                            {selectedCountry?.dial}
                        </span>
                    </div>
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
                        type="button"
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full h-14 bg-[#EA433A] rounded-[50px] mt-6 text-[#FFFFFF] text-lg font-bold disabled:opacity-50"
                    >
                        {loading ? t("submitting") : t("submit")}
                    </button>
                </div>

                {success && <p className="mt-4 text-green-600">{success}</p>}
                {error && <p className="mt-4 text-red-600">{error}</p>}
            </div>
        </section>
    );
};

export default JobForm;
