import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    modules: ['@nuxtjs/apollo'],
    build: {
        transpile: [
            'graphql',
        ],
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1.0',
            title: 'Awesome Casino',
            meta: [
                { name: 'description', content: 'Default Casino description - not recommended for prod, should change per page' }
            ],
        }
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://dh4bbs5t.directus.app/graphql'
            }
        },
    },
})
