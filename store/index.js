export const state = () => ({
    nombre: 'darwin',
    datos: []
})
export const mutations = {
    setDatos(state, data) {
        console.log(state.datos = data)
    }
}

export const actions = {

    /*     obtener({ commit }) {
            const obetener = async () => {
                try {
                    const result = await fetch(
                        'https://jsonplaceholder.typicode.com/posts?_limit=10'
                    )
                    const data = await result.json()
                    commit('setDatos', data)
    
                } catch (err) {
                    console.log(err)
                }
            }
            obetener()
        } */
    obtener({ commit }) {
        const obetener = async () => {
            try {
                const result = await fetch(
                    'https://jsonplaceholder.typicode.com/posts?_limit=3'
                )
                const data = await result.json()
                commit('setDatos', data)

            } catch (err) {
                console.log(err)
            }
        }
        obetener()
    }
}