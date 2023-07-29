"use client"

import { SanityDocument } from "next-sanity";
import ContentBlocks from "@/components/ContentBlocks";


const Page = (props: SanityDocument ) => {    
    const {title, hero, contentBlocks, seo} = props
    // console.log({props})
    return (
        <div className={`__PAGE`}>
            <h1 className={`text-4xl`}>{title}</h1>
            <ContentBlocks {...{contentBlocks}}/>
        </div>
    )
}

export default Page