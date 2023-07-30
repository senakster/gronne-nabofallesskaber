"use client"

import { SanityDocument } from "next-sanity";
import ContentBlocks from "@/components/ContentBlocks";
import Hero from "@/components/Layout/Hero";
import Container from "@/components/Layout/Container";
import FanArt from "../FanArt";

const Page = (props: SanityDocument ) => {    
    const {title, hero, contentBlocks} = props
    return (
        <div className={`__PAGE`}>
            <Hero {...hero} />
            <Container>
            <FanArt />
            <h1 className={`text-4xl`}>{title}</h1>
            <ContentBlocks {...{contentBlocks}}/>
            {JSON.stringify(props)}
            </Container>
        </div>
    )
}

export default Page