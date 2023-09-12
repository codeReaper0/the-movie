import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "MovieBox | by codeReaper",
  description: "Welcome to the world of movies",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
