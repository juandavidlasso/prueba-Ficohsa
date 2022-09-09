import axios from 'axios'

export const getAxiosItems = async (idType) => {

    try {
        const items = await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/items',
            params: {
                type: idType
            }
        })
        
        return {
            status: 200,
            data: (items.data)
        }
    } catch (error) {
        return error
    }
}


export const getAxiosItem = async (idItem) => {

    try {
        const item = await axios({
            method: 'GET',
            url: 'http://localhost:4000/api/item',
            params: {
                id: idItem
            }
        })
        
        return {
            status: 200,
            data: (item)
        }
    } catch (error) {
        return error
    }
}
