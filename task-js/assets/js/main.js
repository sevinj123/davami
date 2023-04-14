// var eded = 29;

// var teklik = eded % 10;
// eded =(eded - teklik)/10;
// var eks = teklik*10+eded;
// console.log(eks);



//1den 100e qeder cut ededlerin cemini tapin              while ile yazilisi

// var i=1;
// while(i<=100 ){
// if(i%2==0){
//     sum+=i
// }
// i++

// }
// alert(sum)




// //do while ile yazilisi

// var i=1;
// {
// if(i%2==0){
//     sum+=i
// }
// i++

// }
// while(i<=100 )

// alert(sum)






// //for ile yazilisi

// var sum = 0;
// for(var i =1; i<=100 i++){
//     if(i%2==0){
//         sum +=i;

//     }
// }
// alert(sum)




// 2. 1den 100 e qeder tek ededlerin hasilini tapin

//for ile yazilisi
//  var sum = 1;
//  var i=1;
//  for(var i=1; i<=100; i++){
//     if(i%2==1){
//         sum *=i;
//  }
//  }
//  alert(sum)




 //while ile

//  var i=1;
// var sum=1;
// while(i<=100){
//    if(i%2==1){
//        sum *= i
//    }
//    i++
// }
// alert(sum)






//do while
// var i=1;
// var sum=1;
// do{
//    if(i%2==1){
//        sum *= i
//    }
//    i++
// }
// while(i<=10)
// alert(sum)





//3. 1den 100e qeder 15e bolunen ededlerin cemini tapin      For ile yazilisi
// var sum =0;
// var count =0;    //count 100un icinde nece dene 15e eded oldugun sayini gosterir
//burda eger var numpromote("") yazilarsa bizim sertde 100 yazmagimiza ehtiyac yoxdu num yazacaq ve istifadeci promote hissesine ne reqem yazsa onu hesablayacaq
// for(var i=1; i<=100; i++){
//     if(i%15==0){
//         sum+=i;
//         count++;
//     }
// }
// var avg=sum/count;     //avg ededi ortadi      bunu yuxarida count un altinda da vermek olar
// alert(avg)





//while ile yazilisi





//4.2eded verilib,bu ededlerin arasindaki ededlerin cemini tapin
//FOR

// var a=Number(prompt("ilk ededi daxil edin"));
// var b=Number(prompt("ikinci ededi daxil edin"));
// var sum=0;
// for(var i=a+1; i<b; i++){
//    sum+=i;
// }
// alert(sum)


//5. 1 eded verilir bu ededin reqemlerinin hasilini tapin
//  var a=Number(prompt("eded daxi edin"));
//  var sum=1;
 
//  while(a>0){
//    var digit = num%10;
//    num=num-digit;
//    num=num/10;
//    sum|*=digit;
//  }
//  alert(sum)

//6.  verilmis reqemin ededi ortasini tapin
//7. 

// var num1=Number(prompt("nirinci ededi daxil edin"));
// var num2=Number(prompt("ikinci ededi daxil edin"));
// var sym=prompt("simvolu daxil edin")
// switch (sym) {
//     case "+":
//         alert(num1+num2);
//         break;
//         case "-":
//             alert(num1-num2);
//             break;
//             case "/":
//                 alert(num1/num2);
//                 break;
//                 case "*":
//                     alert(num1*num2);
//                     break;

//     default:
//         alert("duzgun deyer daxil edin")
//         break;
// }