import { groq } from "next-sanity";

const gPortrait = groq`"portrait": {
        ...portrait, 
        "assetMeta": {...portrait.asset, 
            ...portrait.asset->{
            "blur": metadata.lqip
            }
        }
},`


export default gPortrait