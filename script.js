
// let x=10;

// let y=5;

// let result = (x + y);



function calc(){

// alert(result)

let num1 = prompt('enter first number');

let num2 = prompt('enter second number');

let result = Number(num1) + Number(num2);


// alert(`${num1} + ${num2} + ${result}`);
document.getElementById('hw').innerHTML = `${num1} + ${num2} = ${result}`


}


function tamir(){
document.getElementById('hw').innerHTML = `תמיר`
}




function o_o() {

    let number1 = document.getElementById('_num1').value;

    let number2 = document.getElementById('_num2').value;

    let result = Number(number1) + Number(number2);

    document.getElementById('hw3').innerHTML = `${number1} + ${number2} = ${result}`;  
}

function _calculate(x,y){
    let result = Number(x) + Number(y);
    document.getElementById('hw3').innerHTML = `${x} + ${y} = ${result}`;
}

// function check(){

// let number1 = Number(document.getElementById('num1').value);
// let number2 = Number(document.getElementById('num2').value);

// if( number1 > number2 ){
//  document.getElementById('uniq').innerHTML =`${number1} Is Greater than ${number2}🔼`;


// }

// else if(number1 < number2){
//     document.getElementById('uniq').innerHTML =`${number1} Is less than ${number2}🔽`;

// }
//  else if(number1 == number2){

//     document.getElementById('uniq').innerHTML =`${number1} Is Equal to ${number2}🤝`;
//  }


// }

function check(){

    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
    
    if( number1 > number2 ){
     document.getElementById('uniq').innerHTML =`${number1} Is Greater than ${number2}🔼`;
    
    
    }
    
    
     else if(number1 == number2){
    
        document.getElementById('uniq').innerHTML =`${number1} Is Equal to ${number2}🤝`;
     }
    else{

        document.getElementById('uniq').innerHTML =`${number1} Is less than ${number2}🤝`;
    }
    
    }

let x = 10;

let y = 5;

let array = ['text', 'tamir', x, y];

console.log(array);

console.log (array.length);

let _a_r_r_a_y_ = ['text', 'lear', x, y];

console.log(_a_r_r_a_y_);

//index => _a_r_r_a_y_[index]
console.log(_a_r_r_a_y_[0]); // text 

console.log(_a_r_r_a_y_[1]); // your name 

console.log(_a_r_r_a_y_[2]); // value of x 

console.log(_a_r_r_a_y_[3]); // value of y 

console.log(_a_r_r_a_y_.length); 
  //_a_r_r_a_y_.length = 4 asking if 4 is greater than 3. array length is bigger then 3 so to statment will occur
            
  //true
  if(_a_r_r_a_y_.length >= 4){
    console.log(`array has more than 3 items. \narray size is: ${_a_r_r_a_y_.length}`);
}

//מדפיס את כל המערך
console.log(_a_r_r_a_y_);

//מדפיס את האובייקט הראשון במערך
console.log(_a_r_r_a_y_[0]);


// להשיג את האובייקט האחרון במערך. בכך שאני ניגש למיקום על ידי שימוש בגודל המערך שהוא שווה כרגע ל4 ופחות אחד
console.log(_a_r_r_a_y_[_a_r_r_a_y_.length - 1]);



let sony = ['mom', 'bro', 'sister', 'dad', 'granny', 'grampa', 'aunt', 'uncle'];

console.log(sony[3]);

console.log(sony[sony.length-1]);

// console.log(mom);



let _movies = [
    {
    title:'The Dark Knight',
    rating: 9.5,
    year:2008,
    imageUrl: 'https://m.media-amazon.com/images/I/91KkWf50SoL._SL1500_.jpg',
    linkUrl: 'https://www.imdb.com/title/tt0468569/',
    rateUrl: 'https://www.imdb.com/title/tt0468569/ratings',
    
    
},
{
    title:'The Dark Knight Rises',
    rating: 8.4,
    year: 2012,
    imageUrl: 'https://images.moviesanywhere.com/137de7df53b44414af057f89c0647b0b/38dd4c91-6758-46bd-969b-6acf010a249b.jpg',
    linkUrl: 'https://www.imdb.com/title/tt1345836/',
    rateUrl: 'https://www.imdb.com/title/tt1345836/ratings'
},
{
    title:'Superman Man of Steel',
    rating: 7.1,
    year: 2013,
    imageUrl: 'https://flxt.tmsimg.com/assets/p9259673_p_v8_ag.jpg',
    linkUrl: 'https://www.imdb.com/title/tt0770828/',
    rateUrl:'https://www.imdb.com/title/tt0770828/ratings'
},
{
title:'whiplash',
rating:8.5,
year:2014,
imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBFF2Qo6Purleo2PME-Gegbpxib7_4yV5m4Q&usqp=CAU',
linkUrl:'https://www.imdb.com/title/tt2582802/?ref_=nv_sr_srsg_0',
rateUrl:'https://www.imdb.com/title/tt2582802/ratings/?ref_=tt_ov_rt',
},
{
  title:'the walking dead',
  rating:8.1,
  year:2010,
  imageUrl:'https://i.insider.com/617e40621037b10018151a4e?width=1000&format=jpeg&auto=webp',
  linkUrl:'https://www.imdb.com/title/tt1520211/?ref_=nv_sr_srsg_0',
  rateUrl:'https://www.imdb.com/title/tt1520211/ratings/?ref_=tt_ov_rt',
},
{
  title:'the boys',
  rating:8.7,
  year:2019,
  imageUrl:'https://efitriger.com/wp-content/uploads/2020/10/THE-BOYS-%D7%A2%D7%95%D7%A0%D7%94-2-%D7%90%D7%9E%D7%96%D7%95%D7%9F-%D7%A4%D7%A8%D7%99%D7%99%D7%9D-%D7%95%D7%99%D7%93%D7%90%D7%95.jpg',
  linkUrl:'https://www.imdb.com/title/tt1190634/?ref_=nv_sr_srsg_5',
  rateUrl:'https://www.imdb.com/title/tt1190634/ratings/?ref_=tt_ov_rt',
}
]

console.log(_movies)

// for(let i = 1; i > 0)

// for (let index = 100
//     ; index < array.length; index++) {
//     const element = array[index];
    
    for (let index = 0; index < 100; index++) 
{
  console.log(index)
}
// }




  function sendEmail() {
    let firstName = document.querySelector('[name="firstName"]').value;
    let lastName = document.querySelector('[name="lastName"]').value;
    let email = document.querySelector('[name="email"]').value;
    let message = document.querySelector('[name="messageContent"]').value;
    let date = new Date();

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "chicotay3@gmail.com",
      Password: "02C2AEED0A715866F67E0F25727779BDA72B",
      From: "chicotay3@gmail.com",
      To: "chicotay3@gmail.com",
        Subject: `${firstName} ${lastName} שלח/ה לך הודעה מהאתר`,
        Body: `
    <b>הודעה מאת:</b> ${firstName} ${lastName}
    <br>
    <br>
    <b>כתובת איימיל של השולח:</b> ${email}
    <br>
    <br>
    <b>נשלח בתאריך:</b> ${date}
    <br>
    <br>
    <b>תוכן ההודעה:</b>
    <br>
    ${message}`
    });

    document.querySelector('#sent-success').style = 'display:block';

}


function displayImages()
{
    for (let i = 0; i < _movies.length; i++)
    {
      document.getElementById('images').innerHTML += `
      <div class="col">
          <div class="card shadow-sm">
          <img class="card-img" src="${_movies[i].imageUrl}" alt="${_movies[i].title}">
            <div class="card-body">
              <p class="card-text">Movie Name: ${_movies[i].title}</p>
              <p class="card-text">Rating: ${_movies[i].rating}</p>
              <p class="card-text">Year: ${_movies[i].year}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a class="btn btn-sm btn-secondary" href="${_movies[i].linkUrl}" target="_blank">View Movie</a>
                <a class="btn btn-sm btn-outline-secondary" href="${_movies[i].rateUrl}" target="_blank">Rate</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
}

window.onload = function() {
    displayImages();
  };