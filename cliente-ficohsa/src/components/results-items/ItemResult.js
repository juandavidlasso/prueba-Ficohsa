import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import useTitle from '../../utils/seo/useSEO'
import { getAxiosItems } from '../../config/querys'
import Modal from '../../utils/component/Modal'

const ItemResult = () => {
    
    const params = useParams()
    useTitle({ title: 'Results' })
    const type = Number(params.id)

    const [itemResults, setItemResults] = useState([])
    const [messageError, setMessageError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getItems = async () => {
        setIsLoading(true)
        return await getAxiosItems(type)
    }

    useEffect(() => {
        getItems()
        .then((response) => {
            setIsLoading(false)

            if (response.status) {
                setItemResults(response.data.slice(0,4))
                return
            }

            setItemResults([0])
            setMessageError('No Data Found')

        })
        .catch((error) => {
            setIsLoading(false)
            setItemResults([0])
            setMessageError(error.message)
            return
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setItemResults])

    return (
        <div className="grid grid-cols-1 p-3 gap-y-2 mt-1">

            {isLoading && <Modal />}

            {itemResults.length === 1 ?
                (
                    <div className='p-3'>
                        <div className="w-4/5 p-3 mx-16 space-y-4 bg-white rounded-lg flex content-start boxGrid">
                            <div className='w-full inline-block p-3'>
                                <div className='w-full p-3'>
                                    <h1 className='text-3xl font-bold text-blue-900 uppercase text-center'>{messageError}</h1>
                                </div>
                                <div className='w-full p-5 text-center'>
                                    <Link to='/' className='p-3 text-lg bg-red-900 text-white rounded-lg w-40 hover:bg-red-700'>Regresar</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            :
                (
                    <>
                        <div className='p-2 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-1 lg:gap-2'>
                            <div className='p-2 flex justify-center col-span-1'>
                                <Link to='/' className='p-3 text-lg bg-blue-900 text-white rounded-lg hover:bg-blue-700'>Regresar</Link>
                            </div>
                            <div className='p-2 flex col-span-4'>
                                <h1 className='text-5xl font-bold text-center text-blue-800' style={{ marginLeft: '25%'}}>Resultados</h1>
                            </div>
                        </div>

                        <div className='p-3'>
                            {itemResults.map( (item, key) => {
                                const {pokemon: {name, url}, slot} = item
                                const idItem = Number(url.split('/')[6])
                                
                                return (
                                    <div key={key} className="w-4/5 p-3 mx-16 space-y-4 bg-white rounded-lg flex content-start boxGrid">

                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-1 w-full'>
                                            <div className="p-4 rounded-md">
                                                <h1 className='text-3xl font-bold text-blue-900 uppercase'>{name}</h1>
                                                <p><span className='font-bold'>Url: </span>{url} </p>
                                                <p><span className='font-bold'>Slot: </span>{slot}</p>
                                            </div>
                                            <div className="p-4 rounded-md flex items-center justify-center">
                                                <Link to={`/items/${idItem}`} state={{idType: type}} className='p-5 text-2xl bg-red-900 text-white text-center rounded-lg w-48 hover:bg-red-700'>Ver</Link>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </>
                )
            }

        </div>
    );
}
 
export default ItemResult;