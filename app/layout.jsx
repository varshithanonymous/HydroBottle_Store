export const metadata = {
  title: "Water Bottle Store",
  description: "Premium water bottles with unique branding and sustainability.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}