// ./nextjs-app/app/_components/PreviewProvider.tsx

"use client";

// import { previewClient } from "@/sanity/lib/client";
// import { LiveQueryProvider } from "@sanity/preview-kit";
// const client = previewClient

export default function PreviewProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
    {/* <LiveQueryProvider client={ client }> */}
        <a href="/api/exit-preview">
            <div className="fixed bottom-8 left-8 border border-blue-400 px-4 py-2 rounded bg-blue-400">PREVIEW</div>
        </a> 
        { children } 
    {/* </LiveQueryProvider> */}
        </>
    )
}