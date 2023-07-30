import { SanityDocument, groq } from "next-sanity";
import gPage, {gImage} from "./groqSnippets/gPage";
import { client, previewClient } from "../client";
import { TPerson } from "@/types/Person";


export const getPage = async ({slug, preview}: {preview?: boolean, slug: string}): Promise<SanityDocument> => {
    const query = groq`*[_type == 'page' && slug.current == $slug][0]{
        title,
        seo,
        hero,
        contentBlocks,
    }`
    const queryParams = {slug}
    return preview ? await previewClient.fetch(query, queryParams) : await client.fetch(query, queryParams)
}

export const getFrontPage = async (preview?: boolean): Promise<SanityDocument> => {
    const query = groq`*[_type == 'frontpage'][0]{
        ...,
        hero{
            ...,
            ${gImage}
        }
    }`
    return preview ? await previewClient.fetch(query) : await client.fetch(query)
}


export default getPage