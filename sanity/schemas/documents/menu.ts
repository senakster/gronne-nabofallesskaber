/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
        },
        {
            name: 'mainMenu',
            title: 'Hovedmenu',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'page'
                        },
                        {
                            type: 'frontpage'
                        }
                    ]
                }
            ]
        },
        {
            name: 'footerMenu',
            title: 'Footermenu',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'page'
                        },
                        {
                            type: 'frontpage'
                        }
                    ]
                }
            ]
        }
    ]
}