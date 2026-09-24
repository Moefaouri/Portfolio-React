import { Html, Head, Main, NextScript } from "next/document";

const primarySiteUrl = "https://moelfaouriportfolio.vercel.app";
const mirrorSiteUrl = "https://mohammad-elfauri-portfolio.moework190.chatgpt.site";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.SITE_STATIC_EXPORT === "true" ? mirrorSiteUrl : primarySiteUrl);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const title = "Mohammad Elfauri | Front-End Developer & UI/UX Designer";
const description =
  "Front-End Developer and UI/UX Designer building production web and mobile experiences with React and Next.js.";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mohammad Elfauri Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/portfolio.png`} />
        <meta property="og:image:alt" content="Mohammad Elfauri portfolio preview" />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/portfolio.png`} />
        <meta name="theme-color" content="#7c5cfc" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
      </Head>
      <body className="antialiased">
        {/* Prevent dark mode flash on page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
