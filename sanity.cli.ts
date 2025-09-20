// sanity.cli.ts
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {projectId: '24hup4ux', dataset: 'production'},
  deployment: {autoUpdates: true},
  studioHost: 'paulneumann-portfolio' // must be globally unique, letters first
})