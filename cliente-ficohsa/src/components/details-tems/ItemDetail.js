import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import useTitle from '../../utils/seo/useSEO'
import { getAxiosItem } from '../../config/querys'
import Modal from '../../utils/component/Modal'

const ItemDetail = () => {

    const params = useParams()
    useTitle({ title: 'Details' })
    const idItem = Number(params.id)

    const [dataItem, setDataItem] = useState({})
    const [messageError, setMessageError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getItem = async () => {
        setIsLoading(true)
        return await getAxiosItem(idItem)
    }

    useEffect(() => {
        getItem()
        .then((response) => {
            setIsLoading(false)

            if (response.status) {
                setDataItem({
                    name: response.data.data.species.name,
                    url:  response.data.data.species.url,
                    weight: response.data.data.weight,
                })
                return
            }

            setMessageError(response.response.data.message)
        })
        .catch((error) => {
            setIsLoading(false)
            setMessageError(error.message)
            return
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setDataItem])

    return (
        <div className="grid grid-cols-1 p-3 gap-y-2 mt-1">

            {isLoading && <Modal />}

            {!messageError ?
                (
                    <>
                        <div className='p-2 flex justify-center'>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src="https://aaymca.com/wp-content/uploads/2022/01/Banco-Ficohsa-1280x720-1-1024x576.gif" alt="Mountain" />
                                <div className="px-2 py-4">
                                    <div className="font-bold text-xl mb-2 capitalize">{dataItem.name}</div>
                                    <p className="text-gray-700 text-base">
                                        <span className='font-bold'>Id: </span>{idItem}
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        <span className='font-bold'>Url: </span>{dataItem.url}
                                    </p>
                                    <p className="text-gray-700 text-base">
                                        <span className='font-bold'>Weigth: </span>{dataItem.weight}
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2 text-center">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#develop</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ficohsa</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#frontend</span>
                                </div>
                            </div>
                        </div>


                        <div className='p-2 text-center'>
                            <Link to='/' className='p-3 text-2xl bg-red-900 text-white rounded-lg w-40 hover:bg-red-700'>Regresar</Link>
                        </div>
                    </>
                )
            :
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
            }
            

        </div>
    );
}
 
export default ItemDetail;