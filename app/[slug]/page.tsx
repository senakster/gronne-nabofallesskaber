import { getPage } from "@/sanity/lib/queries"
import Container from "@/components/Layout/Container"
import Page from "@/components/Page"
import Navigation from '@/components/Layout/Navigation'
import Footer from '@/components/Layout/Footer'
import { draftMode } from "next/headers"
import PreviewProvider from "@/components/PreviewProvider"
import PreviewPage from "@/components/Page/PreviewPage"
import { Metadata, ResolvingMetadata } from "next/types"
import { metadata } from "@/app/layout"

type PageProps = {
    params: { slug: string }
    searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    props: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    // const id = params.id

    // // fetch data
    const slug = props.params.slug
    const preview = draftMode().isEnabled
    const { seo } = await getPage({slug, preview}) || {}
    const { title, description, image } = seo || metadata
    // const product = await fetch(`https://.../${id}`).then((res) => res.json())

    // // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            // url: '',
            siteName: 'Grønne Nabofællesskaber',
            images: image && [image, ...previousImages] || [...previousImages],
            // //           {
            // // url: 'https://nextjs.org/og.png',
            // //   width: 800,
            // //     height: 600,
            // //     },
            locale: 'da_DK',
            type: 'website',
        },
    }
}

async function PageRoute({ params, searchParams }: PageProps) {
    const preview = draftMode().isEnabled
    const pageData = await getPage({slug: params.slug, preview})
    if (preview) {
        return (
            <PreviewProvider>
                <Navigation />
                    <main className="__MAIN">
                        <PreviewPage page={pageData} />
                        {/* <Page {...pageData} /> */}
                    </main>
                <Footer />
            </PreviewProvider>
        );
    }
    return (
        <>
            <Navigation />
                <main className="__MAIN">
                    <Page {...pageData} />
                </main>
            <Footer />
        </>
    )
}

export default PageRoute