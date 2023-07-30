import { PortableTextProps } from "@portabletext/react"
import { SanityImageObject } from "@sanity/image-url/lib/types/types"
import HeroImage from "../Image/HeroImage"
import TextBlock from "../Blocks/TextBlock"
import PortableText from "../PortableText"


const Hero = (props: THero) => {
    // console.log('Hero: ', { props })
    const { image, textBlock } = props
    return (
        <div className={`__HERO w-full h-[50vh] relative`}>
            {image && 
                <HeroImage {...image} />
            }
            {textBlock && 
                <div className={`h-full w-full flex justify-center items-center`}>
                    <div className={`text-4xl text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]`}>
                        <PortableText value={textBlock}/>
                    </div>
                </div> }
        </div>
    )
}
export default Hero

/**
 * type definitions
 */
export type TImage = SanityImageObject
    &
{
    assetMeta: {
        url?: string,
        blur: string
    },
    altText?: string,
    attribution?: string
}

export type THero = {
    image: TImage,
    textBlock: { portableText?: PortableTextProps<any> }
}
