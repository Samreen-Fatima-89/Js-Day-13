// var str = "saima sara saim";

// console.log(str.replace("sara" ,"hy"));

// for (var i = 0; i < str.length; i++) {
//     //  if (str.slice(i , i + 7) === "sara") {
//     //       console.log("found");
//     //  break
//     // }     
// }

// var str = "sara";
// console.log(str.indexOf("e"));
// var str = "sara";
// // console.log(str[0].toUpperCase());
// var result = str[0].toUpperCase() + str.slice(1)
// console.log(result);

// var str = "sara khan";
// var words = str.split(" ")
// for (var i = 0; i < words.length; i++){
//     var result = words[i][0].toUpperCase() + words[i].slice(1)
//      console.log(result);
// }

// var str = "sara fatima";
// var words = str.split(" ");
// var arr = []
// for (var i = 0; i < words.length; i++){
//     var result = words[i][0].toUpperCase() + words[i].slice(1)
//     arr.push(result);
    
// }
// console.log(arr.join(" "));

var str = " sara fatima numan";
for(var i = 0;i < str.length; i++){
    if(str.slice(i ,i + 6) == "fatima"){
        str = str.slice(0,i) + "khan" + str.slice(i + 6)
        break;
    }
}
console.log(str);
