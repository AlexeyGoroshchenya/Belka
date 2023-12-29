import React, { useState } from 'react';
import styles from './Admin.module.css';

const OrdersList = ({ children, orders }) => {

    // const ordersForRender = orders.map(order=>{
    //     order.devices = JSON.parse(order.devices)
    // })
    // console.log(ordersForRender);

    const [hidden, setHidden] = useState(true)

    return (
        <>
            <div className={styles.titleRow}>
                <div className="admin__title">{children}</div>
                <div className={styles.unHide}
                    onClick={() => { setHidden(prev => setHidden(!prev)) }}>+</div>
            </div>
            <div className={hidden ? styles.hidden : styles.row}>
                {
                    orders.map(order =>
                        <div key={order.id + order.name} className={styles.order}>
                            <div className={styles.column}>
                                <div className={styles.name}>
                                    Имя клиента: {order.name}
                                </div>
                                <div className={styles.phone}>
                                    Телефон клиента: {order.phone}
                                </div>
                            </div>
                            <div className={styles.column}>
                                {
                                    JSON.parse(order.devices).map(device =>
                                        <div key={device.id + device.name} className={styles.device}>
                                            <div className={styles.name}>
                                                Название изделия: {device.name}
                                            </div>
                                            <div className={styles.price}>
                                                Цена: {device.price} руб.
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    order.note ?
                                        <div className={styles.note}>
                                            <p>Примечание клиента:</p>
                                            <p>{order.note}</p>
                                        </div>
                                        :
                                        ""
                                }

                            </div>
                            <div className={styles.recive}>
                                Обработать заказ
                            </div>

                        </div>


                    )


                }
            </div>

        </>
    );
};

export default OrdersList;