let sheetID = "1q9E_bL_TCAzzp4hSqEIQFytBjik_6I1Hwj17FO1HKd8";
let tabName = 'Sheet1'

let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`

console.log(opensheet_uri);

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
				//do something with the data here
    
    
    
    
            })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });