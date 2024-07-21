import clsx from "clsx";
// Components
import Provider from "@/components/Provider";
import Sidebar from "@/components/Sidebar";
// Styles
import "@/stylesheets/globals.css";
import "@/stylesheets/fonts.css";

export const metadata = {
  title: "TalentAssisto | Your Smart Right Hand",
  description:
    "TalentAssisto makes it easy to create generative AI-powered HR agents optimized for HR tasks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-magnolia font-montserrat h-full flex flex-col justify-start lg:justify-center items-center">
        <main className="font-normal relative w-full max-w-lg lg:max-w-[940px]">
          <div className="lg:bg-white w-full flex flex-col lg:flex-row px-4 lg:p-4 rounded-2xl lg:shadow-lg">
            <Sidebar />
            <Provider>{children}</Provider>
          </div>
          <footer
            className={clsx(
              "absolute -bottom-16 lg:-bottom-12",
              "py-4 px-4",
              "text-xs lg:text-sm text-cool-gray",
              "flex flex-col gap-x-1 lg:flex-row justify-center w-full items-center"
            )}
          >
            <span>
              Copyright &copy; 2024 by{" "}
              <a
                href="https://www.talentassisto.com"
                target="_blank"
                className="text-marine-blue"
              >
                TalentAssisto
              </a>
              .
            </span>
            <span>All Rights Reserved.</span>
          </footer>
        </main>
      </body>
    </html>
  );
}
