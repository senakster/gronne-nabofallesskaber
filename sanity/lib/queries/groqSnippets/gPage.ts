import { groq } from "next-sanity";


export const gImage = groq`"image": {
        ...image, 
        "assetMeta": {...image.asset, 
            ...image.asset->{
            "blur": metadata.lqip
            }
        }
},`
const gPage = groq`*[_type == "page"]: {
    ...,
    hero: {
        ${gImage},
        textBlock
    }
},`

export default gPage