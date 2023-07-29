export default {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'SEO-title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'SEO-description',
            type: 'text',
        },
        {
            name: 'image',
            title: 'Open Graph Image',
            type: 'image',
        }
    ]
}