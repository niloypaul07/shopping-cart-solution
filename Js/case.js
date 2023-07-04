function updateCaseNumber(isIncease) {
    const caseNumberField = document.getElementById('case-number-field')
    const caseNumberString = caseNumberField.value;
    const PreviouseCaseNumber = parseInt(caseNumberString);

    let NewCaseNumber;

    if (isIncease == true) {

        NewCaseNumber = PreviouseCaseNumber + 1;

    }
    else {
        NewCaseNumber = PreviouseCaseNumber - 1;
    }
    caseNumberField.value = NewCaseNumber;
    return NewCaseNumber;
}
function updateCasePrice(NewCaseNumber) {
    const CaseTotalPrice = NewCaseNumber * 59;

    const CaseTotalElement = document.getElementById('case-price-total');

    CaseTotalElement.innerText = CaseTotalPrice;
}



document.getElementById('btn-case-plus').addEventListener('click', function () {

    const NewCaseNumber = updateCaseNumber(true);
    updateCasePrice(NewCaseNumber);
    CalculateSubTotal();



});
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const NewCaseNumber = updateCaseNumber(false);
    updateCasePrice(NewCaseNumber);
    CalculateSubTotal();



});