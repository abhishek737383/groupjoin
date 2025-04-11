import Image from "next/image";
import { MdCollections, MdLocalOffer, MdStyle } from "react-icons/md"; 
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";

// Reusable Feature Card
 function FeatureCard({ icon }: { icon: string }, title: string, description: string) {
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
      {/* Background Image */}
      <Image
        src="/bg.jpg"
        alt="Fashion background"
        fill
        className="object-cover opacity-25"
        priority
        unoptimized
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 text-center">
        {/* WhatsApp Logo */}
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Logo"
          width={120}
          height={120}
          priority
          unoptimized
          className="mb-6 drop-shadow-xl"
        />

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          Get <span className="text-yellow-300">Fashion Trend</span> Updates on WhatsApp
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80">
          Join our style community for daily outfit inspirations, exclusive collection alerts,
          limited offers, and expert fashion tips directly on WhatsApp!
        </p>

        {/* Call to Action */}
        <a
          href="https://chat.whatsapp.com/GXzqDtFkjyG11O4CfGOZ3j"
          target="_self"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-green-700 font-semibold rounded-full shadow-xl hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          <span className="text-lg">Join Whatsapp Group</span>
        </a>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl w-full">
        <FeatureCard
          icon={<MdCollections className="h-10 w-10 text-white" />}
          title="Trending Collections"
          description="Daily updates on the latest fashion trends and seasonal must-haves"
        />
        <FeatureCard
          icon={<MdLocalOffer className="h-10 w-10 text-white" />}
          title="Exclusive Offers"
          description="Members-only discounts and flash sales on premium fashion items"
        />
        <FeatureCard
          icon={<MdStyle className="h-10 w-10 text-white" />}
          title="Style Guidance"
          description="Expert tips on accessorizing, mix-and-match, and wardrobe building"
        />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-sm text-white/70">
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
