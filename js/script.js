function currencyconverter(valNum)
{
    if(converter.rupees.value <=0)
    
        alert("Enter Value GreaterThan 0 ");
    
    else
    {
        document.getElementById("dollar").value = (valNum/73.25).toFixed(2);
        document.getElementById("yuan").value = (valNum/10.70).toFixed(2);
        document.getElementById("won").value = (valNum/0.062).toFixed(2);
        document.getElementById("riyal").value = (valNum/19.53).toFixed(2);
        document.getElementById("dinar").value = (valNum/239.30).toFixed(2);

    }
    
}
