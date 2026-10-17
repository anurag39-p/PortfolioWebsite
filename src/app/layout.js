import "./globals.css";

export const metadata = {
  title: "Anurag Pawar | Software Engineer",
  description:
    "Portfolio of Anurag Pawar, a software engineer building scalable web applications and event-driven systems with React, Node.js, and microservices.",
};

// Runs before first paint: use the saved choice, otherwise follow the OS setting.
const themeInitScript = `try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}