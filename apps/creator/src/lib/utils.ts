import axios from "axios";
export const categories = [
  { id: 2, label: "Cars & Vehicles" },
  { id: 23, label: "Comedy" },
  { id: 27, label: "Education" },
  { id: 24, label: "Entertainment" },
  { id: 1, label: "Film & Animation" },
  { id: 20, label: "Gaming" },
  { id: 26, label: "How-to & Style" },
  { id: 10, label: "Music" },
  { id: 25, label: "News & Politics" },
  { id: 29, label: "Non-profits & Activism" },
  { id: 22, label: "People & Blogs" },
  { id: 15, label: "Pets & Animals" },
  { id: 28, label: "Science & Technology" },
  { id: 17, label: "Sport" },
  { id: 19, label: "Travel & Events" },
];
export const thumbnailFileTypes = [
  "image/jpeg",
  "image/png",
  " application/octet-stream",
];
export async function UploadImgGetUrl({ imgFile }: { imgFile: File }) {
  try {
    const blob = new Blob([imgFile], { type: imgFile.type });

    const form = new FormData();
    form.append("image", blob, imgFile.name);

    const res = await axios.post(
      "https://api.imgbb.com/1/upload?key=b10b7ca5ecd048d6a0ed9f9751cebbdc",
      form
    );

    return {
      ok: true,
      result: { displayUrl: res.data.data.display_url },
    };
  } catch (error) {
    return { ok: false, error: error as Error, result: null };
  }
}
