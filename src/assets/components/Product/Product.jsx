import React, { useContext } from 'react';
import styles from './Product.module.css'
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE, ORDER_ROUTE } from '../../utils/consts';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';
import { changeBasket } from '../../utils/helpers';




const Product = observer(({ item, inWish, setInWish, slide, setSlide}) => {

    const {order} = useContext(Context)


    const router = useNavigate()
    const images = item.img?.includes(",")? item.img.split(','): [item.img]

    
   



    // const changeBasket = () => {
    //     const selectedObject = { id: item.id, name: item.name, price: item.price, img: item.img }

    //     if (!localStorage.basket) {

    //         localStorage.setItem('basket', JSON.stringify([selectedObject]))
    //     } else {

    //         let basket = JSON.parse(localStorage.basket)
    //         if (basket.find(el => el.id === item.id)) {
    //             let index = basket.findIndex(el => el.id === item.id)
    //             basket.splice(index, 1)
    //             setInWish(false)

    //         } else {
    //             basket.push(selectedObject)
    //             setInWish(true)
    //         }
    //         localStorage.setItem('basket', JSON.stringify(basket))
    //     }
    // }

    const changeSlide = ()=>{

        if(images[slide + 1]) {
            setSlide(prev=> prev + 1)
        }else{ setSlide(0) }
    }

    const createOrder = ()=>{

        changeBasket(item, setInWish)
       // order.setOrder([item])
        router(BASKET_ROUTE, { replace: false, state: { itemId: item.id } })
    }



    
    return (
        <div className={styles.body}>
            <div className={styles.item}>
                <div className={styles.imagebox}>
                    <div
                        className={styles.image}
                            onClick={() => {

                           
                            changeSlide()

                           
                            // router(PRODUCT_ROUTE + '/' + item.id, { replace: false })
                        }}
                    >
                        <img src={`${process.env.PUBLIC_API_URL}/${images[slide]}`} alt="" />

                    </div>

                    <div className={styles.buttons}>
                        <div className={styles.button}
                            onClick={()=>{changeBasket(item, setInWish)}}
                        >
                            {
                                
                                !inWish? 'В корзину': 'Из корзины'
                            }
                            
                            </div>

                        <div className={styles.button}
                            onClick={() => {

                                if(inWish){
                                    router(BASKET_ROUTE, { replace: false })
                                }else{

                                    createOrder()
                                    // console.log(JSON.parse(localStorage.getItem('basket')));
                                }
                                


                            }}
                        >
                            {
                                
                                !inWish? 'Заказать': 'Перейти в корзину'
                            }
                            
                            </div>
                    </div>


                </div>

                <div className={styles.content}>

                    <h2 className={styles.title}>{item.name}</h2>
                    <div className={styles.price}>{item.price} рублей</div>

                    <div className={styles.textbox}>
                        <div className={styles.text}>{item.description}</div>
                    </div>


                </div>
            </div>


            <div className={styles.info}>

                <h2 className={styles.title}>Как приобрести</h2>
                <div className={styles.text}><p>Оформление заказа онлайн – напишите нам на Whatsapp или в Telegram по номеру +7 999 113-52-22, либо на почту info@whitelake-shop.ru с указанием кода модели – 1598.

                    Менеджер сообщит точную цену под ваши размеры, сроки изготовления и стоимость доставки, а также вышлет палитру возможных камней под данное украшение.

                    Далее менеджер оформит с вами договор-оферту по e-mail.</p>
                    <p>Затем вносится аванс с помощью банковской карты (ссылка на оплату будет в договоре, электронный чек приходит Вам на e-mail).

                        После оплаты мы приступим к изготовлению украшения.</p>


                    <p>Примерка образцов украшений в нашем офисе по адресу – Москва, ул. Большая Садовая, 5, офис 209 (строго по предварительной записи).

                        Пожалуйста, сообщите нам заранее какие образцы Вы хотели бы посмотреть, так как не все модели есть в наличии.</p>
                </div>





            </div>


        </div>
    );
})


export default Product;