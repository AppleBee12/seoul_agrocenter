const today = document.querySelector('.today')
const temp = document.querySelector('#temp')
const sunrise = document.querySelector('#sunrise')
const rain = document.querySelector('#rain')
const sunset = document.querySelector('#sunset')
const humidity = document.querySelector('#humidity')
const icon = document.querySelector('#icon')

function zero(num, length){
    return num.toString().padStart(length, '0');
}

function getWeather() {
    let url = 'https://api.openweathermap.org/data/2.5/weather?lat=37.5666791&lon=126.9782914&appid=280737c5041f48e5b80c7544c238063e&units=metric';
    fetch(url)//fetch 전역함수
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP 오류! 상태: ${response.status}`);
            }
            return response.json();//JSON -> object
        })
        .then((result) => {
            console.log(result);
            let wt = new Date((result.dt) * 1000);
            let srise = new Date((result.sys.sunrise) * 1000)
            let sset = new Date((result.sys.sunset) * 1000)

            let todayDate = zero(wt.getFullYear(), 4) + '.' + 
                            zero(wt.getMonth() + 1, 2) + '.' + //달은 0부터 시작
                            zero(wt.getDate(), 2);

            let sunriseTime = zero(srise.getHours(), 2) + ':' 
                            + zero(srise.getMinutes(), 2);
            let sunsetTime = zero(sset.getHours(), 2) + ':' 
                            + zero(sset.getMinutes(), 2);
            
            today.innerHTML = todayDate;                        
            temp.innerHTML = Math.round(result.main.temp) + '℃';//소수점두자리까지 노출,반올림
            sunrise.innerHTML = sunriseTime;
            // 비가 안오면 rain 이란 폴더 자체가 아예 미생성 되어 오류 발생
            // result.rain false이면 0으로 표시
            let allRain = result.rain && result.rain['1h'] ? result.rain['1h'] : 0;
            rain.innerHTML = Math.round(allRain) + 'mm';//소수점두자리까지 노출,반올림
            sunset.innerHTML = sunsetTime;    
            humidity.innerHTML = result.main.humidity + '%';

            //icon설정
            let code = result.weather[0].icon;
            let imgUrl = `https://openweathermap.org/img/wn/${code}@2x.png`
            let description = result.weather[0].description;

            icon.innerHTML = `<img src="${imgUrl}" alt="${description}">`
            //icon.setAttribute('src', imgUrl)
            //icon.setAttribute('alt', description)
        })
}
getWeather();
