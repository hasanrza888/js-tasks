// //============================ Massivler task 1 ===========================================
// adlar=['hello', 'world', 'again'];

// adlar[2]='Classified';

// console.log(adlar);

// //=================================== task 2 ===============================================
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

// for(let i=0; i<arr.length; i++){
//     console.log(`Episode ${i+4}: ${arr[i]}`);
// }
    




// //Episode 4: New Hope
// //Episode 5: Empire strikes back
// //Episode 6: Return of the Jdi


// //=========================================== task 3 =========================================
// let a=prompt();
// let b=[];

// let change=a.split(' ');

// for( let i of change){
//     b.push(Number(i))
// }
// b.sort();
// console.log(b[0]);



// //============================================== ulduzlu =========================================
// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];


// let bonus=[
//     [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
//     [76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76],
//     [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
//     [72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72],
//     [77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77],
//     [72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72],
//     [77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77],
//     [72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72, 72],
//     [77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77, 77],
//     [76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76],
// ];



// function getAnnualSalary(){

//         let sumyear=0;

//         for(let i=0; i<10; i++){
//             for(let j=0; j<12; j++){
//                 sumyear+=salary[i][j];
//             }
//         }        
//     console.log(` Il ərzində bütün işçilərin maaşlarının cəmi: ${sumyear}`);
// }





// function getMonthlySalary(){

//     let n=Number(prompt('ayin nomresini daxil edin!'));
//     let monthly=[];
//         for(let i=0; i<10; i++){
//             monthly.push(salary[i][n-1]);
            
//         } 
//     console.log(`ayliq maaslar: ${monthly}`);
// }


// function getQuarterSalary(){
//     let sumrub=0;
//     let r=Number(prompt('Rubu daxil edin!'));
//     for(let i=0; i<10; i++){

//         for(let j=(3*r-3); j<=(3*r-1); j++){

//            sumrub += salary[i][j];

//         }
//     }  

//     console.log(`rub maaslari cemi: ${sumrub}`);
// }

// function iscimaasiillik(){
//     let d=Number(prompt('indeks nomresini daxil edin!'));

//     let iscimaasi=[]
//     for(let j=0; j<12; j++){
//         iscimaasi.push(salary[d-1][j]);
//     } 

//     console.log(`illik isci maasi: ${iscimaasi}`);

// }





// getAnnualSalary();

// getMonthlySalary();

// getQuarterSalary();

// iscimaasiillik();

// function getAnnualBonus(){

//         let sumyearbonus=0;

//         for(let i=0; i<10; i++){
//             for(let j=0; j<12; j++){
//                 sumyearbonus+=bonus[i][j];
//             }
//         }        
//     console.log(` Il ərzində bütün işçilərin bonuslarinin cəmi: ${sumyearbonus}`);
// }


// function getMonthlyBonus(){

//     let n=Number(prompt('bonus ucun ayin nomresini daxil edin!'));
//     let monthlybonus=[];
//         for(let i=0; i<10; i++){
//             monthlybonus.push(bonus[i][n-1]);
            
//         } 
//     console.log(`ayliq bonus: ${monthlybonus}`);
// }


// function getQuarterBonus(){
//     let sumrubbonus=0;
//     let k=Number(prompt('bonus ucun Rubu daxil edin!'));
//     for(let i=0; i<10; i++){

//         for(let j=(3*k-3); j<=(3*k-1); j++){

//            sumrubbonus += bonus[i][j];

//         }
//     }  

//     console.log(`rubluk bonus cemi: ${sumrubbonus}`);
// }

// function iscibonusillik(){
//     let l=Number(prompt('bonus ucun indeks nomresini daxil edin!'));

//     let iscibonus=[]
//     for(let j=0; j<12; j++){
//         iscibonus.push(bonus[l-1][j]);
//     } 

//     console.log(`illik bonus: ${iscibonus}`);

// }


// getAnnualBonus();
// getMonthlyBonus();
// getQuarterBonus();
// iscibonusillik();
