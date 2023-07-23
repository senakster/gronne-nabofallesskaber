import { TPerson } from "@/types/Person"
import { Portrait } from "../Image"
import { urlForImage } from "@/sanity/lib/image"
import ContactInformation from "./ContactInformation"

const Person = (props: TPerson) => {
    const {name, contact, portrait} = props
    // console.log(portrait)
    return (
        <div className="__CARD-PERSON rounded-xl overflow-hidden flex flex-col transition-all w-60 h-[480px] relative shadow-md hover:shadow-lg">
            <Portrait {...portrait} />
            <div className="flex flex-col gap-2 p-2 h-full max-h-[50%] justify-between">
                <div>{name}</div>
                <ContactInformation {...contact} />
            </div>
        </div>
    )
}
// src = { portrait.asset.url } alt = { portrait.altText || '' }

export default Person