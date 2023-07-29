import { groq } from "next-sanity";

const gPage = groq`*[_type == "page"]: {
    ...
},`

export default gPage