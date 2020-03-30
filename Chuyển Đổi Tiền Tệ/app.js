function result() {
let input=parseInt(document.getElementById("number").value);
let curren=document.getElementById("curren").value;
let toCurrency=document.getElementById("ToCurrency").value;
let eur=26198;
let usd=23888;
let result;
    if (curren=="VND"&&toCurrency=="VND"){
        result=input+"&nbsp"+toCurrency;
    }if (curren=="VND"&&toCurrency=="USD"){
        result=input/usd+"&nbsp"+toCurrency;
    }if (curren=="VND"&&toCurrency=="EUR"){
        result=input/eur+"&nbsp"+toCurrency;
    }if (curren=="USD"&&toCurrency=="VND"){
        result=input*usd+"&nbsp"+toCurrency;
    }if (curren=="USD"&&toCurrency=="USD"){
        result=input+"&nbsp"+toCurrency
    }if (curren=="USD"&&toCurrency=="EUR"){
        result=input*usd/eur+"&nbsp"+toCurrency
    }if (curren=="EUR"&&toCurrency=="VND"){
        result=input*eur+"&nbsp"+toCurrency;
    }if (curren=="EUR"&&toCurrency=="USD"){
        result=input*eur/usd+"&nbsp"+toCurrency;
    }if (curren=="EUR"&&toCurrency=="EUR"){
        result=input+"&nbsp"+toCurrency;
    }

    document.getElementById("result").innerHTML=result;
}