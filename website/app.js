/* Global Variables */
const BaseURL = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKEY = '&appid=3b6f2f42241404108f13f8084c718d0e';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click', performAction);
function performAction(e){
        const zip = document.getElementById('zip').value;
        const feeling = document.getElementById('feelings').value;
        if(zip.length == 0 || feeling.length  == 0){
                alert("Put some data")
        }else {
        getAnimal(BaseURL, zip, apiKEY).then(function(data){
                console.log(data.main['temp']);
                postData('/add', {temp:data.main['temp'], date: newDate, feeling: feeling})
                
        }).then(function(data){
                UpdateUI();
        })
}
}
const getAnimal = async(baseURL, zip, key) =>{
        let response  =await fetch(baseURL+zip+key);  
        try {
                const data = await response.json();
                // console.log(data)
                return data;
              }  catch(error) {
                console.log("error", error);
                // appropriately handle the error
              }
}
const postData = async (url= '', data={}) => {
        const response = await fetch(url, {
                method: 'POST',
                credentials : 'same-origin',
                headers: {
                      'Content-Type': 'application/json'
                },
              body: JSON.stringify(data)
        })
        try {
          const newData = await response.json();
        //   console.log(newData)
          return newData;
        }catch(error) {
        console.log("error", error);
        }
}

const UpdateUI = async () => {
        let request = await fetch('/all');
        try {
                const AllData = await request.json();
                document.getElementById('temp').innerHTML = AllData.temp;
                document.getElementById('date').innerHTML = AllData.date;
                document.getElementById('content').innerHTML = AllData.feeling;
        } catch (error) {
                
        }
}