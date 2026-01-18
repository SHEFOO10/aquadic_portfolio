import { axios } from "@/lib/axios";

export const postApplication = async ({
  name,
  email,
  phone,
  phone_country,
  file,
}) => {
  const formData = new FormData();

  formData.append("name", name);
  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("phone_country", phone_country);
  formData.append("file", file);

  const { data } = await axios.post("applications", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};
