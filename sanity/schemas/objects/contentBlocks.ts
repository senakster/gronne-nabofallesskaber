import blockTypes from '../blocks'

export default {
    name: 'contentBlocks',
    title: 'Indholdsblokke',
    // icon: AiOutlineBlock,
    type: 'array',
    of: blockTypes.map(b => ({ type: b.name })),
    preview: {
        // select: {
        //     contentBlocks: 'contentBlocks',
        // },
        prepare(selection: any) {
            // const { contentBlocks } = selection

            return {
                title: 'title',
                subtitle: 'Indholdsblokke',
                // media: AiOutlineBlock,
            }
        }
    }
}