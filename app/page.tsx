import { getFrontPage } from "@/sanity/lib/queries"
import Container from "@/components/Layout/Container"
import Page from "@/components/Page"
import Navigation from '@/components/Layout/Navigation'
import Footer from '@/components/Layout/Footer'
import { draftMode } from "next/headers"
import PreviewProvider from "@/components/PreviewProvider"
import PreviewPage from "@/components/Page/PreviewPage"
// import gPage from "@/sanity/lib/queries/groqSnippets/gPage"
// import { client } from "@/sanity/lib/client"

async function Home() {
  const preview = draftMode().isEnabled
  const pageData = await getFrontPage(preview)

  if (preview) {
    return (
      <PreviewProvider>
        <Container>
          <Navigation />
          <main className="__MAIN">
            <PreviewPage page={...pageData} />
          </main>
          <Footer />
        </Container>
      </PreviewProvider>
    );
  }
  return (
    <Container>
      <Navigation />
      <main className="__MAIN">
        <Page {...pageData} />
      </main>
      <Footer />
    </Container>
  )
}

export default Home