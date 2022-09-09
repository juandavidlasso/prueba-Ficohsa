const axios = require('axios')

const getItems = async (req, res) => {

    const {type} = req.query

    if (isNaN(type)) {
        return res.status(404).json({ message: 'Not Data Found'})
    }

    try {
        const items = await axios({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/type/${type}`,
        })
        
        return res.status(200).json(items.data.pokemon)
    } catch (error) {
        return res.status(400).json({ error: error.message})
    }
}

const getItem = async (req, res) => {

    const {id} = req.query
    
    if (isNaN(id)) {
        return res.status(404).json({ message: 'Not Data Found'})
    }

    try {
        const item = await axios({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${id}`,
        })
        
        return res.status(200).json(item.data)
    } catch (error) {
        return res.status(400).json({ error: error.message})
    }
}

module.exports = {
    getItems,
    getItem
}
