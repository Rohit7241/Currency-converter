const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
let baseurl="https://latest.currency-api.pages.dev/v1/currencies/"
const dropdowns = document.querySelectorAll(".dropdowns select");
const img=document.querySelector(".dropdowns img");
let msg=document.querySelector(".msg")
let button=document.querySelector("#sumbit")
let from=document.querySelector(".from select");
let to=document.querySelector(".to select");
let swi=document.querySelector("#switch")
//for in loop to access the code js
for(let select of dropdowns){
    for( currCode in countryList){
         let newoption=document.createElement("option");
         newoption.innerText=currCode;
         newoption.value=currCode;
         if(select.name==="to"&&newoption.value==="INR"){
            newoption.selected="selected"}
        else if(select.name==="from"&&newoption.value==="USD"){
            newoption.selected="selected"}
            select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })        
}

//updating flag after the country code is changed

const updateflag=(element)=>{
    let tar=element.value;
    let countrycode=countryList[tar];
     let newimg=`https://flagsapi.com/${countrycode}/flat/64.png`;
      let img=element.parentElement.querySelector("img");
      img.src=newimg;
 }


//switch button

swi.addEventListener("click", async (evt)=>{
    evt.preventDefault()
    let temp=from.value;
    from.value=to.value;
    to.value=temp;

    //changing img

    let newfromimg=`https://flagsapi.com/${countryList[from.value]}/flat/64.png`;
    let newtoimg=`https://flagsapi.com/${countryList[to.value]}/flat/64.png`;
    document.querySelector(".from img").src=newfromimg;
    document.querySelector(".to img").src=newtoimg;

    //changing currency rate quickly
    let inputval=document.querySelector("#inputval").value;
 if(inputval===""||inputval<1){
    inputval=1;
    inputval.value="1";
 }
 let fromval=from.value;
 let toval=to.value;
 let newurl=`${baseurl}${fromval.toLowerCase()}.json`;
 let response=await fetch(newurl);
 let data= await response.json();
 // as there are two abjects date and usd so itll access the usd or from one
 let rates=data[fromval.toLowerCase()];
let finalrates=rates[toval.toLowerCase()];
const finalval=(finalrates*inputval).toFixed(4);
msg.innerText=`${inputval} ${fromval} = ${finalval} ${toval}`;
})




//to take the input from user

button.addEventListener("click",async (evt)=>{
    evt.preventDefault();
let inputval=document.querySelector("#inputval").value;
 if(inputval===""||inputval<1){
    inputval="1";
 }
 let fromval=from.value;
 let lowfrom=fromval.toLowerCase()
 let toval=to.value;
 let lowto=toval.toLowerCase();
 let newurl=`${baseurl}${fromval.toLowerCase()}.json`;
 let response=await fetch(newurl);
 let data= await response.json();
 // as there are two abjects date and usd so itll access the usd or from one
 let rates=data[lowfrom];
let finalrates=rates[lowto];
const finalval=(finalrates*inputval).toFixed(4);
msg.innerText=`${inputval} ${fromval} = ${finalval} ${toval}`;
})


