import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Maryan's Portfolio" />
        <meta property="og:description" content="Check out my personal portfolio showcasing my web development projects." />
        <meta property="og:image" content="https://yourwebsite.com/your-image.jpg" /> {/* Replace with your actual image URL */}
        <meta property="og:url" content="https://yourwebsite.com" /> {/* Replace with your actual website URL */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
