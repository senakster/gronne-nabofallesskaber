import { getFrontPage } from "@/sanity/lib/queries"
import Container from "@/components/Layout/Container"
import Page from "@/components/Page"
import Navigation from '@/components/Layout/Navigation'
import Footer from '@/components/Layout/Footer'
import { draftMode } from "next/headers"
import PreviewProvider from "@/components/PreviewProvider"
import PreviewPage from "@/components/Page/PreviewPage"
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
type PageProps = {
  params: {}
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // const id = params.id
  
  // // fetch data
  const preview = draftMode().isEnabled
  const {seo} = await getFrontPage(preview) || {}
  const {title, description, image} = seo
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      // url: '',
      siteName: 'Grønne Nabofællesskaber',
      // images: [image, ...previousImages],
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

async function Home({params, searchParams}: PageProps) {
  const preview = draftMode().isEnabled
  const pageData = await getFrontPage(preview)

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

export default Home