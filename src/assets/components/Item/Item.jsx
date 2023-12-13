import React from 'react';
import styles from './Item.module.css'

const Item = ({item}) => {


    // let item = {
    //     "id": 1,
    //     "name": "Серьги 1",
    //     "price": 45,
    //     "desc": "Будущее. После ядерной войны Землю постигла ужасная экологическая катастрофа. Поверхность планеты почти целиком покрывают леса, испускающие в атмосферу ядовитые споры растений. Оставшиеся в живых люди живут в зонах, ещё не покрытых лесами, и периодически сталкиваются с чудовищными насекомообразными монстрами. Долина ветров — одно из царств, образовавшихся на руинах прежних государств. Им управляет отважная принцесса Навсикая. Но мирное существование Долины ветров нарушается, когда маленькая страна сталкивается с воинственными соседями, которые стремятся воссоздать опасное оружие, способное окончательно уничтожить планету.",
    //     "image": "1.webp"
    // }

    return (
        <div className={styles.item}>
            <div className={styles.imagebox}>
                <div
                    className={styles.image}
                    // style={{backgroundImage: 'url(/images/content/' + item.image + ')'}}
                    onClick={() => {
                        console.log(item.id)
                        // router(ITEM_ROUTE + '/' + item.id, { replace: true })
                    }}
                >
                    <img src={`${process.env.REACT_APP_API_URL}/${item.img}`} alt="" />
                    
                </div>

                <div className={styles.button}
                        onClick={() => {
                            console.log(item)
                            // localStorage.test =  {id: item.id, name: item.name, price: item.price};
                            // console.log(localStorage.test)

                        }}
                    >В избранное</div>

                <div className={styles.button}
                        onClick={() => {
                            console.log(item)
                            // localStorage.test =  {id: item.id, name: item.name, price: item.price};
                            // console.log(localStorage.test)

                        }}
                    >Заказать</div>
            </div>

            <div className={styles.content}>

                <h2 className={styles.title}>{item.name}</h2>
                <div className={styles.price}>{item.price} рублей</div>

                <div className={styles.textbox}>
                    <div className={styles.text}>{item.description}</div>
                </div>


            </div>


        </div>
    );
};


export default Item;