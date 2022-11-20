export const useGameStore = defineStore('GameStore', {
    state: () => {
        return {
            gamesList: [],
        };
    },
    getters: {},
    actions: {},
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot));
}
