let vid = document.querySelector('.hero video');
let address = document.querySelector('#address');
//page 3 buttons
let page3 = document.querySelector('#wrap');
let leftBtn = document.querySelector('.page3 .leftBtn');
let rightBtn = document.querySelector('.page3 .rightBtn');
document.querySelector('.firstLink').addEventListener('click',() => {
  gsap.to('.mid h1 span',{
    y : '0vh',
    duration: 1,
  });
  vid.setAttribute('src','./videos/170609_C_Agra_102.mp4');
  address.innerHTML = 'Taj Mahal, Agra';
})

document.querySelector('.secondLink').addEventListener('click',() => {
  gsap.to('.mid h1 span',{
    y : '-10vh',
    duration: 1,
  });
  vid.setAttribute('src','./videos/mountains.mp4');
  address.innerHTML = 'Aravali mountains, Gujarat';
})

document.querySelector('.thirdLink').addEventListener('click',() => {
  gsap.to('.mid h1 span',{
    y : '-20vh',
    duration: 1,
  });
  vid.setAttribute('src','./videos/tiger_video.mp4')
  address.innerHTML = 'Ranthambore Park, Rajasthan';
})

document.querySelector('.fourthLink').addEventListener('click',() => {
  gsap.to('.mid h1 span',{
    y : '-30vh',
    duration: 1,
  });
  vid.setAttribute('src','./videos/waterfalls.mp4');
  address.innerHTML = 'Kerala Waterfalls, Karnataka';
})

leftBtn.addEventListener('click',() => {
  leftBtn.classList.toggle('active');
  gsap.to(page3,{
    x: '0vh',
    duration: 1
  })
  rightBtn.classList.toggle('active');
})

rightBtn.addEventListener('click',() => {
  rightBtn.classList.toggle('active');
  gsap.to(page3,{
    x: '-40vh',
    duration: 1
  })
  leftBtn.classList.toggle('active');
})