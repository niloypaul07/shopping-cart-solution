
function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberString = phoneNumberField.value;
    const perviousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease == true) {
        newPhoneNumber = perviousPhoneNumber + 1;

    }
    else {
        newPhoneNumber = perviousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;

}
function updatePhonePrice(newPhoneNumber) {
    const PhoneTotalPrice = newPhoneNumber * 1219;

    const PhoneTotalElement = document.getElementById('phone-price-total');

    PhoneTotalElement.innerText = PhoneTotalPrice;
}









document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);
    CalculateSubTotal()


})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);
    CalculateSubTotal()

})