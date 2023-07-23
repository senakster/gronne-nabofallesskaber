import { groq } from "next-sanity";
import gPortrait from "./groqSnippets/gPortrait";
import { client } from "../client";
import { TPerson } from "@/types/Person";


const getPerson= async (): Promise<TPerson[]> => {
    return await client.fetch(groq`*[_type == 'person']{
    name,
    contact,
    ${gPortrait}
}`)
}

// const getPerson = async (): Promise<TPerson[]> => {
//     return await client.fetch(groq`*[_type == 'person']{
//     name,
//     contact,
//     portrait,
//     "blur": portrait.asset->{metadata.lqip}
//     }`)
// }
export default getPerson