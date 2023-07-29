import { SanityDocument, groq } from "next-sanity";
import gPage from "./groqSnippets/gPage";
import { client, previewClient } from "../client";
import { TPerson } from "@/types/Person";


export const getPage = async (preview?: boolean): Promise<SanityDocument[]> => {
    const query = groq`*[_type == 'page']{
        ...
    }`
    return preview ? await previewClient.fetch(query)  : await client.fetch(query)
}

export const getFrontPage = async (preview?: boolean): Promise<SanityDocument> => {
    const query =groq`*[_type == 'frontpage'][0]{
        ...
    }`
    return preview ? await previewClient.fetch(query) : await client.fetch(query)
}


export default getPage