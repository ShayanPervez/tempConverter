const calculateTemp =()=>{
    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp=tempSelected.options[tempSelected.selectedIndex].value;
    
    let result;

     const celToFar = (cval)=>{
        let fah = (cval* 9/5) + 32;
        return fah;
    }

    const farToCel = (fvalue)=>{
       let cel = (fvalue-32)*5/9;
       return cel;
    }


    if(valueTemp =="cel"){
        result= celToFar(numberTemp);
        document.getElementById('resultContainer').innerHTML= `${result} &#176;Fahrenheit`;

    }
    else{
        result= farToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `${result} &#176;Celsius`;
    }

   

}