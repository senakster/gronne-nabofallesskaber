/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {ResolveProductionUrlContext, defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { groq } from 'next-sanity'
import { previewClient } from './sanity/lib/client'
import { defaultDocumentNode } from './sanity/desk/defaultDocumentNode'

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["frontpage", "meta"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    ...schema,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  plugins: [
    deskTool({ defaultDocumentNode }),

    // deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
    // productionUrl: async (prev, context) => {
    //   // context includes the client an other details
    //   const { dataset, document }: ResolveProductionUrlContext  = context
    //   const client = previewClient
    //   const basePath = process.env.NEXT_PUBLIC_ENV === 'development' ? 'http://localhost:3000' : 'https://gronne-nabofallesskaber.vercel.app'

    //   if (['page', 'frontpage'].includes(document._type)) {
    //     const slugPath: {[key: string]: string} = {
    //       page: 'page/'
    //     }
    //     // you can now use async/await 🎉
    //     const slug = await client.fetch(
    //       groq`*[_type == 'routeInfo' && post._ref == $documentId][0].slug.current`,
    //       { documentId: document._id }
    //     )

    //     const params = new URLSearchParams()
    //     params.set('preview', 'true')
    //     params.set('dataset', dataset)
        
    //     return `${basePath}/${slugPath[document._type] || ''}${slug || ''}?${params}`
    //   }

    //   return prev
    // },
  },
})

