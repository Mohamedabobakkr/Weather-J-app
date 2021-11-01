
/* Global Variables */
const api ="https://api.openweathermap.org/data/2.5/weather?zip=";
const apikey =",us&appid=bedbc2e2cd36239438be067f24f78768";
document.getElementById('generate').addEventListener('click',()=>{
    getInfo(api,apikey).then(function(myData){
        postData({info1 : myData.main.temp, info2 : myData.name , info3 :myData.feelings});
        outputMessage();

    })
});

const getInfo = async (url,key)=>{
    const zipcode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    const response = await fetch(url+zipcode+key)
try{
    const myData = await response.json();
    console.log(myData);
    document.getElementById('city').innerHTML +='city name is  ' + myData.name;
    document.getElementById('temp').innerHTML +='<br> temprature is  ' + myData.main.temp;
    document.getElementById('content').innerHTML +='<br> you feel ' + myData.feelings;
     return myData;
}
catch(error){
console.log('you have an error'+ error);
}
}
const postData = async (urlData= {})=>{
    const response =await fetch('/postData',{
        method:'POST',
        headers:{
            'Content-Type':'application/json' ,
        },
        body: JSON.stringify(urlData)

    });
    try{
        const siteData = await response.json();
        console.log(siteData);
        return siteData;
    } catch(error){
        console.log('error'+ error);
    }
}
const outputMessage = async ()=> {
    const request = await fetch("/all");
try{
    const allData = await request.json(); 
    document.getElementById('holder entry').innerHTML +='your city is  '+ allData.cityName;
    document.getElementById('temp').innerHTML +='city temprature is  '+ allData.temp;
    document.getElementById('content').innerHTML +='you feel '+ allData.feelings;

}
catch(error){
console.log('you have an error'+ error);
}
}