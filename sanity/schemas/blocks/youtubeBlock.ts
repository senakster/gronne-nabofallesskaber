// youtube.js
export default {
    name: 'youtubeBlock',
    type: 'object',
    title: 'YouTube Embed',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'YouTube video title'
        },
        {
            name: 'id',
            type: 'string',
            title: 'YouTube video id'
        }
    ]
}