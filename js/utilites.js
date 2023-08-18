function getInputValue(inputId){
    const inputfield = document.getElementById(inputId);
    const inputValueString = inputfield.value;
    const inputValue = parseFloat(inputValueString);
    inputfield.value = '';
    return inputValue;
}
function getElementValue(elementId){
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
function setValueToElement(elementId, newAmount){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newAmount;
}