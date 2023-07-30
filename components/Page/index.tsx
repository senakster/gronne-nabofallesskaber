"use client"

import { SanityDocument } from "next-sanity";
import ContentBlocks from "@/components/ContentBlocks";
import Hero from "@/components/Layout/Hero";
import Container from "@/components/Layout/Container";

const Page = (props: SanityDocument ) => {    
    const {title, hero, contentBlocks} = props
    console.log({props})
    return (
        <div className={`__PAGE`}>
            <Hero {...hero} />
            <Container>
            <h1 className={`text-4xl`}>{title}</h1>
            <ContentBlocks {...{contentBlocks}}/>
            </Container>
        </div>
    )
}

export default Page