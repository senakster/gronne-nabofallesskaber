import React, { PropsWithChildren } from 'react';
import { Rule } from 'sanity';

const internalReferenceRender = (props: PropsWithChildren ) => (
    <span style= {{ textDecoration: 'underline' }}> { props.children } </span>
);

const portableText = {
    title: 'Tekstblok',
    name: 'portableText',
    type: 'array',
    // icon: (doc) => {console.log(doc); return HiLink },
    of: [
        {
            title: 'Block',
            type: 'block',
            // Styles let you set what your user can mark up blocks with. These
            // correspond with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Smaller', value: 'smaller' },
                { title: 'Label', value: 'label' },
                { title: 'h2', value: 'h2' },
                { title: 'h3', value: 'h3' },
                { title: 'h4', value: 'h4' },
                { title: 'h5', value: 'h5' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            // Marks let you mark up inline text in the block editor.
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        title: 'Link',
                        name: 'externalLink',
                        type: 'object',
                        // icon: HiOutlineExternalLink,
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                                validation: (Rule: Rule) =>
                                    Rule.uri({
                                        scheme: ['http', 'https', 'mailto', 'tel'],
                                        allowRelative: true,
                                    }),
                            },
                            {
                                title: 'Åbn i en ny fane',
                                name: 'blank',
                                type: 'boolean',
                            },
                        ],
                    },
                    {
                        title: 'Internal link',
                        name: 'internalLink',
                        type: 'object',
                        component: internalReferenceRender,
                        fields: [
                            {
                                name: 'reference',
                                type: 'reference',
                                to: [
                                    { type: 'page' },
                                ],
                                options: {
                                    filter: `_type == 'page'`
                                }
                            },
                        ],
                    },
                ],
            },
        },
    ],
};

export default portableText