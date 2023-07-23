import { groq } from "next-sanity";

const GPortrait = groq`"portrait": {
        ...portrait, 
        "assetMeta": {...portrait.asset, 
            ...portrait.asset->{
            "blur": metadata.lqip
            }
        }
},`

export default GPortrait