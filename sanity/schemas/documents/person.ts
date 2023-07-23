export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Navn',
            type: 'string',
        },
        {
            name: 'portrait',
            title: 'Portræt',
            type: 'customImage'
        },
        {
            name: 'contact',
            title: 'Kontakt',
            type: 'contactInformation'
        }
    ]
}