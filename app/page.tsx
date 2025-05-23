import Image from "next/image";
import { MdCollections, MdLocalOffer, MdStyle } from "react-icons/md";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentClass: string;
}

function FeatureCard({
  icon,
  title,
  description,
  accentClass,
}: FeatureCardProps) {
  return (
    <div
      className={`
        flex flex-col items-center
        bg-white rounded-2xl p-6
        shadow-2xl border border-gray-200
        transform transition-transform duration-300
        hover:scale-105
        ${accentClass}
      `}
    >
      <div className="p-4 rounded-full shadow-lg bg-white">
        <div className="h-9 w-10">{icon}</div>
      </div>
      <h3 className="mt-4 text-xl font-extrabold text-gray-900">{title}</h3>
      <p className="mt-2 text-center text-gray-800">{description}</p>
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
        {/* Logo */}
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
            className="drop-shadow-2xl"
          />
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg opacity-0 animate-slide-down"
          style={{ animationDelay: "0.6s" }}
        >
          Get <span className="text-yellow-300">Free Fashion Trend</span> Updates on WhatsApp
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg sm:text-xl text-white/90 opacity-0 animate-slide-down"
          style={{ animationDelay: "0.9s" }}
        >
          Join our style community for daily outfit inspirations, exclusive collection alerts,
          limited offers, and expert fashion tips directly on WhatsApp!
        </p>

        <a
          href="https://chat.whatsapp.com/GXzqDtFkjyG11O4CfGOZ3j"
          target="_self"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full shadow-lg transform opacity-90 animate-slide-up animate-gradient bg-gradient-to-r from-red-400 via-red-500 to-blue-600 hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: "1.2s" }}
        >
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-black" />
          <span className="text-lg text-black">Join Now</span>
        </a>

        {/* What We Offer / हम क्या पेश करते हैं? */}
        <div
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full opacity-0 animate-slide-up"
          style={{ animationDelay: "1.5s" }}
        >
          <FeatureCard
            icon={<MdCollections className="h-10 w-10 text-indigo-600" />}
            accentClass="bg-gradient-to-tr from-indigo-50 to-indigo-100"
            title="Top Brands / टॉप ब्रांड्स"
            description="Shirts, pants, टी-शर्ट्स और ट्रैकपैंट – ट्रेंडिंग कलेक्शन्स उपलब्ध हैं!"
          />
          <FeatureCard
            icon={<MdLocalOffer className="h-10 w-10 text-pink-600" />}
            accentClass="bg-gradient-to-tr from-pink-50 to-pink-100"
            title="Low-Budget Products"
            description="ब्रांडेड स्टाइल्स सिर्फ ₹299 से शुरू – जबरदस्त बचत!"
          />
          <FeatureCard
            icon={<MdStyle className="h-10 w-10 text-purple-600" />}
            accentClass="bg-gradient-to-tr from-purple-50 to-purple-100"
            title="High-Margin Wholesale"
            description="Retailers के लिए डिस्काउंट रेट्स – प्रॉफिट बढ़ाने का मौका!"
          />
          <FeatureCard
            icon={<ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-yellow-600" />}
            accentClass="bg-gradient-to-tr from-yellow-50 to-yellow-100"
            title="Exclusive Deals"
            description="व्हाट्सएप ग्रुप में एक्सक्लूसिव डील्स और छूट – अभी जॉइन करें!"
          />
          <FeatureCard
            icon={<MdLocalOffer className="h-10 w-10 text-green-600" />}
            accentClass="bg-gradient-to-tr from-green-50 to-green-100"
            title="Fast Delivery & Easy Returns"
            description="तेज़ डिलीवरी और आसान रिटर्न – कस्टमर सैटिस्फैक्शन गारंटी!"
          />
          <FeatureCard
            icon={<MdCollections className="h-10 w-10 text-red-600" />}
            accentClass="bg-gradient-to-tr from-red-50 to-red-100"
            title="Direct WhatsApp Support"
            description="ऑर्डर या सवाल? हमें व्हाट्सएप पर सीधा मैसेज करें!"
          />
        </div>
      </div>

      <footer
        className="relative z-10 py-8 text-center text-sm text-white/70 opacity-0 animate-slide-up"
        style={{ animationDelay: "1.8s" }}
      >
        <div className="space-x-6">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
        <p className="mt-3 text-white/60">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
