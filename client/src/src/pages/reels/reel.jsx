import React from 'react'
import { Heart, MessageCircle, Send, Ellipsis } from "lucide-react";

function ReelPage() {
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            {/* Reel Container */}
            <div className="relative h-[90vh] w-[500px] bg-amber-300 rounded-xl overflow-hidden">
                {/* Video/Content Placeholder */}
                <div className="h-full w-full bg-gradient-to-b from-amber-200 to-amber-400 flex items-center justify-center">
                    <p className="text-black text-2xl font-bold">🎥 Reel Video</p>
                </div>

                {/* Action Bar (Right side) */}
                <div className="absolute right-4 bottom-20 flex flex-col items-center gap-6">
                    <button className="flex flex-col items-center text-white hover:scale-110 transition">
                        <Heart size={32} />
                        <span className="text-sm">120</span>
                    </button>
                    <button className="flex flex-col items-center text-white hover:scale-110 transition">
                        <MessageCircle size={32} />
                        <span className="text-sm">45</span>
                    </button>
                    <button className="flex flex-col items-center text-white hover:scale-110 transition">
                        <Send size={32} />
                        <span className="text-sm">Share</span>
                    </button>
                    <button className="flex flex-col items-center text-white hover:scale-110 transition">
                        <Ellipsis size={32} />

                        <span className="text-sm">More</span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ReelPage
