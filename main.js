// --------------------------------- task1 -----------------------------------------------
let a=Number(prompt('2 reqemli eded daxi edin!'));

while(a<100){
    a = a +7;

}

console.log(a);


// ----------------------------------- task 2 ----------------------------------------

let n=(Number(prompt('N ededini daxil edin!')) - 1);

let i="I know how to use cycles";
while(0<n){
    n--;
    console.log(i);

}

console.log(i);


// ------------------------------------ task 3 --------------------------------------

let n=100;
while(n<1000){
    n=n+10;
    console.log(n);

}



// -------------------------------------- task 4 -------------------------------------

n=11;
let sum= 0;
while(n<100){
    n=n+2;
    sum+=n;
    
}
console.log(sum);





// ------------------------------------------ task 5 ---------------------------------
let m=Number(prompt());

let n=100;
let sum=0;

while(n<1000){
    n++;
    if(n%m==0){
        sum=sum+n;
    }
}
console.log(sum);


//------------------------------------------- ulduz -----------------------------------------





//---------------------------------- parametrli dovr   task1 --------------------------------
let product=1;
for(let i=1; i<10; i++){
    product = product * i;
    console.log(product);
} 


//-----------------------------------      task2    -----------------------------------------
let n=prompt("metni daxile edin !");
let sentence='';
let change=n.split(' ');
for(let i=(change.length -1); i>=0; i--){


    sentence += `${change[i]} `;
}    
console.log(sentence);



//------------------------------------------- task3 --------------------------------------------
let n=prompt('metni daxil edin!');
let a;

for (let i=0; i<n.length; i++){
    if(n[i]==='.'){
         a=i;
         break;
    }

}
console.log(a);



//-------------------------------------------- task 4 ----------------------------------------
n=prompt('metn daxil edin !');
let a;
for(let i=0; i<n.length; i++){
    

    if(isNaN(n[i])){
        a="reqem yoxdur";
        continue;
    }else{
        a="reqem var";
        break;
    }

}       

console.log(a)