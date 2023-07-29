import { createClient } from 'next-sanity'
import { cache } from "react"
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const previewClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
}).withConfig({
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
  perspective: 'previewDrafts',
})

// Add react cache import

// other imports and createClient

// Add cachedClient export
export const cachedClient = cache(client.fetch.bind(client))
export const cachedPreviewClient = cache(previewClient.fetch.bind(previewClient))