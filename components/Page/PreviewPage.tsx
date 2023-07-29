// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client"

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import Page from "@/components/Page";
import gPage from "@/sanity/lib/queries/groqSnippets/gPage";

export default function PreviewPage({
    page = [],
}: {
    page: SanityDocument[];
}) {
    const [data] = useLiveQuery(page, gPage);

    return <Page {...data} />;
}