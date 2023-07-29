import { SanityImageObject } from "@sanity/image-url/lib/types/types"

export type TPortrait = SanityImageObject 
&
{
    assetMeta: {
        url?: string,
        blur: string
    },
    altText?: string,
    attribution?: string
}

export type TContact = {
    address: string, 
    postal: string, 
    city: string, 
    phone: string, 
    email: string,
}
export type TPerson = {
    name: string,
    contact: TContact
    portrait: TPortrait
}