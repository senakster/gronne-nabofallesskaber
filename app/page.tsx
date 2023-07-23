import { client } from "@/sanity/lib/client"
import {getPerson} from "@/sanity/lib/queries"
import {Person} from "@/components/Card"

async function Home() {
  const pageData = await getPerson()
  // console.log(pageData)
  return (
    <main className="__MAIN">
      Grønne Nabofællesskaber
      {pageData.map(p => 
        <Person key={p.name} {...p}/>
        )}
      
    </main>
  )
}

export default Home