export default {
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Baggrundsbillede',
            type: 'customImage'
        },
        {
            name: 'textBlock',
            title: 'Hero-tekst',
            type: 'portableText'
        }
    ]
}