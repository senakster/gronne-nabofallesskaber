import { useNextSanityImage } from 'next-sanity-image';
import { client }  from '@/sanity/lib/client'
import { TPortrait } from '@/types/Person';
import { SanityAsset, SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url'
import { SanityReference } from 'next-sanity';

export const getSanityImgProps = (image: SanityImageSource) => {
    return useNextSanityImage(client, image);
}

const builder = imageUrlBuilder(client)

export function urlFor(image: SanityImageSource) {
    return builder.image(image)
}

// export default getSanityImgProps