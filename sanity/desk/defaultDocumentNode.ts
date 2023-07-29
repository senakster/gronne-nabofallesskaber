// ./nextjs-app/sanity/desk/defaultDocumentNode.ts

import { DefaultDocumentNodeResolver } from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import { SanityDocument } from 'next-sanity'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, { schemaType }) => {
    switch (schemaType) {
        case `page`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc: SanityDocument) => doc?.slug?.current
                            ? `http://localhost:3000/api/preview?slug=${doc.slug.current}`
                            : `http://localhost:3000/api/preview`,
                    })
                    // .options({
                    //     url: `http://localhost:3000/preview`,
                    // })
                    .title('Preview'),
            ])
        case `frontpage`:
            return S.document().views([
                S.view.form(),
                S.view
                    .component(Iframe)
                    .options({
                        url: (doc: SanityDocument) => doc?.slug?.current
                            ? `http://localhost:3000/api/preview?slug=${doc.slug.current}`
                            : `http://localhost:3000/api/preview`,
                    })
                    .title('Preview'),
            ])
        default:
            return S.document().views([S.view.form()])
    }
}