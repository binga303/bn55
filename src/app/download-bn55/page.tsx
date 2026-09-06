import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: { absolute: 'BN55 Pakistan v1.168 Free Download Official APK' },
  description: 'Download BN55 APK free for Android. Play Teen Patti, Rummy, Dragon Tiger & more. Earn real cash with JazzCash & EasyPaisa. Latest version V1.168(1) - 49MB.',
  keywords: [
    'Download BN55',
    'BN55 APK download',
    'BN55 Android',
    'Teen Patti download',
    'Free card game APK',
    'BN55 latest version',
    'Download BN55'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://bn55apk.net.pk/download-bn55",
  },
  openGraph: {
    title: 'BN55 Pakistan v1.168 Free Download Official APK',
    description: 'Download BN55 APK free. Play Teen Patti, Rummy & more. Earn real cash with secure payments. 500K+ downloads!',
    url: "https://bn55apk.net.pk/download-bn55",
    siteName: "BN55",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://bn55apk.net.pk/BN55.webp",
        width: 1200,
        height: 630,
        alt: "Download BN55 APK",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'BN55 Pakistan v1.168 Free Download Official APK',
    description: 'Download BN55 APK free. Play Teen Patti, Rummy & more. Earn real cash with secure payments. 500K+ downloads!',
    images: ["https://bn55apk.net.pk/BN55.webp"],
  },
};

export default function DownloadPage() {
  // Schema.org structured data for download page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BN55",
    "operatingSystem": "Android 5.0+",
    "applicationCategory": "GameApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PKR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "600000",
      "bestRating": "5"
    },
    "downloadUrl": "https://bn55apk.net.pk/download-bn55",
    "softwareVersion": "V1.168(1)",
    "fileSize": "49MB",
    "datePublished": "2026-01-03",
    "description": "Download BN55 APK free for Android. Play Teen Patti, Rummy, Dragon Tiger & more. Earn real cash with JazzCash & EasyPaisa.",
    "screenshot": [
      "https://bn55apk.net.pk/bn55-rebate.webp",
      "https://bn55apk.net.pk/bn55-game-pakistan.webp",
      "https://bn55apk.net.pk/bn55-deposit-money.webp"
    ],
    "image": "https://bn55apk.net.pk/BN55.webp",
    "author": {
      "@type": "Organization",
      "name": "BN55",
      "url": "https://bn55apk.net.pk"
    },
    "inLanguage": ["en", "ur"],
    "countriesSupported": "PK"
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      
      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Download </span>
            <span className="text-[#FFA500]">BN55 Game</span>
            <span className="text-white"> Free APK</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            For Android
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href="/" className="text-accent hover:underline font-semibold">BN55</Link> is a hub of top popular casino games like cards, poker, Rummy, Crash, Dragon Tiger, and much more. You can download this game free of cost.
          </p>
        </div>

        {/* Download Button - Prominent */}
        <div className="flex justify-center my-12">
          <DownloadButton size="lg" />
        </div>

        <div className="flex justify-center mb-8">
          <span className="bg-[#104008] text-[#4ade80] px-6 py-2 rounded-full text-sm font-semibold">
            ⚡ Fast APK Download
          </span>
        </div>

        {/* Logo/Image Section */}
        <div className="flex justify-center mb-12">
          <div className="relative" style={{ width: '320px', height: '320px', maxWidth: '100%' }}>
            <Image
              src="/BN55.webp"
              alt="BN55 Logo"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl"
              priority={true}
              fetchPriority="high"
              quality={90}
            />
          </div>
        </div>
      </section>

      {/* Download Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Download Information</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#104008]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">BN55</td>
                </tr>
                <tr className="bg-[#083000]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Version</td>
                  <td className="py-4 px-6 text-left text-white">V1.168(1)</td>
                </tr>
                <tr className="bg-[#104008]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">49MB</td>
                </tr>
                <tr className="bg-[#083000]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-left text-white">Android 5.0+</td>
                </tr>
                <tr className="bg-[#104008]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Update</td>
                  <td className="py-4 px-6 text-left text-white">5th January 2026</td>
                </tr>
                <tr className="bg-[#083000]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Button After Table */}
        <div className="flex justify-center mt-8">
          <DownloadButton />
        </div>
      </section>

      {/* Download & Install Process */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-steps">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
            Process to Download & Install BN55
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Step 01 */}
            <div className="bg-[#104008] rounded-lg p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">Step 01: Download APK</h3>
              <p className="text-gray-300 leading-relaxed">
                Click on download button to get BN55 Game APK. Wait for automatic download completion.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-[#104008] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">Step 02: Enable Unknown Sources</h3>
              <p className="text-gray-300 leading-relaxed">
                Go to device privacy settings and allow "install from unknown resources".
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-[#104008] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">Step 03: Install APK</h3>
              <p className="text-gray-300 leading-relaxed">
                Locate the downloaded file, tap on it and click on install. Let this process to be done automatically.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-[#104008] rounded-lg p-6 border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">Step 04: Start Earning</h3>
              <p className="text-gray-300 leading-relaxed">
                Finally, BN55 is successfully installed on your device, open it and start your journey with your first deposit in this earning app and grab opportunity to earn a lot of money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
          Why Download BN55?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Real Money Earning</h3>
            <p className="text-gray-300">Earn real cash by playing your favorite card games</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Multiple Games</h3>
            <p className="text-gray-300">Teen Patti, Rummy, Dragon Tiger, and many more</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Fast Withdrawals</h3>
            <p className="text-gray-300">Quick withdrawals through JazzCash & EasyPaisa</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Daily Bonuses</h3>
            <p className="text-gray-300">Get daily login bonuses and rewards</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Safe & Secure</h3>
            <p className="text-gray-300">Protected transactions and data security</p>
          </div>
          
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Easy to Use</h3>
            <p className="text-gray-300">Simple interface and smooth gameplay</p>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </>
  );
}

