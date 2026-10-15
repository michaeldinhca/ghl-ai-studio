// src/components/seo.tsx
// Shared head() builder: same title, description and og:image as the approved drafts.

type Faq = ReadonlyArray<readonly [string, string]>;

const OG_IMAGE = "/og-image.jpg"; // REPLACE: upload the approved social image to public/og-image.jpg (see SETUP.md)

export function pageHead(title: string, description: string, opts: { faq?: Faq; noindex?: boolean } = {}) {
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:image", content: OG_IMAGE },
    { name: "twitter:card", content: "summary_large_image" },
  ];
  if (opts.noindex) meta.push({ name: "robots", content: "noindex" });
  const scripts = opts.faq
    ? [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: opts.faq.map(([q, a]) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        },
      ]
    : [];
  return { meta, scripts };
}
