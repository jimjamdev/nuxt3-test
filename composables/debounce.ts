import { ref, watch, Ref } from 'vue'

export function useDebounce<T>(value: Ref<any>, delay = 300) {
    const debouncedValue = ref(value.value)

    watch(value, (val) => {
        const timeout = setTimeout(() => {
        debouncedValue.value = val
        }, delay)

        return () => clearTimeout(timeout)
    })

    return debouncedValue
}
