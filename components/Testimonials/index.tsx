"use client";
import { useRef, useState } from "react";
import { videotestimonials } from "@/data/testimonials";
import PlayIcon from "@/public/svg/PlayIcon";

export default function Testimonials() {
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(
    null
  );
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handlePlayVideo = (index: number) => {
    if (playingVideoIndex !== null && videoRefs.current[playingVideoIndex]) {
      videoRefs.current[playingVideoIndex]?.pause();
    }
    if (playingVideoIndex === index) {
      setPlayingVideoIndex(null);
    } else {
      setPlayingVideoIndex(index);
      videoRefs.current[index]?.play();
    }
  };

  return (
    <section>
      <div className="bg-gradient-to-br from-[#fff] to-light py-12 md:py-24">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-secondary mb-8 md:mb-12 px-4">
          What Our Clients Say
        </h2>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {videotestimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative rounded-lg overflow-hidden bg-dark"
              >
                <div className="relative aspect-w-12 aspect-h-16">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="w-full h-full object-cover"
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                  </video>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/80 to-transparent">
                  <h3 className="text-lg font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                  <div className="mt-4">
                    <button
                      onClick={() => handlePlayVideo(index)}
                      className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center light:bg-white/30 transition"
                    >
                      <PlayIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
