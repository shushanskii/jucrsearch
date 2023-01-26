import { CodegenConfig } from '@graphql-codegen/cli'


const config: CodegenConfig = {
  schema: {
    'https://api.github.com/graphql': {
      headers: {
        authorization: `Bearer ${process.env.GH_TOKEN}`,
      }
    }
  },
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: false,
}


export default config