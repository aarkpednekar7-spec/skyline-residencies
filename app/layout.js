import "./globals.css";

export const metadata = {
  title: "Skyline Residencies — Premium Living",
  description: "Premium 2/3 BHK apartments with world-class amenities and prime connectivity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
