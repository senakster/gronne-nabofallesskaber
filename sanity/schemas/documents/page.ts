import { Rule } from "sanity";

export default {
    name: 'page',
    title: 'Side',
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
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                //Change to schema title to automatically populate
                source: 'title',
                slugify: (input: string) =>
                    `${input
                        .toLowerCase()
                        //Remove spaces
                        .replace(/\s+/g, '-')
                        //Remove special characters
                        .replace(/[æ]/g, 'ae')

                        .replace(/[ø]/g, 'oe')

                        .replace(/[å]/g, 'aa')

                        .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '')}`,
            },
            validation: (Rule: Rule) => Rule.required(),
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