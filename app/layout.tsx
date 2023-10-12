import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <title>Cryptopunks explorer</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
