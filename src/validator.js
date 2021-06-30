const validator = {
  // ...

  isValid(numero){

    const tarjetaArray = Array.from(numero, (x) => parseInt(x));

    const reverse = tarjetaArray.reverse();

    let suma = 0;

    for (let i = 0; i < tarjetaArray.length; i++) {
      let element = reverse[i];
      if (i % 2 !== 0) {
        element *= 2;
      if (element > 9) {
          element -= 9; 
      }
      }
      suma += element;
}

      if (suma % 10 == 0) {
      return true;
}

      return false;

},


  maskify:function(cardNumber){
    return cardNumber.replace(/.(?=.{4})/g, "#");
  
}

};

export default validator;
