const snowDay = "https://thumbs.dreamstime.com/b/winter-s-cold-snowing-there-lot-snow-street-111471115.jpg";
const rainyDay = "https://www.timogundelejesu.com/wp-content/uploads/2020/04/It-Was-A-Raining-Day.jpg";
const cloudyDay = "https://th.bing.com/th/id/R.fe2f32d9f359672cd112bc4863b749af?rik=R1zNV5bHdqvWBw&pid=ImgRaw&r=0";
const windyDay = "https://www.chicagotribune.com/resizer/62cO94VCjd2nk8Us888MEtH_WRI=/800x0/filters:format[…]nc.s3.amazonaws.com/public/2JFB7HEGPNGQ7ODMK7PQI4QJKU.JPG";
const sunnyDay = "https://th.bing.com/th/id/R.722f1fe1ea26153501740d3ea546ac84?rik=wvMn6r9fOG6AAQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fvgjD5VS.jpg&ehk=peMcoKMCN7GNr8Zb0OhYAi54SED%2bV1pJ49NKvomUCuQ%3d&risl=&pid=ImgRaw&r=0";

function changeImage(){
    const element= document.getElementById('text');
    const elementValue = element.value;
    fetch(``).then((response)=>{
        response.json().then((data)=>{
            console.log(data);
            const targetDiv = document.getElementById('')
            targetDiv.innerHTML = JSON.stringify(data);
                
        })
    })
}

//curl "https://api.openweathermap.org/data/3.0/onecall?lat=41.8&lon=87.6&appid=c71cadb2f34e2ae96d64d35a1a7f5cca" 41.8 87.6