function GetElementTextById(ElementId) {

    const TotalElement = document.getElementById(ElementId);
    const TotalElementString = TotalElement.innerText;
    const currentTotalElement = parseInt(TotalElementString);
    return currentTotalElement;




}




function GetElementId(elementId, value) {

    const SubTotalElement = document.getElementById(elementId);
    SubTotalElement.innerText = value;
}

function CalculateSubTotal() {

    const CurrentPhoneTotal = GetElementTextById('phone-price-total');
    const CurrentCaseTotal = GetElementTextById('case-price-total');
    const CurrentSubTotal = CurrentCaseTotal + CurrentPhoneTotal;
    GetElementId('sub-total', CurrentSubTotal);

    const CurrentTaxTotalString = (CurrentSubTotal * .1).toFixed(2);
    const CurrentTaxTotal = parseFloat(CurrentTaxTotalString);
    GetElementId('tax-amount', CurrentTaxTotal);

    const FinalAmount = CurrentSubTotal + CurrentTaxTotal;
    GetElementId('total-amount', FinalAmount);





}