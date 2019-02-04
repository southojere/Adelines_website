
import { store } from 'react-easy-state'
const filterStore = store({
    filter: 'print',
    changeFilter(newFilter) {
        filterStore.filter = newFilter
    }
})

export default filterStore