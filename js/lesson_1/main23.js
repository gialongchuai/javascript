//callback : 
// là hàm
// truyền qua đối số
// được gọi lại(trong hàm nhận đối số)

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
// ví dụ callback
courses.map(function(course) {
    console.log(course); // Javascript \n PHP \n Ruby
});

var htmls = courses.map(function(course) {
    return `<h2>${course}</h2>`;
});

console.log(htmls); // (3) ['<h2>Javascript</h2>', '<h2>PHP</h2>', '<h2>Ruby</h2>']

console.log(htmls.join('')); // <h2>Javascript</h2><h2>PHP</h2><h2>Ruby</h2>


Array.prototype.map2 = function(cour) {
    for(var i=0; i<this.length; i++) {
        cour(i, this[i]);
    }
}

courses.map2(function(ind, val) {
    console.log(ind + ' ' + val); // 0 Javascript \n 1 PHP \n 2 Ruby
});

// nâng cao hơn
Array.prototype.map3 = function(cour) {
    for(var i=0; i<this.length; i++) {
        var res = cour(i, this[i]); // do ở đây gọi hàm nên dùng res nhận lại mỗi lần gọi 
        console.log(res);// in ra xem kẻ với dòng 44 đấy nhé:  <h2>0 : Javascript</h2> \n <h2>1 : PHP</h2> \n <h2>2 : Ruby</h2>
    }
}

courses.map3(function(ind, val) {
    console.log(ind + ' ' + val); // 0 Javascript \n 1 PHP \n 2 Ruby
    return `<h2>${ind} : ${val}</h2>`;
});

// nâng cao hơn nữa
Array.prototype.map4 = function(cour) {
    var out = [];
    for(var i=0; i<this.length; i++) {
        var res = cour(i, this[i]); // do ở đây gọi hàm nên dùng res nhận lại mỗi lần gọi 
        console.log(res);// in ra xem kẻ với dòng 44 đấy nhé:  <h2>0 : Javascript</h2> \n <h2>1 : PHP</h2> \n <h2>2 : Ruby</h2>
        out.push(res);
    }
    return out;
}

var hung = courses.map4(function(ind, val) {
    console.log(ind + ' ' + val); // 0 Javascript \n 1 PHP \n 2 Ruby
    return `<h2>${ind} : ${val}</h2>`;
});

console.log(hung); // (3) ['<h2>0 : Javascript</h2>', '<h2>1 : PHP</h2>', '<h2>2 : Ruby</h2>']
console.log(hung.join('')); // <h2>0 : Javascript</h2><h2>1 : PHP</h2><h2>2 : Ruby</h2>