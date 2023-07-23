
export default {
    name: 'frontpage',
    title: 'Forside',
    type: 'document',
    groups: [
        {
            name: 'seo',
            title: 'SEO',
        },
        {
            name: 'content',
            title: 'Indhold',
        },
    ],
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
            group: ['seo','content'],
        },
        {
            name: 'hero',
            title: 'Hero',
            type: 'hero',
            group: ['content'],
        },
        {
            name: 'contentBlocks',
            title: 'Indholdsblokke',
            type: 'contentBlocks',
            group: ['content'],
        },
        {
            name: 'seo',
            title: 'SEO',
            type: 'seo',
            group: 'seo'
        }
    ]
}