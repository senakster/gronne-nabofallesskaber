"use client"

import { SanityDocument } from "next-sanity";
import ContentBlocks from "@/components/ContentBlocks";

const Page = (props: SanityDocument ) => {    
    const {contentBlocks} = props
    console.log({props})
    return (
        <div className={`__PAGE`}>
            <ContentBlocks {...{contentBlocks}}/>
        </div>
    )
}

export default Page