const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGalaryCard = ({url, alt}) => `
<li class ="galery-item">
 <img src="${url}" alt="${alt}" width = "640">
 </li>`;
 const imagesList = document.querySelector(".gallery");

 const murkup = images.map((el) => makeGalaryCard(el)).join("");
 imagesList.insertAdjacentHTML('afterbegin', murkup);

 const galery = document.querySelector('ul');
 console.log(galery);
 galery.style.listStyle = "none";
 galery.style.display = "flex"; 
 galery.style.flexDirection = "column";
 galery.style.gap = "100px";
