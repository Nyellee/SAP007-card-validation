let validator = {

  validador: function (cardNumber) {

    let card = Array.from(cardNumber)
    let reverseNumber = card.reverse()

    let sum = 0
    for (let i = 0; i < reverseNumber.length; i++) {
      if (i % 2 != 0) {
        reverseNumber[i] = (Number(reverseNumber[i])) * 2
        if (reverseNumber[i] > 9) {
          reverseNumber[i] = reverseNumber[i] - 9
          sum = sum + Number(reverseNumber[i])
        }
        else {
          sum = sum + (reverseNumber[i])
        }
      }
      else {
        sum = sum + Number(reverseNumber[i])
      }
    }
    if (sum % 10 === 0) {
      return true

    } else {
      return false
    }
  },


  ocultar: function (ocultarNumero) {



    let ocultado = ""
    for (let i = 0; i < ocultarNumero.length; i++) {
      if (i >= ((ocultarNumero.length) - 4)) {
        ocultado = ocultado + ocultarNumero.charAt(i)
      } else {
        ocultado = ocultado + "*"
      }
    }
    return ocultado
  }
}
export default validator;
