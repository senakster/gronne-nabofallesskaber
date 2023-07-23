import { Rule } from "sanity";

export default {
    name: 'contactInformation',
    title: 'Kontaktinformationer',
    type: 'object',
    fields: [
        {
            name: 'address',
            title: 'Adresse',
            type: 'string',
        },
        {
            name: 'postal',
            title: 'Postnummer',
            type: 'string',
        },
        {
            name: 'city',
            title: 'By',
            type: 'string',
        },
        {
            name: 'phone',
            title: 'Telefon',
            type: 'string',
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            validation: (Rule: Rule) =>
                Rule.regex(
                    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    {
                        name: "email", // Error message is "Does not match email-pattern"
                        invert: false, // Boolean to allow any value that does NOT match pattern
                    }
                ),
        },
    ]
}