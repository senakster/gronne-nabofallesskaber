"use client"

import { SanityDocument } from "next-sanity";

const Page = (props: SanityDocument[]  ) => {    
    // const {children} = props
    return (
        <div className={`__PAGE`}>
            {JSON.stringify(props)}
        </div>
    )
}

export default Page