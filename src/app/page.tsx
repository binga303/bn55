import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';
import { DOWNLOAD_APP_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'BN55 Pakistan v1.168 Free Download Official APK',
  description:
    'Download BN55 APK for Pakistan. Play hot slots, live casino, cricket sports, Aviator, Fortune Gems & more. Deposit with JazzCash & EasyPaisa. Real cash rewards 2026.',
  keywords: [
    'BN55',
    'BN55 APK',
    'BN55 download',
    'BN55 Pakistan',
    'BN55 game',
    'BN55 earning app',
    'BN55 JazzCash',
    'BN55 EasyPaisa',
    'bn55apk.net.pk',
    'BN55 2026',
  ],
  alternates: { canonical: 'https://bn55apk.net.pk' },
  openGraph: {
    title: 'BN55 Pakistan v1.168 Free Download Official APK',
    description:
      "Pakistan's trusted BN55 gaming platform — slots, live casino, sports & real cash via JazzCash & EasyPaisa.",
    url: 'https://bn55apk.net.pk',
    siteName: 'BN55',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://bn55apk.net.pk/feature/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'BN55 - Official Gaming APK Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BN55 Pakistan v1.168 Free Download Official APK',
    description: 'Download BN55 APK — slots, live casino, sports, JazzCash & EasyPaisa.',
    images: ['https://bn55apk.net.pk/feature/og-image.webp'],
  },
};

const appInfo = [
  { label: 'App Name', value: 'BN55' },
  { label: 'Category', value: 'Casino, Slots, Sports' },
  { label: 'Size', value: '49MB' },
  { label: 'Latest Version', value: 'V1.168(1)' },
  { label: 'Required OS', value: 'Android 5.0+' },
  { label: 'Update', value: '2026' },
  { label: 'Downloads', value: '500K+' },
  { label: 'Language', value: 'English, Urdu' },
  { label: 'Payments', value: 'JazzCash, EasyPaisa' },
  { label: 'Price', value: 'Free' },
];

const screenshots = [
  { src: '/bn55-game-pakistan.webp', alt: 'BN55 home lobby with featured games', title: 'App Lobby' },
  { src: '/bn55-hot-games.webp', alt: 'BN55 hot games including Aviator and slots', title: 'Hot Games' },
  { src: '/bn55-live-games.webp', alt: 'BN55 live casino providers', title: 'Live Casino' },
  { src: '/bn55-sports.webp', alt: 'BN55 cricket and sports books', title: 'Sports' },
  { src: '/bn55-daily-missions.webp', alt: 'BN55 daily missions and rewards', title: 'Daily Missions' },
  { src: '/bn55-rebate.webp', alt: 'BN55 rebate claim by game category', title: 'Rebate' },
  { src: '/bn55-invite-friends.webp', alt: 'BN55 invite friends referral dashboard', title: 'Invite Friends' },
  { src: '/bn55-deposit-money.webp', alt: 'BN55 deposit with JazzCash and EasyPaisa', title: 'Deposit' },
  { src: '/bn55-withdraw-money.webp', alt: 'BN55 withdraw to JazzCash and EasyPaisa', title: 'Withdraw' },
];

const features = [
  {
    title: 'Real Cash Play',
    text: 'Win on slots, crash games, live tables, and sports markets, then cash out to JazzCash or EasyPaisa in PKR.',
  },
  {
    title: 'Hot Games Hub',
    text: 'Aviator, Fortune Gems, Money Coming, Mighty Sevens, Super Ace, Boxing King, 7 Up 7 Down, Sic Bo, Video Poker and more in one lobby.',
  },
  {
    title: 'Live Casino',
    text: 'Real dealers from Evolution, Pragmatic Play, SA Gaming, Ezugi, Vivo Gaming, Sexy Gaming and other top studios.',
  },
  {
    title: 'Cricket & Sports',
    text: 'Follow matches through 9Wickets, SABA, Lucky Sports, BTI, Cricketbook, FB Sports, horse racing and more.',
  },
  {
    title: 'JazzCash & EasyPaisa',
    text: 'Deposit from Rs 100–50,000 with VIP JazzCash / EasyPaisa channels. Full Urdu deposit and withdraw screens for Pakistan players.',
  },
  {
    title: 'Daily Missions',
    text: 'Complete valid-bet milestones, climb the leaderboard, and claim cash bonuses plus event tickets like the wishing wheel.',
  },
  {
    title: 'Category Rebates',
    text: 'Manual rebate across Slot, Live, Sports, Poker and Fish — claim what you earn from daily play.',
  },
  {
    title: 'Invite & Earn',
    text: 'Share your referral link or QR code. Track registers, income, tier level, recharge rebate (~2%) and betting rebate.',
  },
  {
    title: 'Fast on Android',
    text: 'Lightweight APK (~49MB) that opens quickly on mid-range phones with stable 3G/4G or Wi‑Fi.',
  },
  {
    title: 'In-App Support',
    text: 'Headset support icons on wallet pages, promotions, rewards centre, and member area for quick help.',
  },
];

const hotGames = [
  'Aviator (Spribe)',
  'Fortune Garuda',
  'Mighty Sevens',
  'Fortune Gems 3',
  'Fly X',
  'Dragon Gems',
  'Wild Bounty Showdown',
  'Money Coming',
  'Piggy Bank',
  'Super Ace',
  'Boxing King',
  'Lucky 777',
  '7 Up 7 Down',
  'Sic Bo',
  'Video Poker',
  'Bangla Beauty',
];

const liveProviders = [
  'Evolution Gaming',
  'Pragmatic Play',
  'SA Gaming',
  'Ezugi',
  'Vivo Gaming',
  'Sexy Gaming',
  'W Casino',
  'Via Casino',
];

const sportsBooks = [
  '9Wickets',
  'SABA',
  'Lucky Sports',
  'AP Gaming',
  'Poly Sports',
  'BTI',
  'Cricketbook',
  'FB Sports',
  'RCB Horse Racing',
];

const welcomeBonus = [
  { deposit: '100', bonus: '100' },
  { deposit: '1,000', bonus: '1,000' },
  { deposit: '5,000', bonus: '5,000' },
  { deposit: '10,000', bonus: '10,000' },
  { deposit: '20,000', bonus: '20,000' },
  { deposit: '50,000', bonus: '50,000' },
];

const faqs = [
  {
    q: 'Is BN55 free to download?',
    a: 'Yes. The APK is free from bn55apk.net.pk. Always use the official download button so you avoid fake copies.',
  },
  {
    q: 'Which games can I play on BN55?',
    a: 'Hot slots and crash titles (Aviator, Fortune Gems, Money Coming), live casino lobbies, cricket/sports books, poker and fish games — plus daily missions and rebates.',
  },
  {
    q: 'How do I deposit money?',
    a: 'Open Deposit (جمع), pick EasyPaisa VIP or JazzCash VIP, choose a channel, select an amount from Rs 100 to Rs 50,000, link a phone number starting with 03, then confirm.',
  },
  {
    q: 'How do I withdraw winnings?',
    a: 'Open Withdraw (واپسی), bind EasyPaisa or JazzCash, meet any turnover rules shown in the wallet, enter the amount, and submit. Processing is typically within 24 hours.',
  },
  {
    q: 'Does BN55 support Urdu?',
    a: 'Yes. Wallet, deposit and withdraw flows are available in Urdu, and the app also supports English.',
  },
  {
    q: 'Can I earn from inviting friends?',
    a: 'Yes. The Invite Friends section gives you a link/QR, tracks today’s income, registers, tier level, recharge rebate and betting rebate.',
  },
  {
    q: 'Is BN55 available on iPhone?',
    a: 'The primary install path is Android APK. Some players also open the mobile web lobby in a browser; for PC, use an Android emulator — see our PC guide.',
  },
  {
    q: 'Is there a risk of losing money?',
    a: 'Yes. Real-money play always carries risk. Only use money you can afford to lose and play responsibly (18+).',
  },
];

export default function HomePage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://bn55apk.net.pk/#organization',
        name: 'BN55',
        url: 'https://bn55apk.net.pk',
        logo: 'https://bn55apk.net.pk/BN55.webp',
        description:
          'BN55 official Pakistan site — slots, live casino, sports betting, JazzCash & EasyPaisa.',
        areaServed: { '@type': 'Country', name: 'Pakistan', alternateName: 'PK' },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'support@bn55apk.net.pk',
          areaServed: 'PK',
          availableLanguage: ['English', 'Urdu'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://bn55apk.net.pk/#website',
        url: 'https://bn55apk.net.pk',
        name: 'BN55',
        publisher: { '@id': 'https://bn55apk.net.pk/#organization' },
        inLanguage: ['en', 'ur'],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'BN55',
        operatingSystem: 'Android 5.0+',
        applicationCategory: 'GameApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.6',
          ratingCount: '500000',
          bestRating: '5',
        },
        downloadUrl: 'https://bn55apk.net.pk/download-bn55',
        softwareVersion: 'V1.168(1)',
        fileSize: '49MB',
        image: 'https://bn55apk.net.pk/BN55.webp',
        author: { '@id': 'https://bn55apk.net.pk/#organization' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="py-8 md:py-14 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                BN55
              </h1>
              <p className="text-xl md:text-2xl font-semibold mb-6">
                <span className="text-[#FFA500]">
                  Pakistan&apos;s Most Trusted BN55 Gaming Platform 2026
                </span>
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                BN55 brings hot slots, crash games like Aviator, live casino tables, and cricket
                sports books to your phone — with JazzCash &amp; EasyPaisa deposits and withdrawals
                in Urdu and English. Use the button below for the official APK.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start justify-center lg:justify-start mb-8">
                <DownloadButton size="lg" />
                <Link
                  href="/download-bn55"
                  className="inline-flex w-fit items-center justify-center px-5 py-2.5 sm:px-8 sm:py-4 rounded-full border border-gray-600 text-sm sm:text-base text-white font-semibold hover:border-accent hover:text-accent transition-colors"
                >
                  Installation Guide
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { n: '500K+', l: 'Downloads' },
                  { n: '49MB', l: 'App Size' },
                  { n: '18+', l: 'Players Only' },
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-accent">{s.n}</div>
                    <div className="text-sm text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">*Available for Android devices</p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-[260px] h-[260px] md:w-[340px] md:h-[340px] rounded-2xl overflow-hidden bg-[#104008]">
                <Image
                  src="/BN55.webp"
                  alt="BN55 Official Logo"
                  width={340}
                  height={340}
                  className="object-contain p-4 w-full h-full"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App info table */}
      <section className="py-10 px-4 bg-secondary/40">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            BN55 Download Info
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-800">
            <table className="w-full text-left">
              <tbody>
                {appInfo.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}
                  >
                    <th className="py-3 px-4 md:px-6 text-accent font-semibold w-1/3">
                      {row.label}
                    </th>
                    <td className="py-3 px-4 md:px-6 text-white">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-6">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Overview</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              The BN55 lobby groups play into clear hubs — <strong className="text-white">Hot Games</strong>,{' '}
              <strong className="text-white">Live</strong>, <strong className="text-white">Sports</strong>,
              plus Promotion, Invite, Reward and Member tabs. You can jump into Aviator or a JILI slot in
              seconds, open a live dealer room, or follow a cricket market without digging through cluttered
              menus.
            </p>
            <p>
              Wallet flows are built for Pakistan: deposit (جمع) and withdraw (واپسی) screens support{' '}
              <strong className="text-white">JazzCash VIP</strong> and <strong className="text-white">EasyPaisa VIP</strong>,
              preset amounts from Rs 100 to Rs 50,000, and phone numbers starting with 03. Daily missions,
              category rebates (Slot / Live / Sports / Poker / Fish), and an invite dashboard keep regular
              players engaged beyond a single session.
            </p>
          </div>
        </div>
      </section>

      {/* What is BN55 */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What is BN55 Game?</h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              <Link href="/" className="text-accent hover:underline font-semibold">
                BN55
              </Link>{' '}
              is an all-in-one entertainment and real-cash platform for Pakistani players. It mixes
              high-multiplier slots and crash titles, multi-provider live casino, cricket-focused sports
              books, fishing/arcade games, and poker — with local wallets for funding and cashout.
            </p>
            <p>
              Compared with thin “slots only” clone sites, BN55’s in-app experience shows a full product:
              missions with valid-bet milestones, a claimable rebate centre, referral tiers with recharge
              and betting rebates, and bilingual wallet UI. New users can start with a small deposit,
              claim event rewards, and learn tables before raising stakes.
            </p>
          </div>
        </div>
      </section>

      {/* Why popular */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why is BN55 Popular in Pakistan?
          </h2>
          <ul className="space-y-3 text-lg text-gray-300">
            {[
              'Local payments: JazzCash & EasyPaisa VIP channels with Urdu instructions.',
              'Game depth: Aviator, Fortune Gems, Money Coming, Super Ace, live Evolution/Pragmatic rooms, and cricket books like 9Wickets & SABA.',
              'Daily value: missions, floating Claim rewards, and category-wise rebates.',
              'Referral income: invite link/QR, tier progress, recharge ~2% and betting rebate tracking.',
              'Mobile-first lobby that stays readable on mid-range Android devices.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-accent font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How to start */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How to Start with BN55
          </h2>
          <ol className="space-y-4">
            {[
              'Open bn55apk.net.pk and tap Download to get the official APK from our trusted link.',
              'Allow install from unknown sources, then open the APK and finish setup.',
              'Launch BN55 and register with your mobile number (or log in if you already have an account).',
              'Collect any welcome / event rewards shown under Promotion or the Claim gift icon.',
              'Optional: deposit via JazzCash or EasyPaisa (Rs 100+), then pick Hot Games, Live, or Sports.',
              'Play responsibly, complete missions for extra bonuses, and withdraw when your turnover rules are met.',
            ].map((step, i) => (
              <li key={step} className="flex gap-4 bg-primary rounded-xl p-4 border border-gray-800">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-primary font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-gray-300 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <DownloadButton size="lg" label="DOWNLOAD BN55 NOW" />
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
            BN55 App Screenshots
          </h2>
          <p className="text-gray-300 text-center mb-10 max-w-2xl mx-auto">
            Real lobby views — hot games, live casino, sports, missions, rebate, invite, deposit and
            withdraw.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {screenshots.map((shot) => (
              <figure
                key={shot.src}
                className="bg-secondary rounded-xl overflow-hidden border border-gray-800"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={720}
                  height={1280}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto object-contain"
                />
                <figcaption className="p-3 text-center text-sm text-accent font-semibold">
                  {shot.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Top Features of BN55
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className="bg-primary rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-bold text-accent mb-2">
                  {i + 1}. {f.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Games */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Best Games to Play on BN55
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-secondary rounded-xl p-6 border border-gray-800">
              <Image
                src="/bn55-hot-games.webp"
                alt="Hot games"
                width={720}
                height={1280}
                sizes="33vw"
                className="w-full h-auto object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-accent mb-3">Hot Games &amp; Slots</h3>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                {hotGames.map((g) => (
                  <li key={g}>• {g}</li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-xl p-6 border border-gray-800">
              <Image
                src="/bn55-live-games.webp"
                alt="Live casino"
                width={720}
                height={1280}
                sizes="33vw"
                className="w-full h-auto object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-accent mb-3">Live Casino</h3>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                {liveProviders.map((g) => (
                  <li key={g}>• {g}</li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-xl p-6 border border-gray-800">
              <Image
                src="/bn55-sports.webp"
                alt="Sports"
                width={720}
                height={1280}
                sizes="33vw"
                className="w-full h-auto object-contain rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-accent mb-3">Sports &amp; Cricket</h3>
              <ul className="space-y-1.5 text-gray-300 text-sm">
                {sportsBooks.map((g) => (
                  <li key={g}>• {g}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm">
            Also explore Poker and Fish categories inside the app for more variety.
          </p>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Benefits for New BN55 Players
          </h2>
          <p className="text-gray-300 text-center mb-10">
            Promotions, missions and rebates change over time — always check in-app Rules before claiming.
          </p>

          <h3 className="text-2xl font-bold text-accent mb-4">1. Welcome / First Deposit Boost</h3>
          <p className="text-gray-300 mb-4">
            Many new accounts see a first-recharge style boost. Example illustration of equal match
            values (confirm live offer inside BN55):
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-800 mb-10">
            <table className="w-full text-left">
              <thead className="bg-primary">
                <tr>
                  <th className="py-3 px-4 text-accent">Deposit (PKR)</th>
                  <th className="py-3 px-4 text-accent">Bonus Example (PKR)</th>
                </tr>
              </thead>
              <tbody>
                {welcomeBonus.map((row, i) => (
                  <tr key={row.deposit} className={i % 2 === 0 ? 'bg-secondary' : 'bg-primary'}>
                    <td className="py-3 px-4 text-white">{row.deposit}</td>
                    <td className="py-3 px-4 text-white">{row.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-accent mb-4">2. Daily Missions</h3>
          <p className="text-gray-300 mb-8">
            The Mission centre tracks valid bets (for example Rs 300, Rs 3,000 milestones), shows a
            countdown timer, and unlocks cash bonuses plus event tickets. Finish tasks under In Progress,
            then claim from the gift widget.
          </p>

          <h3 className="text-2xl font-bold text-accent mb-4">3. Manual Rebate by Category</h3>
          <p className="text-gray-300 mb-8">
            Open Rebate to see Slot, Live, Sports, Poker and Fish totals for the day (GMT+8), then tap
            Claim when a balance is available.
          </p>

          <h3 className="text-2xl font-bold text-accent mb-4">4. Invite Friends</h3>
          <p className="text-gray-300">
            Share your personal link or QR. The dashboard shows today/yesterday income, registers, valid
            referrals, tier (e.g. L1), monthly invite/deposit/bet goals, plus recharge and betting rebate
            rates. See our{' '}
            <Link href="/blog/bn55-bonuses-vip-guide" className="text-accent hover:underline">
              bonuses &amp; VIP guide
            </Link>{' '}
            for deeper tips.
          </p>
        </div>
      </section>

      {/* Download & install */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Download BN55 APK for Android
          </h2>
          <ol className="space-y-3 text-gray-300 mb-8 list-decimal list-inside">
            <li>Open your Android browser and visit the official BN55 site.</li>
            <li>
              Tap{' '}
              <a href={DOWNLOAD_APP_URL} className="text-accent hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
                Download Now
              </a>{' '}
              and wait for the APK to finish.
            </li>
            <li>If prompted, allow installs from this browser/source.</li>
            <li>Open the file from Downloads and confirm Install.</li>
            <li>Launch BN55, register, and explore Hot Games / Live / Sports.</li>
          </ol>

          <h3 className="text-2xl font-bold text-white mb-4">System Requirements</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-800 mb-8">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-secondary">
                <tr>
                  <th className="py-3 px-4 text-accent">System</th>
                  <th className="py-3 px-4 text-accent">Minimum</th>
                  <th className="py-3 px-4 text-accent">Recommended</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="bg-primary">
                  <td className="py-3 px-4">OS</td>
                  <td className="py-3 px-4">Android 5.0</td>
                  <td className="py-3 px-4">Android 8.0+</td>
                </tr>
                <tr className="bg-secondary">
                  <td className="py-3 px-4">RAM</td>
                  <td className="py-3 px-4">2GB</td>
                  <td className="py-3 px-4">4GB+</td>
                </tr>
                <tr className="bg-primary">
                  <td className="py-3 px-4">Storage</td>
                  <td className="py-3 px-4">500MB free</td>
                  <td className="py-3 px-4">1GB free</td>
                </tr>
                <tr className="bg-secondary">
                  <td className="py-3 px-4">Internet</td>
                  <td className="py-3 px-4">Stable 3G</td>
                  <td className="py-3 px-4">4G / Wi‑Fi</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-300 mb-4">
            Prefer desktop? Follow{' '}
            <Link href="/bn55-for-pc" className="text-accent hover:underline">
              BN55 for PC
            </Link>{' '}
            using BlueStacks or LDPlayer.
          </p>
          <DownloadButton />
        </div>
      </section>

      {/* Deposit / Withdraw */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Deposit &amp; Withdraw with JazzCash / EasyPaisa
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-primary rounded-2xl border border-gray-800 overflow-hidden">
              <Image
                src="/bn55-deposit-money.webp"
                alt="BN55 deposit JazzCash EasyPaisa"
                width={720}
                height={1280}
                className="w-full h-auto object-contain"
                sizes="50vw"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-accent mb-3">How to Deposit</h3>
                <ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside mb-4">
                  <li>Open wallet → Deposit (جمع).</li>
                  <li>Select EasyPaisa VIP or JazzCash VIP.</li>
                  <li>Pick a payment channel and amount (100–50,000).</li>
                  <li>Link a correct 03xxxxxxx number, then continue.</li>
                </ol>
                <Link href="/deposit-money-in-bn55" className="text-accent font-semibold hover:underline">
                  Full deposit guide →
                </Link>
              </div>
            </div>
            <div className="bg-primary rounded-2xl border border-gray-800 overflow-hidden">
              <Image
                src="/bn55-withdraw-money.webp"
                alt="BN55 withdraw JazzCash EasyPaisa"
                width={720}
                height={1280}
                className="w-full h-auto object-contain"
                sizes="50vw"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-accent mb-3">How to Withdraw</h3>
                <ol className="space-y-2 text-gray-300 text-sm list-decimal list-inside mb-4">
                  <li>Open wallet → Withdraw (واپسی).</li>
                  <li>Bind EasyPaisa or JazzCash account details.</li>
                  <li>Complete any shown turnover (e.g. Slots/Fish).</li>
                  <li>Enter amount and confirm — usually within 24 hours.</li>
                </ol>
                <Link
                  href="/withdraw-money-from-bn55"
                  className="text-accent font-semibold hover:underline"
                >
                  Full withdraw guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Safety Tips for BN55 Players
          </h2>
          <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
            <p>
              BN55 is not listed on Google Play like typical casual games, so source matters. Download
              only from{' '}
              <Link href="/" className="text-accent hover:underline">
                bn55apk.net.pk
              </Link>{' '}
              or our official button — never random Telegram APKs. Keep your login private, use your own
              JazzCash/EasyPaisa number, and complete turnover shown in the withdraw screen before
              cashing out.
            </p>
            <p>
              Read our{' '}
              <Link href="/blog/is-bn55-safe-legal-pakistan" className="text-accent hover:underline">
                safety &amp; legal overview
              </Link>{' '}
              and{' '}
              <Link href="/blog/is-bn55-real-or-fake" className="text-accent hover:underline">
                real or fake review
              </Link>{' '}
              before depositing large amounts.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tips to Get More Value on BN55
          </h2>
          <ul className="space-y-3 text-gray-300">
            {[
              'Start with small Hot Games stakes until you learn volatility (especially high-multiplier slots).',
              'Clear daily mission milestones before random grinding — bonuses stack with play you already planned.',
              'Claim category rebates regularly; totals reset on the GMT+8 day window.',
              'Use Invite only with people you trust; track valid referrals in the dashboard.',
              'Withdraw smaller wins on time instead of chasing losses.',
              'Prefer official live providers (Evolution, Pragmatic) when you want transparent table rules.',
              'For cricket seasons, compare odds across 9Wickets / SABA / Lucky Sports before placing.',
              'Update to the latest APK when we post version notes so wallet bugs get patched.',
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-accent">•</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
          <div className="bg-secondary rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold text-accent mb-4">Pros</h2>
            <ul className="space-y-2 text-gray-300">
              {[
                'Wide mix: slots, crash, live, sports, fish, poker',
                'JazzCash & EasyPaisa in Urdu',
                'Missions, rebates, invite tiers',
                'Familiar studios (JILI, Evolution, Pragmatic, Spribe)',
                'Free APK download',
                'Active Claim / Promotion centre',
              ].map((p) => (
                <li key={p}>✓ {p}</li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Cons</h2>
            <ul className="space-y-2 text-gray-300">
              {[
                'Real-money risk — losses are possible',
                'Withdraw needs turnover completion',
                'Not on Google Play (sideload APK)',
                'Can feel addictive — set limits',
                'Needs stable internet for live/sports',
                'Offers change — always read in-app rules',
              ].map((c) => (
                <li key={c}>✗ {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Latest BN55 Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: '/blog/is-bn55-real-or-fake', title: 'Is BN55 Real or Fake?' },
              { href: '/blog/how-to-use-bn55-app-pakistan-guide-2026', title: 'How to Use BN55 in Pakistan' },
              { href: '/blog/create-bn55-account-and-login', title: 'Create Account & Login' },
              { href: '/blog/ways-to-earn-money-with-bn55-2026', title: 'Ways to Earn on BN55' },
              { href: '/deposit-money-in-bn55', title: 'Deposit with JazzCash / EasyPaisa' },
              { href: '/withdraw-money-from-bn55', title: 'Withdraw Guide' },
              { href: '/blog/tips-to-win-big-in-bn55', title: 'Tips to Win Smarter' },
              { href: '/blog/bn55-bonuses-vip-guide', title: 'Bonuses & VIP Guide' },
            ].map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="bg-primary border border-gray-800 rounded-xl p-4 text-white font-semibold hover:border-accent hover:text-accent transition-colors"
              >
                {g.title} →
              </Link>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/blog" className="text-accent hover:underline font-semibold">
              View all blog posts
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="bg-secondary border border-gray-800 rounded-xl p-5 group"
              >
                <summary className="cursor-pointer list-none font-semibold text-white flex justify-between gap-4 items-center">
                  {item.q}
                  <span className="text-accent group-open:rotate-45 transition-transform text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-300 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final */}
      <section className="py-12 md:py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Final Thoughts</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            BN55 stands out when you want more than a single Teen Patti table — slots and Aviator for
            quick rounds, live dealers for classic casino feel, cricket books for match nights, and a
            wallet that speaks Pakistan&apos;s payment language. Play smart, use missions and rebates,
            and always install from the official download.
          </p>
          <DownloadButton size="lg" label="DOWNLOAD BN55 APK" />
          <p className="mt-6 text-sm text-gray-500">
            Need help?{' '}
            <Link href="/contact-us" className="text-accent hover:underline">
              Contact us
            </Link>{' '}
            or email support@bn55apk.net.pk
          </p>
        </div>
      </section>
    </>
  );
}
