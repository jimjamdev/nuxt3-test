
export interface IStore {
    games?: Array<{ id: number | string, name: string }>
}

export const useStore = () => useState<IStore>('store')
