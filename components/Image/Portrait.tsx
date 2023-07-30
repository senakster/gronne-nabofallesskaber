import Image from "next/image"
import { TPortrait } from "@/types/Person"
import {urlFor} from "@/helpers"

const Portrait = (props: TPortrait) => {
    const { asset, assetMeta, crop, altText, hotspot, attribution, } = props
    const imgUrl = urlFor(props).url()
    return (
        <div className={`__Portrait w-full h-[50%] relative`}>
            <Image 
            style={{ objectPosition: `${(hotspot?.x || 0.5) * 100}% ${(hotspot?.y || 0.5) * 100}%`}}
            src={imgUrl}
            blurDataURL={assetMeta.blur}
            fill={true}
            placeholder="blur"
            sizes="(max-width: 160px) 100vw, 800px"
            className={`object-cover`}
            alt={altText || ''}
            />
            <div className="__ATTRIBUTION absolute bottom-0 right-0 opacity-20 hover:opacity-100 text-xs">{attribution}</div>
        </div>
    )
}

export default Portrait