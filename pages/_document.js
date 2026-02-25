import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mohammad Elfauri Portfolio" />
        <meta property="og:description" content="Check out my personal portfolio showcasing my web development projects." />
        <meta property="og:image" content="https://moelfaouriportfolio.vercel.app/images/portfolio.png" />
        <meta property="og:url" content="https://moelfaouriportfolio.vercel.app/" />
        <title>Mohammad Elfauri Portfolio</title>
        <meta name="description" content="Check out my personal portfolio showcasing my web development projects." />
        <link rel="icon" href="/images/favicon.png" type="image/png"/>
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