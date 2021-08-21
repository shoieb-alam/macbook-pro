//------ Memory price calculation ------//
const memoryCost = document.getElementById('memory-price');
function updateMemoryPrice(isBigger) {
    if (isBigger) {
        memoryCost.innerText = 180;
    }
    else {
        memoryCost.innerText = 0;
    }
    updateTotal();
}
// Handling Memory Price event 
document.getElementById('16GB-memory').addEventListener('click', function () {
    updateMemoryPrice(true);
})
document.getElementById('8GB-memory').addEventListener('click', function () {
    updateMemoryPrice(false);
})

//------ Storage price calculation ------//
const storageCost = document.getElementById('storage-price');
function updateStoragePrice(price) {
    if (price == 100) {
        storageCost.innerText = 100;
    }
    else if (price == 180) {
        storageCost.innerText = 180;
    }
    else {
        storageCost.innerText = 0;
    }
    updateTotal();
}
// Handling Storage Price event
document.getElementById('256-GB-SSD').addEventListener('click', function () {
    updateStoragePrice(0);
})
document.getElementById('512-GB-SSD').addEventListener('click', function () {
    updateStoragePrice(100);
})
document.getElementById('1-TB-SSD').addEventListener('click', function () {
    updateStoragePrice(180);
})

//------ Delivery charge calculation ------//
const deliveryCost = document.getElementById('delivery-charge');
function updateDeliveryCharge(isUrgent) {
    if (isUrgent) {
        deliveryCost.innerText = 20;
    }
    else {
        deliveryCost.innerText = 0;
    }
    updateTotal();
}
// Handling Delivery charge event
document.getElementById('delivery-charge-0').addEventListener('click', function () {
    updateDeliveryCharge(false);
})
document.getElementById('delivery-charge-20').addEventListener('click', function () {
    updateDeliveryCharge(true);
})

//------ Total Price calculation ------//
const totalPrice = document.getElementById('total');
function updateTotal() {
    let total = 1299;
    const memoryTotal = parseFloat(memoryCost.innerText);
    const storageTotal = parseFloat(storageCost.innerText);
    const deliveryTotal = parseFloat(deliveryCost.innerText);

    total = total + memoryTotal + storageTotal + deliveryTotal;

    totalPrice.innerText = total;
    discountedPrice.innerText = total;
}

//------ Discount Price calculation ------//
const discountedPrice = document.getElementById('discounted-price');
function applyPromo() {
    const promoCode = document.getElementById('promocode-field');
    promoCodeText = promoCode.value;
    promoCode.value = '';

    if (promoCodeText.toLowerCase() == 'stevekaku') {
        const total = parseFloat(totalPrice.innerText);
        const discountAmount = total * 0.2;
        discountedPrice.innerText = total - discountAmount;
        document.getElementById('promocode-field').disabled = true;
    }
}
