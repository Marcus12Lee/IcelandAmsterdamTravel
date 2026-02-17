"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { useLocale } from "@/context/LocaleContext";
import { tripSummaryMarkdown } from "@/data/tripSummaryContent";

export default function TripSummaryPage() {
  const { t } = useLocale();

  return (
    <main className="trip-summary-page mx-auto max-w-2xl bg-white px-8 py-8 text-left text-black print:px-12 print:py-8">
      <div className="mb-8 flex items-center justify-between print:hidden">
        <Link href="/" className="text-sm text-blue-600 underline hover:text-blue-800">
          ← {t("backToDashboard")}
        </Link>
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          {t("printOrSavePdf")}
        </button>
      </div>

      <article className="markdown-body text-left">
        <section
          className={`trip-summary-section prose prose-sm max-w-none text-left prose-headings:font-bold prose-headings:text-left prose-h1:text-xl prose-h1:mb-4 prose-h2:text-base prose-h2:mt-6 prose-h2:mb-2 prose-h3:text-sm prose-h3:mt-4 prose-h3:mb-2 prose-ul:my-2 prose-ul:pl-6 prose-li:my-0.5 prose-li:text-left prose-p:text-left prose-hr:my-8 prose-em:text-left`}
        >
          <ReactMarkdown>{tripSummaryMarkdown}</ReactMarkdown>
        </section>
      </article>
    </main>
  );
}
