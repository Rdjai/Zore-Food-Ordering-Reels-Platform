import React from "react";
import { Heart, MessageCircle, Send, Ellipsis, Volume2, Play } from "lucide-react";

function ReelPage() {
    return (
        <div className="flex justify-center items-center h-screen w-screen bg-black">
            <div className="relative h-[90vh] w-[420px] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-gray-800">

                <div className="h-full w-full bg-gradient-to-b from-neutral-800 to-black flex flex-col justify-end">
                    <div className="absolute inset-0">
                        <video
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            autoPlay
                            muted
                            loop
                            className="object-cover h-full w-full"
                        ></video>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                        <div className="flex items-center gap-3 mb-3">
                            <img
                                src="https://i.pravatar.cc/50"
                                alt="User"
                                className="w-10 h-10 rounded-full border border-white"
                            />
                            <div>
                                <p className="font-semibold text-sm">@foodie_journey</p>
                                <p className="text-xs text-gray-300">2h ago</p>
                            </div>
                            <button className="ml-auto bg-white/10 hover:bg-white/20 text-xs px-3 py-1 rounded-full">
                                Follow
                            </button>
                        </div>

                        <p className="text-sm text-gray-200 mb-2">
                            Best street food in Delhi 🔥🍢 #foodlover #delhifood
                        </p>

                        <p className="text-xs text-gray-400">🎵 sound: trending audio</p>
                    </div>
                </div>

                <div className="absolute right-4 bottom-28 flex flex-col items-center gap-6 z-20">
                    <button className="flex flex-col items-center text-white hover:scale-110 transition">
                        <Heart size={34} className="drop-shadow-lg" />
                        <span className="text-xs mt-1">12.4k</span>
                    </button>

                    <button className="flex flex-col items-center text-white hover:scale-110 transition">
                        <MessageCircle size={34} className="drop-shadow-lg" />
                        <span className="text-xs mt-1">532</span>
                    </button>

                    <button className="flex flex-col items-center text-white hover:scale-110 transition">
                        <Send size={34} className="drop-shadow-lg" />
                        <span className="text-xs mt-1">Share</span>
                    </button>

                    <button className="flex flex-col items-center text-white hover:scale-110 transition">
                        <Ellipsis size={34} className="drop-shadow-lg" />
                    </button>
                </div>

                <div className="absolute top-5 right-5 flex items-center gap-4 z-20">
                    <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                        <Volume2 size={20} className="text-white" />
                    </button>
                    <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                        <Play size={20} className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ReelPage;
