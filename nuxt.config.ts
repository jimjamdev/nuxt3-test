import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    css: ['~/assets/styles/reset.scss',],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/styles/theme/index.scss";`,
                },
            }
        },
    },
    imports: {
        dirs: ['stores'],
    },
    modules: [
        '@nuxtjs/apollo',
        '@nuxt/image-edge',
        ['@pinia/nuxt', {
            autoImports: ['defineStore', ['defineStore', 'acceptHMRUpdate']],
        }],
    ],
    build: {
        transpile: [
            'graphql',
            '@pinia/nuxt'
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
                httpEndpoint: 'https://dh4bbs5t.directus.app/graphql' // should pass via .env
            }
        },
    },
})
