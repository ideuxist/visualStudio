'use strict';
let url = `https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&returnType=JSON&serviceKey=7Sc8y2o8nwjnhgHwF0dsrcVVWU926dK93ykFkBrMD1j8KTlf5VsGfzYsLsto0%2FswWjgumRugmOCM0qzWiHoo7Q%3D%3D`;
let xhtp = new XMLHttpRequest();
let fields = ['id', 'facilityName', 'address', 'phoneNumber', 'updatedAt']

xhtp.open('get', url)
xhtp.send()
xhtp.onload = function () {
    let result = JSON.parse(xhtp.responseText)
    init(result);
}

function init(jsonData) {
    console.log(jsonData)
    let tbody = document.getElementById('tbody')
    jsonData.data.forEach(function (element) {
        if (element.sido == '서울특별시') {
            let tr = document.createElement('tr');
            tbody.appendChild(tr);
            fields.forEach(function (val) {
                let td = document.createElement('td')
                td.innerHTML = element[val];
                tr.appendChild(td);
            })
        }
    })
}
function search(){

    
}