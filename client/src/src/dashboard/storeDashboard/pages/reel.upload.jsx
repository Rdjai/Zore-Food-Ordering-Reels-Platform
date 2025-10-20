import React, { useState } from "react";
import axios from "axios";

const ReelUploadPage = () => {
    const [formData, setFormData] = useState({
        video: null,
        caption: "",
        tags: "",
        restorentId: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // ✅ Handle input change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData({ ...formData, video: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // ✅ Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.video) {
            setMessage("⚠️ Please upload a video first.");
            return;
        }

        try {
            setLoading(true);
            setMessage("");

            // Step 1: Upload video to Cloudinary (or ImageKit)
            const videoData = new FormData();
            videoData.append("file", formData.video);
            videoData.append("upload_preset", "zore_foods"); // your preset

            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/<your-cloud-name>/video/upload", // 👈 replace with your cloud name
                videoData
            );

            const videoUrl = uploadRes.data.secure_url;

            // Step 2: Send data to backend
            const payload = {
                videoUrl,
                caption: formData.caption,
                tags: formData.tags.split(",").map((tag) => tag.trim()),
                restorentId: formData.restorentId || null,
            };

            await axios.post("http://localhost:5000/api/reel/upload", payload, {
                withCredentials: true,
            });

            setMessage("✅ Reel uploaded successfully!");
            setFormData({
                video: null,
                caption: "",
                tags: "",
                restorentId: "",
            });
        } catch (error) {
            console.error(error);
            setMessage("❌ Error uploading reel. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="text-2xl font-bold w-[83vw] h-[45px] flex items-center bg-blue-200 m-4 pl-5 rounded-[12px] text-blue-700 shadow-sm">
                <p>🎥 Upload New Reel</p>
            </div>

            <div className="w-[83vw] bg-white mt-2 m-4 rounded-[12px] shadow-lg p-6 h-[80vh] overflow-y-scroll no-scrollbar">
                {message && (
                    <p className="text-center text-sm mb-3 font-semibold text-red-500">
                        {message}
                    </p>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {/* Video Upload */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-2 font-medium">
                            Upload Video (MP4)
                        </label>
                        <input
                            type="file"
                            name="video"
                            accept="video/mp4,video/*"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                            required
                        />

                    </div>

                    {/* Caption */}
                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-2 font-medium">
                            Caption
                        </label>
                        <textarea
                            name="caption"
                            value={formData.caption}
                            onChange={handleChange}
                            placeholder="Write a catchy caption for your reel..."
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                            rows="3"
                        />
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Merge Items
                        </label>
                        <input
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            placeholder="e.g. chhola Kulche, Pav bhaji, Pizza"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Restaurant ID */}
                    <div>
                        <label className="block text-gray-700 mb-2 font-medium">
                            Restaurant ID (optional)
                        </label>
                        <input
                            name="restorentId"
                            value={formData.restorentId}
                            onChange={handleChange}
                            placeholder="Enter restaurant ID (if related)"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2 mt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 rounded-lg font-semibold text-white shadow-lg transition duration-300 ${loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-500 hover:bg-blue-600"
                                }`}
                        >
                            {loading ? "Uploading..." : "Upload Reel"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div className="bg-gray-200 p-4 text-center mb-10 w-[83vw] rounded-lg">
                <p className="text-gray-600">
                    &copy; 2024 Store Dashboard. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default ReelUploadPage;
