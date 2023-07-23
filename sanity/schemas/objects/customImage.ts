export default {
    name: 'customImage',
    title: 'billede',
    type: 'image',
    options: {
        hotspot: true // <-- Defaults to false
    },
    fields: [
        {
            name: 'altText',
            type: 'string',
            title: 'Alt-tekst',
        },
        {
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
        }
    ]
}