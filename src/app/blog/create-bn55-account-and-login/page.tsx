import { Metadata } from 'next';
import Link from 'next/link';
import { DOWNLOAD_APP_URL } from '@/lib/constants';
import Script from 'next/script';
import BlogPostSchema from '@/components/BlogPostSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'How to Create a BN55 Account and Login? - Step by Step Guide',
  description: 'Learn how to create your BN55 account and login with our step-by-step guide. Get started playing games and earning rewards in minutes.',
  keywords: ['BN55 account', 'BN55 login', 'BN55 registration', 'BN55 sign up', 'BN55 guide'],
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
    canonical: "https://bn55apk.net.pk/blog/create-bn55-account-and-login",
  },
  openGraph: {
    title: 'How to Create Account and Login? - BN55',
    description: 'Learn how to create an account and login to BN55. Step by step guide for registration and accessing your account.',
    type: 'article',
    publishedTime: '2026-01-20T00:00:00Z',
    authors: ['BN55 Team'],
  }
};

export default function CreateAccountLogin() {
  return (
    <>
      <BlogPostSchema
        title="How to Create a BN55 Account and Login? - Step by Step Guide"
        description="Learn how to create your BN55 account and login with our step-by-step guide. Get started playing games and earning rewards in minutes."
        slug="create-bn55-account-and-login"
        datePublished="2026-01-20"
      />
      <BreadcrumbSchema items={[{name: "Home", url: "https://bn55apk.net.pk"}, {name: "Blog", url: "https://bn55apk.net.pk/blog"}, {name: "Create BN55 Account & Login", url: "https://bn55apk.net.pk/blog/create-bn55-account-and-login"}]} />
      <div className="min-h-screen bg-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-6">
            <Link href="/blog" className="text-accent hover:text-accent font-semibold inline-flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">How to Create a <Link href="/" className="text-accent hover:text-accent">BN55</Link> Account and Login?</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-0">
                  Setting up BN55 takes a few minutes: download the app, register with your mobile number, and log in. Once your account is active, you can join Teen Patti, Rummy, Dragon vs Tiger, and other tables to play for real money. Below is a step-by-step account creation and login guide.
                </p>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-8 text-white">Step-by-Step Account Creation</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#104008] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Download the BN55 App</h3>
                      <p className="text-gray-300 leading-relaxed">First, <a href={DOWNLOAD_APP_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">download the BN55 app</a> from our official website. Once downloaded, install the app on your Android device.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#104008] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Open the App and Tap "Register"</h3>
                      <p className="text-gray-300 leading-relaxed">Launch the BN55 app on your device. On the welcome screen, you'll see a "Register" button. Tap on it to begin the account creation process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#104008] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Fill Out the Registration Form</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">You'll be presented with a registration form. Here's what you need to provide:</p>
                      <ul className="list-disc pl-6 space-y-3 text-gray-300">
                        <li><strong>Mobile Number:</strong> Enter your valid mobile number for account verification.</li>
                        <li><strong>Password:</strong> Create a strong password that's at least 6 characters long. Include a mix of letters, numbers, and special characters for better security.</li>
                        <li><strong>Confirm Password:</strong> Re-enter your password to confirm it.</li>
                        <li><strong>Verification Code:</strong> Enter the OTP (One-Time Password) sent to your mobile number.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#104008] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Complete Registration</h3>
                      <p className="text-gray-300 leading-relaxed">After filling out all the required fields, tap on the "Register" button at the bottom of the form. If all information is entered correctly, your account will be created instantly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#104008] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Claim Your Welcome Bonus</h3>
                      <p className="text-gray-300 leading-relaxed">Once your account is created, you'll automatically receive a welcome bonus. This bonus can be used to play games on the platform and start earning real money. To understand all available bonuses and how to use them, read our <Link href="/blog/bn55-bonuses-vip-guide" className="text-accent hover:underline font-semibold">complete bonuses and VIP guide</Link>.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-8 text-white">How to Login to Your BN55 Account</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#104008] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Open the BN55 App</h3>
                      <p className="text-gray-300 leading-relaxed">Launch the BN55 app on your Android device.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#104008] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Enter Your Credentials</h3>
                      <p className="text-gray-300 leading-relaxed">On the welcome screen, you'll see fields for your mobile number and password. Enter the same mobile number and password you used during registration.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#104008] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Tap "Login"</h3>
                      <p className="text-gray-300 leading-relaxed">After entering your credentials, tap the "Login" button to access your account.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#104008] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">Verify Your Identity (If Required)</h3>
                      <p className="text-gray-300 leading-relaxed">For security purposes, you might occasionally be asked to verify your identity with an OTP, especially if you're logging in from a new device.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-8 text-white">Account Security Tips</h2>
                
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Use a Strong Password:</strong> Create a unique password that's not used for any other accounts.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Don't Share Your Credentials:</strong> Never share your mobile number or password with anyone, even if they claim to be from BN55 support.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Log Out on Shared Devices:</strong> Always log out of your account when using shared or public devices.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Update Regularly:</strong> Keep the BN55 app updated to the latest version to benefit from security improvements.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-orange-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Beware of Phishing:</strong> Only download BN55 from official sources and never click on suspicious links.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                <h2 className="text-3xl font-bold mb-8 text-white">Troubleshooting Login Issues</h2>
                
                <div className="space-y-6">
                  <div className="bg-[#104008] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-accent">Forgot Password?</h3>
                    <p className="text-gray-300 leading-relaxed">If you've forgotten your password, tap on the "Forgot Password" link on the login screen. You'll receive an OTP on your registered mobile number to reset your password.</p>
                  </div>
                  
                  <div className="bg-[#104008] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-accent">Account Locked?</h3>
                    <p className="text-gray-300 leading-relaxed">If your account gets locked due to multiple failed login attempts, wait for 30 minutes before trying again. For a full list of login errors and how to fix them, see our <Link href="/blog/bn55-login-problems-solutions-2026-guide" className="text-accent hover:underline font-semibold">login problems guide</Link>.</p>
                  </div>
                  
                  <div className="bg-[#104008] rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-accent">Can't Receive OTP?</h3>
                    <p className="text-gray-300 leading-relaxed">If you're not receiving OTP messages, check your network connection, ensure your mobile number is correct, or try requesting a new OTP. Contact BN55 support if the problem persists.</p>
                  </div>
                </div>
              </div>

              <aside className="mt-4 mb-8 pt-8 border-t border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Related Guides</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link href="/blog/how-to-use-bn55-app-pakistan-guide-2026" className="block p-5 bg-[#104008] rounded-lg hover:bg-[#104008]/70 transition-colors">
                    <h4 className="text-white font-semibold mb-1">Complete Beginner's Guide</h4>
                    <p className="text-gray-400 text-sm">From download to first withdrawal, step by step</p>
                  </Link>
                  <Link href="/deposit-money-in-bn55" className="block p-5 bg-[#104008] rounded-lg hover:bg-[#104008]/70 transition-colors">
                    <h4 className="text-white font-semibold mb-1">How to Deposit Money</h4>
                    <p className="text-gray-400 text-sm">Add funds via JazzCash or EasyPaisa</p>
                  </Link>
                  <Link href="/blog/bn55-bonuses-vip-guide" className="block p-5 bg-[#104008] rounded-lg hover:bg-[#104008]/70 transition-colors">
                    <h4 className="text-white font-semibold mb-1">Bonuses & VIP Guide</h4>
                    <p className="text-gray-400 text-sm">Welcome bonus, recharge rebates, and VIP rewards</p>
                  </Link>
                </div>
              </aside>

              <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Playing?</h2>
                <p className="text-white text-lg mb-8 max-w-2xl mx-auto">Now that you know how to create an account and login to BN55, you're ready to start playing Teen Patti, Rummy, and other card games to earn real money. Download the app today!</p>
                
                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                "headline": "How to Create Account and Login? - BN55",
                "description": "Learn how to create an account and login to BN55. Step by step guide for registration and accessing your account in Pakistan.",
                "datePublished": "2026-01-20T00:00:00Z",
                "dateModified": new Date().toISOString(),
                "author": { "@type": "Organization", "name": "BN55 Team", "url": "https://bn55apk.net.pk" },
                "publisher": { "@type": "Organization", "name": "BN55", "logo": { "@type": "ImageObject", "url": "https://bn55apk.net.pk/BN55.webp" } },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://bn55apk.net.pk/blog/create-bn55-account-and-login" },
                "inLanguage": "en-US",
                "about": { "@type": "Thing", "name": "BN55", "url": "https://bn55apk.net.pk" }
              },
              {
                "@type": "HowTo",
                "name": "How to Create a BN55 Account and Login",
                "description": "Step-by-step guide to create an account and log in to BN55 on Android in Pakistan.",
                "totalTime": "PT2M",
                "url": "https://bn55apk.net.pk/blog/create-bn55-account-and-login",
                "step": [
                  { "@type": "HowToStep", "position": 1, "name": "Download the BN55 App", "text": "Download and install the BN55 app from the official website." },
                  { "@type": "HowToStep", "position": 2, "name": "Open the App and Tap Register", "text": "Launch the app and tap the Register or Sign Up button on the welcome screen." },
                  { "@type": "HowToStep", "position": 3, "name": "Fill Out the Registration Form", "text": "Enter your mobile number, create a strong password, confirm it, and enter the OTP sent to your phone." },
                  { "@type": "HowToStep", "position": 4, "name": "Complete Registration", "text": "Tap Register. Your account is created once all details are correct." },
                  { "@type": "HowToStep", "position": 5, "name": "Claim Your Welcome Bonus", "text": "After registration, you receive a welcome bonus to start playing." },
                  { "@type": "HowToStep", "position": 6, "name": "Open the App to Login", "text": "Open the BN55 app when returning." },
                  { "@type": "HowToStep", "position": 7, "name": "Enter Your Credentials", "text": "Enter your registered mobile number and password." },
                  { "@type": "HowToStep", "position": 8, "name": "Tap Login", "text": "Tap the Login button to access your account. Use Forgot Password if needed." }
                ]
              }
            ]
          }).replace(/</g, "\\u003c")
        }}
      />
    </>
  );
}

