import { oxygen, fraktur, raleway } from "../lib/fontutil";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oxygen.variable} ${fraktur.variable} ${raleway.variable} `}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
