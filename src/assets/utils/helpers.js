export const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
}             // if isMobile.any() === true user cames from mobile device

export const changeBasket = (item, setInWish) => {
    const selectedObject = { id: item.id, name: item.name, price: item.price, img: item.img }

    if (!localStorage.basket) {

        localStorage.setItem('basket', JSON.stringify([selectedObject]))
    } else {

        let basket = JSON.parse(localStorage.basket)
        if (basket.find(el => el.id === item.id)) {
            let index = basket.findIndex(el => el.id === item.id)
            basket.splice(index, 1)
            setInWish(false)

        } else {
            basket.push(selectedObject)
            setInWish(true)
        }
        localStorage.setItem('basket', JSON.stringify(basket))
    }
}
