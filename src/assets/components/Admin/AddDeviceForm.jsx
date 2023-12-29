import React, { useContext, useEffect, useState } from 'react';
import styles from './Admin.module.css';
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceApi';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';

const AddDeviceForm = observer(({children}) => {

    const { devices } = useContext(Context)

    const [newName, setNewName] = useState('')
    const [newPrice, setNewPrice] = useState('')
    const [newDesc, setNewDesc] = useState('')
    const [newFile, setNewFile] = useState([])
    const [textareaLimit, setTextareaLimit] = useState(0)
    const [hidden, setHidden] = useState(true)

    useEffect(() => {
        fetchTypes().then((data) => {
            devices.setTypes(data);
        })

        fetchBrands().then((data) => {
            devices.setBrands(data);
        })


    }, [])

    const addDevice = () => {
        console.log(newFile);

        if(!newName) return console.log('Укажите название');

        if(!newPrice) return console.log('Укажите цену');
   
        if(!newDesc) return console.log('Укажите описание');

        if(!newFile?.length) return console.log('Добавьте изображение');

        if(!devices.selectedType.id) return console.log('Укажите тип');
 
        if(!devices.selectedBrand.id) return console.log('Укажите бренд');


        let formData = new FormData()
        formData.append('name', newName)
        formData.append('price', `${newPrice}`)
        formData.append('description', newDesc)
        
        formData.append('typeId', devices.selectedType.id)
        formData.append('brandId', devices.selectedBrand.id)

        let imagesKeys = []
        newFile.forEach((file, ind)=> {
            formData.append(`img_${ind}`, file)
            imagesKeys.push(`img_${ind}`)
        })

        formData.append('imagesKeys', JSON.stringify(imagesKeys))

        console.log(Object.fromEntries(formData));

        createDevice(formData).then((data) => {
            console.log(data);
        })




    }

    return (
        <>
        <div className={styles.titleRow}>
                <div className="admin__title">{children}</div>
                <div className={styles.unHide}
                    onClick={() => { setHidden(prev=> setHidden(!prev)) }}>+</div>
            </div>
            <div className={hidden ? styles.hidden : styles.row}>
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
                    maxLength="1000"
                    placeholder='Добавить описание'
                    value={newDesc}
                    onChange={(e) => {
                        setNewDesc(e.target.value)

                        setTextareaLimit(1000 - e.target.value.length)

                    }}
                />
                <div className={styles.textarea__counter}>
                    Лимит символов: <span>{textareaLimit}</span>
                </div>


                <input type="file"
                    placeholder='Добавить изображение'
                    accept="image/jpeg,image/webp"
                    multiple
                    onChange={(e) => {

                        let arr = []
                        for (const key in e.target.files) {
                          
                          arr.push(e.target.files[key])  
                        }
                        arr.splice(arr.length - 2, 2)

                        
                        setNewFile(arr)
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