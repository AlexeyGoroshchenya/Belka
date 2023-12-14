import React, { useContext, useEffect, useState } from 'react';
import styles from './Admin.module.css';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';

const AddDeviceForm = observer(() => {

    const { devices } = useContext(Context)

    const [newName, setNewName] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const [newFile, setNewFile] = useState({})

    useEffect(() => {
        fetchTypes().then((data) => {
            devices.setTypes(data);
            })

        fetchBrands().then((data) => {
            devices.setBrands(data);
           })


    }, [])

    const addDevice = () => {
        let formData = new FormData()
        formData.append('name', newName)
        formData.append('price', `${newPrice}`)
        formData.append('description', newDesc)
        formData.append('img', newFile)
        formData.append('typeId', devices.selectedType.id)
        formData.append('brandId', devices.selectedBrand.id)

console.log(Object.fromEntries(formData));

createDevice(formData).then((data)=>{
    console.log(data);
})



        
    }

    return (
        <>
            <div className={styles.row}>
                <input type="text"
                    placeholder='Добавить название'
                    value={newName}
                    onChange={(e) => {
                        setNewName(e.target.value)
                    }}
                />
                <input type="text"
                    placeholder='Добавить цену'
                    value={newPrice}
                    onChange={(e) => {
                        setNewPrice(e.target.value)
                    }}
                />

                <textarea type="text"
                    placeholder='Добавить описание'
                    value={newDesc}
                    onChange={(e) => {
                        setNewDesc(e.target.value)
                    }}
                />
                <input type="file"
                    placeholder='Добавить изображение'

                    onChange={(e) => {

                        setNewFile(e.target.files[0])
                    }}
                />
                <div className={styles.radios}>


                    {devices.types.map(type =>


                        <div key={type.id}


                            onClick={(e) => {
                                devices.setSelectedType(type)
                                console.log(devices.selectedType);

                            }}


                            className={devices.selectedType.id !== type.id ? styles.item : styles.item + ' ' + styles.active}
                        >{type.name}</div>
                    )}
                </div>

                <div className={styles.radios}>


                    {devices.brands.map(brand =>


                        <div key={brand.id}


                            onClick={(e) => {
                                devices.setSelectedBrand(brand)
                                

                            }}


                            className={devices.selectedBrand.id !== brand.id ? styles.item : styles.item + ' ' + styles.active}
                        >{brand.name}</div>
                    )}
                </div>





                <div className={styles.button + ' button'}
                    onClick={addDevice}
                >Добавить предмет</div>
            </div>
        </>
    );
})

export default AddDeviceForm;