/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'meta',
    title: 'Meta',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titel',
            type: 'string',
        },
        {
            name: 'organization',
            title: 'Organisation',
            type: 'object',
            fields: [
                {
                    name: 'name',
                    title: 'Navn',
                    type: 'string',
                }
            ]
        },
        {
            name: 'portrait',
            title: 'Portræt',
            type: 'customImage'
        },
        {
            name: 'contact',
            title: 'Kontaktinformationer',
            type: 'contactInformation'
        }
    ]
}