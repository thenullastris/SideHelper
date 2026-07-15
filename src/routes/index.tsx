import { createFileRoute } from "@tanstack/react-router";
import { Download, Github, Smartphone, Package, Zap, Unlock, Users, Link2, Wrench, ArrowDown, Check } from "lucide-react";
import { useState } from "react";
import heroPhone from "@/assets/hero-phone.png";

export const Route = createFileRoute("/")({
  component: Index,
});

type Lang = "en" | "km";

const t = {
  en: {
    nav: [
      { label: "Features", href: "#features" },
      { label: "Download", href: "#download" },
      { label: "Updates", href: "#updates" },
      { label: "Guide", href: "#guide" },
    ],
    heroTitle: "SideInstaller",
    heroSub1: "Install SideStore & LiveContainer on iOS 27",
    heroSub2: "Without a PC",
    heroDesc:
      "SideInstaller lets you install SideStore and LiveContainer directly on your iPhone or iPad. Pairing, signing, and installation happen on-device — no Mac, Windows PC, or complicated desktop setup.",
    badgeMit: "MIT License",
    badgeJb: "No Jailbreak",
    ctaDownload: "Download",
    ctaInstall: "Install SideInstaller",
    ctaOpenSource: "Open Source",
    featuresLabel: "Key Features",
    featuresTitle: "Everything you need to sideload — on device.",
    features: [
      { title: "iOS 27 & iPadOS 27", desc: "Supports the latest iOS 27 and iPadOS 27 out of the box." },
      { title: "100% On-Device Setup", desc: "Install directly on your iPhone or iPad — nothing else required." },
      { title: "On-Device Pairing & Signing", desc: "Pair and sign without a PC or Mac. Everything runs locally." },
      { title: "Multiple Install Options", desc: "SideStore, SideStore + LiveContainer, or StikDebug." },
      { title: "Easy Installation", desc: "No desktop tools. No complicated setup. Just a few taps." },
      { title: "Open Source", desc: "MIT-licensed. Review the code, audit and contribute." },
    ],
    whyLabel: "Why SideInstaller",
    whyTitle: "Sideloading, without the desktop dance.",
    whyDesc:
      "SideInstaller brings SideStore and LiveContainer installation tools directly to your iPhone or iPad, making sideloading easier without extra hardware or complicated configuration.",
    why: [
      { title: "Easy Installation", desc: "Install SideStore and LiveContainer with just a few taps while the app handles core setup for you." },
      { title: "Certificate & Pairing", desc: "View and revoke certificates, manage App IDs, and handle pairing files directly on-device." },
      { title: "Download & Install IPAs", desc: "Grab the SideInstaller IPA on your iPhone or iPad and step into sideloading with a clean flow." },
      { title: "Multiple Apple IDs", desc: "Save and manage multiple Apple ID accounts for different devices and signing needs." },
      { title: "Community Driven", desc: "Review the code, contribute improvements, and validate behavior under the MIT license." },
      { title: "On-device Installation", desc: "Pairing, signing, and installation happen right on your iPhone or iPad — no PC or Mac needed." },
    ],
    downloadLabel: "Download",
    downloadTitle: "Download SideInstaller",
    downloadDesc:
      "Download the latest SideInstaller IPA for iPhone and iPad. Install SideInstaller directly on your iOS device and set up SideStore and LiveContainer without a PC or Mac.",
    downloadBullets: [
      "Install SideInstaller directly on your iPhone or iPad",
      "Set up SideStore and LiveContainer without a PC or Mac",
      "Use a compatible certificate or IPA installer when needed",
    ],
    ctaDownloadIpa: "Download IPA",
    ctaInstallCert: "Install via Certificate",
    updatesLabel: "What's New",
    updatesTitle: "Latest updates",
    updates: [
      "New and improved user interface",
      "Added StikDebug installation support",
      "Fixed Developer Error 8220",
      "Added update notifications",
      "Improved certificate management guidance",
      "Easier app selection with a dropdown menu",
    ],
    pairingTitle: "On-device pairing",
    pairingBullets: [
      "Generate pairing files directly on your iPhone or iPad",
      "Export pairing files for compatible workflows",
      "Use them with apps like StikDebug, Feather, and LiveContainer",
    ],
    pairingFoot:
      "Download the latest SideInstaller IPA and enjoy a simple way to install SideStore and LiveContainer directly on your iOS device.",
    guideLabel: "Guide",
    guideTitle: "How to use SideInstaller",
    guideDesc:
      "Setting up SideInstaller is simple and does not require a PC or Mac. Follow the steps to install SideStore and LiveContainer directly on your iPhone or iPad.",
    steps: [
      { title: "Install LocalDevVPN", desc: "Download and install LocalDevVPN, then connect to the VPN on your iPhone or iPad." },
      { title: "Install SideInstaller IPA", desc: "Open this page on your iOS device and install the SideInstaller IPA using an available certificate or a compatible IPA installer such as iLoader or Sideloadly." },
      { title: "Open SideInstaller", desc: "Launch SideInstaller from your Home Screen and start the setup process." },
      { title: "Sign In with Apple ID", desc: "Enter your Apple ID credentials when prompted. Your account is used locally for signing and installation." },
      { title: "Install SideStore or LiveContainer", desc: "Choose your preferred option: SideStore, or SideStore + LiveContainer. Pairing, signing and installation are handled automatically." },
      { title: "Complete Trust Settings", desc: "In Settings → Privacy & Security, tap your Apple ID under Developer App and tap Trust. Return to SideInstaller and complete pairing." },
    ],
    footerLicense: "MIT License",
    heroImgAlt: "SideInstaller app on iPhone showing the installation flow, Apple ID field, and install progress.",
  },
  km: {
    nav: [
      { label: "លក្ខណៈពិសេស", href: "#features" },
      { label: "ទាញយក", href: "#download" },
      { label: "បច្ចុប្បន្នភាព", href: "#updates" },
      { label: "មគ្គុទ្ទេសក៍", href: "#guide" },
    ],
    heroTitle: "SideInstaller",
    heroSub1: "ដំឡើង SideStore និង LiveContainer លើ iOS 27",
    heroSub2: "ដោយមិនត្រូវការកុំព្យូទ័រ",
    heroDesc:
      "SideInstaller អាចឲ្យអ្នកដំឡើង SideStore និង LiveContainer ដោយផ្ទាល់លើ iPhone ឬ iPad របស់អ្នក។ ការភ្ជាប់ ការចុះហត្ថលេខា និងការដំឡើងទាំងអស់ធ្វើនៅលើឧបករណ៍ដោយផ្ទាល់ — ដោយមិនត្រូវការ Mac, Windows PC ឬការរៀបចំស្មុគស្មាញឡើយ។",
    badgeMit: "អាជ្ញាបណ្ណ MIT",
    badgeJb: "មិនត្រូវការ Jailbreak",
    ctaDownload: "ទាញយក",
    ctaInstall: "ដំឡើង SideInstaller",
    ctaOpenSource: "កូដបើកចំហ",
    featuresLabel: "លក្ខណៈពិសេសសំខាន់",
    featuresTitle: "អ្វីៗគ្រប់យ៉ាងសម្រាប់ការ sideload — លើឧបករណ៍ផ្ទាល់។",
    features: [
      { title: "iOS 27 និង iPadOS 27", desc: "គាំទ្រ iOS 27 និង iPadOS 27 ចុងក្រោយភ្លាមៗ។" },
      { title: "រៀបចំ ១០០% លើឧបករណ៍", desc: "ដំឡើងផ្ទាល់លើ iPhone ឬ iPad — មិនត្រូវការអ្វីបន្ថែមទេ។" },
      { title: "ភ្ជាប់ និងចុះហត្ថលេខាលើឧបករណ៍", desc: "ភ្ជាប់ និងចុះហត្ថលេខាដោយមិនត្រូវការ PC ឬ Mac។ អ្វីៗដំណើរការក្នុងឧបករណ៍។" },
      { title: "ជម្រើសដំឡើងច្រើន", desc: "SideStore, SideStore + LiveContainer, ឬ StikDebug។" },
      { title: "ដំឡើងងាយស្រួល", desc: "គ្មានឧបករណ៍ desktop។ គ្មានការរៀបចំស្មុគស្មាញ។ គ្រាន់តែចុចពីរបីដង។" },
      { title: "កូដបើកចំហ", desc: "អាជ្ញាបណ្ណ MIT។ អ្នកអាចពិនិត្យកូដ ធ្វើសវនកម្ម និងចូលរួមចំណែក។" },
    ],
    whyLabel: "ហេតុអ្វី SideInstaller",
    whyTitle: "Sideloading ដោយមិនចាំបាច់ប្រើ desktop។",
    whyDesc:
      "SideInstaller នាំយកឧបករណ៍ដំឡើង SideStore និង LiveContainer ទៅដល់ iPhone ឬ iPad របស់អ្នកដោយផ្ទាល់ ធ្វើឲ្យការ sideload កាន់តែងាយស្រួល ដោយមិនត្រូវការ hardware បន្ថែម ឬការកំណត់រចនាសម្ព័ន្ធស្មុគស្មាញ។",
    why: [
      { title: "ដំឡើងងាយស្រួល", desc: "ដំឡើង SideStore និង LiveContainer ដោយចុចពីរបីដង ខណៈកម្មវិធីគ្រប់គ្រងការរៀបចំសំខាន់ជូនអ្នក។" },
      { title: "វិញ្ញាបនបត្រ និងការភ្ជាប់", desc: "មើល និងលុបវិញ្ញាបនបត្រ គ្រប់គ្រង App IDs និងគ្រប់គ្រងឯកសារភ្ជាប់ដោយផ្ទាល់លើឧបករណ៍។" },
      { title: "ទាញយក និងដំឡើង IPA", desc: "ទាញយក SideInstaller IPA លើ iPhone ឬ iPad របស់អ្នក ហើយចាប់ផ្តើម sideloading ដោយងាយស្រួល។" },
      { title: "Apple IDs ច្រើន", desc: "រក្សាទុក និងគ្រប់គ្រង Apple ID ច្រើនសម្រាប់ឧបករណ៍ផ្សេងៗ និងតម្រូវការចុះហត្ថលេខា។" },
      { title: "ជំរុញដោយសហគមន៍", desc: "ពិនិត្យកូដ រួមចំណែកកែលម្អ និងផ្ទៀងផ្ទាត់ដំណើរការក្រោមអាជ្ញាបណ្ណ MIT។" },
      { title: "ដំឡើងលើឧបករណ៍", desc: "ការភ្ជាប់ ចុះហត្ថលេខា និងដំឡើងកើតឡើងលើ iPhone ឬ iPad របស់អ្នកភ្លាមៗ — មិនត្រូវការ PC ឬ Mac។" },
    ],
    downloadLabel: "ទាញយក",
    downloadTitle: "ទាញយក SideInstaller",
    downloadDesc:
      "ទាញយក SideInstaller IPA ចុងក្រោយសម្រាប់ iPhone និង iPad។ ដំឡើង SideInstaller ដោយផ្ទាល់លើឧបករណ៍ iOS របស់អ្នក ហើយរៀបចំ SideStore និង LiveContainer ដោយមិនត្រូវការ PC ឬ Mac។",
    downloadBullets: [
      "ដំឡើង SideInstaller ដោយផ្ទាល់លើ iPhone ឬ iPad",
      "រៀបចំ SideStore និង LiveContainer ដោយមិនត្រូវការ PC ឬ Mac",
      "ប្រើវិញ្ញាបនបត្រសមស្រប ឬកម្មវិធីដំឡើង IPA ពេលចាំបាច់",
    ],
    ctaDownloadIpa: "ទាញយក IPA",
    ctaInstallCert: "ដំឡើងតាមរយៈវិញ្ញាបនបត្រ",
    updatesLabel: "អ្វីថ្មី",
    updatesTitle: "បច្ចុប្បន្នភាពចុងក្រោយ",
    updates: [
      "រូបរាងអ្នកប្រើប្រាស់ថ្មី និងប្រសើរឡើង",
      "បន្ថែមការគាំទ្រការដំឡើង StikDebug",
      "កែកំហុស Developer Error 8220",
      "បន្ថែមការជូនដំណឹងបច្ចុប្បន្នភាព",
    "ការណែនាំគ្រប់គ្រងវិញ្ញាបនបត្រកាន់តែប្រសើរ",
      "ជ្រើសរើសកម្មវិធីកាន់តែងាយស្រួលដោយ dropdown",
    ],
    pairingTitle: "ការភ្ជាប់លើឧបករណ៍",
    pairingBullets: [
      "បង្កើតឯកសារភ្ជាប់ដោយផ្ទាល់លើ iPhone ឬ iPad",
      "នាំចេញឯកសារភ្ជាប់សម្រាប់ workflow សមស្រប",
      "ប្រើជាមួយកម្មវិធីដូចជា StikDebug, Feather និង LiveContainer",
    ],
    pairingFoot:
      "ទាញយក SideInstaller IPA ចុងក្រោយ ហើយរីករាយនឹងវិធីងាយស្រួលដើម្បីដំឡើង SideStore និង LiveContainer ដោយផ្ទាល់លើឧបករណ៍ iOS របស់អ្នក។",
    guideLabel: "មគ្គុទ្ទេសក៍",
    guideTitle: "របៀបប្រើ SideInstaller",
    guideDesc:
      "ការរៀបចំ SideInstaller គឺងាយស្រួល ហើយមិនត្រូវការ PC ឬ Mac ឡើយ។ អនុវត្តតាមជំហានដើម្បីដំឡើង SideStore និង LiveContainer ដោយផ្ទាល់លើ iPhone ឬ iPad របស់អ្នក។",
    steps: [
      { title: "ដំឡើង LocalDevVPN", desc: "ទាញយក និងដំឡើង LocalDevVPN បន្ទាប់មកភ្ជាប់ VPN នៅលើ iPhone ឬ iPad របស់អ្នក។" },
      { title: "ដំឡើង SideInstaller IPA", desc: "បើកទំព័រនេះនៅលើឧបករណ៍ iOS របស់អ្នក ហើយដំឡើង SideInstaller IPA ដោយប្រើវិញ្ញាបនបត្រដែលមាន ឬកម្មវិធីដំឡើង IPA សមស្របដូចជា iLoader ឬ Sideloadly។" },
      { title: "បើក SideInstaller", desc: "បើក SideInstaller ពី Home Screen របស់អ្នក ហើយចាប់ផ្តើមដំណើរការរៀបចំ។" },
      { title: "ចូលដោយ Apple ID", desc: "បញ្ចូលព័ត៌មាន Apple ID នៅពេលមានការស្នើសុំ។ គណនីរបស់អ្នកត្រូវបានប្រើក្នុងឧបករណ៍សម្រាប់ការចុះហត្ថលេខា និងដំឡើង។" },
      { title: "ដំឡើង SideStore ឬ LiveContainer", desc: "ជ្រើសរើសជម្រើសដែលចូលចិត្ត: SideStore ឬ SideStore + LiveContainer។ ការភ្ជាប់ ចុះហត្ថលេខា និងដំឡើងធ្វើដោយស្វ័យប្រវត្តិ។" },
      { title: "បំពេញការកំណត់ Trust", desc: "ក្នុង Settings → Privacy & Security ចុច Apple ID របស់អ្នកក្រោម Developer App ហើយចុច Trust។ ត្រឡប់ទៅ SideInstaller ហើយបំពេញការភ្ជាប់។" },
    ],
    footerLicense: "អាជ្ញាបណ្ណ MIT",
    heroImgAlt: "កម្មវិធី SideInstaller លើ iPhone បង្ហាញដំណើរការដំឡើង វាល Apple ID និងវឌ្ឍនភាពដំឡើង។",
  },
} as const;

const iconsFeatures = [Check, Smartphone, Link2, Package, Zap, Unlock];
const iconsWhy = [Zap, Wrench, Download, Users, Unlock, Link2];

function Logo() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card">
      <ArrowDown className="h-4 w-4 text-primary" strokeWidth={2.5} />
    </div>
  );
}

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const c = t[lang];
  const isKm = lang === "km";
  return (
    <div
      className="min-h-screen bg-background text-foreground font-sans antialiased"
      style={isKm ? { fontFamily: "'Noto Sans Khmer', 'Inter', sans-serif" } : undefined}
      lang={lang}
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.5 0.15 260 / 0.25) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.5 0.15 260 / 0.25) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      {/* Language switcher */}
      <div className="relative z-50 mx-auto flex max-w-6xl justify-end px-4 pt-4 md:px-6">
        <div
          role="group"
          aria-label="Language"
          className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 p-1 backdrop-blur-xl"
        >
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLang("km")}
            aria-pressed={lang === "km"}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              lang === "km" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            ភាសាខ្មែរ
          </button>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-4 z-40 mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-border bg-card/70 px-4 py-2.5 backdrop-blur-xl md:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <Logo />
          <span className="font-display text-base font-semibold tracking-tight">SideInstaller</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          {c.nav.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="https://github.com/FrizzleM/SideInstaller"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-24 lg:pt-32">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div>
            <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              {c.heroTitle}
            </h1>
            <p className="mt-6 font-display text-2xl font-semibold leading-tight text-foreground/90 md:text-3xl">
              {c.heroSub1} <span className="text-muted-foreground">{c.heroSub2}</span>
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              {c.heroDesc}
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="rounded-full border border-border bg-secondary px-3 py-1.5">{c.badgeMit}</span>
              <span className="rounded-full border border-border bg-secondary px-3 py-1.5">{c.badgeJb}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-btn)" }}
              >
                <Download className="h-4 w-4" /> {c.ctaDownload}
              </a>
              <a
                href="https://frizzlem.github.io/SideInstaller/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
              >
                {c.ctaInstall}
              </a>
              <a
                href="https://github.com/FrizzleM/SideInstaller"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Github className="h-4 w-4" /> {c.ctaOpenSource}
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 blur-3xl"
              style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.62 0.22 260 / 0.35), transparent 60%)" }}
            />
            <img
              src={heroPhone}
              alt={c.heroImgAlt}
              width={912}
              height={1408}
              className="w-full max-w-sm drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">{c.featuresLabel}</p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              {c.featuresTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {c.features.map((f, i) => {
              const Icon = iconsFeatures[i];
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">{c.whyLabel}</p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              {c.whyTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {c.whyDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {c.why.map((w, i) => {
              const Icon = iconsWhy[i];
              return (
                <div key={w.title} className="flex gap-4 rounded-2xl border border-border bg-card/60 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Download */}
        <section id="download" className="mx-auto max-w-6xl px-6 py-20">
          <div
            className="relative overflow-hidden rounded-3xl border border-border p-10 md:p-14"
            style={{ background: "linear-gradient(135deg, oklch(0.1 0.03 260), oklch(0.08 0.015 260))" }}
          >
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "oklch(0.62 0.22 260 / 0.35)" }}
            />
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">{c.downloadLabel}</p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              {c.downloadTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {c.downloadDesc}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {c.downloadBullets.map((li) => (
                <li key={li} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/FrizzleM/SideInstaller/releases"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-btn)" }}
              >
                <Download className="h-4 w-4" /> {c.ctaDownloadIpa}
              </a>
              <a
                href="https://frizzlem.github.io/SideInstaller/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                {c.ctaInstallCert}
              </a>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section id="updates" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">{c.updatesLabel}</p>
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                {c.updatesTitle}
              </h2>
              <ul className="mt-6 space-y-3">
                {c.updates.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span className="text-foreground/90">{u}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card/60 p-8">
              <h3 className="font-display text-2xl font-semibold">{c.pairingTitle}</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {c.pairingBullets.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {p}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {c.pairingFoot}
              </p>
            </div>
          </div>
        </section>

        {/* Guide */}
        <section id="guide" className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">{c.guideLabel}</p>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              {c.guideTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {c.guideDesc}
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {c.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-border bg-card/60 p-6">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-sm font-bold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Footer */}
        <footer className="mx-auto mt-10 max-w-6xl px-6 pb-12">
          <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-display text-sm font-semibold">SideInstaller</span>
              <span className="text-xs text-muted-foreground">· {c.footerLicense}</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#features" className="hover:text-foreground">{c.nav[0].label}</a>
              <a href="#download" className="hover:text-foreground">{c.nav[1].label}</a>
              <a href="#guide" className="hover:text-foreground">{c.nav[3].label}</a>
              <a href="https://github.com/FrizzleM/SideInstaller" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
