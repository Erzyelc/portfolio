// import {visionTool} from '@sanity/vision'
// import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'

// import {apiVersion, dataset, projectId} from './sanity/env'
// import {schema} from './sanity/schema'

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   schema,
//   plugins: [
//     deskTool(),
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
// import {googleMapsInput} from '@sanity/google-maps-input'
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'sanity-portfolio',
  title: 'Sanity Portfolio',
  projectId: '7x0fjveb',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
