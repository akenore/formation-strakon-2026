import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://formation.strakon.fr'),
  title: "Formation STRAKON Gratuite 2026 - Coffrage & Armatures BIM",
  description: "Découvrez STRAKON en une journée. Formation 100% gratuite sur le coffrage et les armatures pour les bureaux d'études en France et au Luxembourg. Inscrivez-vous avec votre numéro de TVA.",
  keywords: ["STRAKON", "Formation STRAKON", "Formation BIM", "Coffrage", "Armatures", "BIM France", "BIM Luxembourg", "C2IT", "DICAD"],
  authors: [{ name: "C2IT", url: "https://c2it.lu" }],
  openGraph: {
    title: "Formation STRAKON Gratuite 2026 - Coffrage & Armatures BIM",
    description: "Une journée intensive pour maîtriser STRAKON. Réservé aux professionnels du BTP en France et au Luxembourg.",
    url: "https://formation.strakon.fr",
    siteName: "C2IT - Expertise STRAKON",
    images: [
      {
        url: "/static/logo-strakon.png",
        width: 1200,
        height: 630,
        alt: "STRAKON Formation",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation STRAKON Gratuite 2026 - Coffrage & Armatures BIM",
    description: "Inscrivez-vous à la prochaine session STRAKON gratuite.",
    images: ["/static/logo-strakon.png"],
  },
  icons: {
    icon: "/static/favicon.png",
    apple: "/static/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <GoogleTagManager gtmId="GTM-PS5VF8PH" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script
          id="brevo-conversations"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, w, c) {
                w.BrevoConversationsID = '62ac6353e5958733497876ae';
                w.BrevoConversationsSetup = {
                  customWidgetButton: '#brevo-chat-trigger'
                };
                w[c] = w[c] || function() {
                  (w[c].q = w[c].q || []).push(arguments);
                };
                var s = d.createElement('script');
                s.async = true;
                s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
                if (d.head) d.head.appendChild(s);
              })(document, window, 'BrevoConversations');
            `,
          }}
        />
      </body>
    </html>
  );
}
