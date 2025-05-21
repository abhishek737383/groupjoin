import Image from "next/image";
import { MdCollections, MdLocalOffer, MdStyle } from "react-icons/md";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300">
      <div className="bg-green-300 p-4 rounded-full shadow-md">
        <div className="h-9 w-10">{icon}</div>
      </div>
      <h3 className="mt-4 text-xl font-bold text-gray-800">{title}</h3>
      <p className="mt-2 text-center text-gray-700">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 overflow-hidden text-white">
      <Image
        src="/bg.jpg"
        alt="Fashion background"
        fill
        className="object-cover opacity-20"
        priority
        unoptimized
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-15 text-center">
        {/* Logo with mobile margin adjustment */}
        <div
          className="mb-[20px] sm:mb-1 opacity-0 animate-slide-down"
          style={{ animationDelay: "0.3s" }}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Logo"
            width={120}
            height={120}
            priority
            unoptimized
            className="drop-shadow-xl"
          />
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg opacity-0 animate-slide-down"
          style={{ animationDelay: "0.6s" }}
        >
          Get <span className="text-yellow-300">Free Fashion Trend</span> Updates on WhatsApp
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80 opacity-0 animate-slide-down"
          style={{ animationDelay: "0.9s" }}
        >
          Join our style community for daily outfit inspirations, exclusive collection alerts,
          limited offers, and expert fashion Free tips directly on WhatsApp!
        </p>

        <a
          href="https://chat.whatsapp.com/GXzqDtFkjyG11O4CfGOZ3j"
          target="_self"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full shadow-xl transform opacity-90 animate-slide-up animate-gradient bg-gradient-to-r from-red-400 via-red-500 to-blue-600 hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: "1.2s" }}
        >
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-black-800" />
          <span className="text-lg text-black-800">Join Now</span>
        </a>

        <div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full opacity-0 animate-slide-up"
          style={{ animationDelay: "1.5s" }}
        >
          <FeatureCard
            icon={<MdCollections className="h-10 w-10 text-white" />}
            title="Trending Collections"
            description="Daily Free updates on the latest fashion trends and seasonal must-haves"
          />
          <FeatureCard
            icon={<MdLocalOffer className="h-10 w-10 text-white" />}
            title="Exclusive Offers"
            description="Members-only discounts and flash sales on premium fashion items"
          />
          <FeatureCard
            icon={<MdStyle className="h-10 w-10 text-white" />}
            title="Style Guidance"
            description="Expert Free tips on accessorizing, mix-and-match, and wardrobe building"
          />
        </div>
      </div>

      <footer className="relative z-10 py-8 text-center text-sm text-white/70 opacity-0 animate-slide-up" style={{ animationDelay: "1.8s" }}>
        <div className="space-x-6">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <p className="mt-3 text-white/60">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}