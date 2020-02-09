var headOne=document.querySelector('#one')
var headOtwo=document.querySelector('#two')
var headthree=document.querySelector('#three')

headOne.addEventListener('mouseover' , function(){
  headOne.textContent="Mouse currently over"
  headOne.style.color="red";
})

headOne.addEventListener("mouseout", function(){
  headOne.textContent = "Hover over me"
  headOne.style.color = "black";
})

headOtwo.addEventListener('click', function(){
  headOtwo.textContent = 'Clicked on';
  headOtwo.style.color = 'blue';
})
headthree.addEventListener('dblclick',function(){
  headthree.textContent = 'I was double clicked!';
  headthree.style.color = 'red';
})
