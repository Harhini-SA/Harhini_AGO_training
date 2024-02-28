const apiLink ='https://fakestoreapi.com/products';


axios
.get(apiLink)
.then((response) =>{
    console.log(response);
    Display(response?.data);
})

.catch((err) => {
    console.log(err);
});

function Display(data){
    console.table(data);
    const p1 = data[0]; 
    const show1 = document.getElementById("root");
    show1.innerHTML = `<img src = "${p1?.image}"/>`;
    const rate1 = document.getElementById("amt1");
    rate1.innerHTML = `<h2>price: ${p1?.price}</h2>`;

    
    const p2 = data[8];
    const show2 = document.getElementById("root2");
    show2.innerHTML = `<img src = "${p2?.image}"/>`;
    const rate2 = document.getElementById("amt2");
    rate2.innerHTML = `<h2>price: ${p2?.price}</h2>`;

   
    const p3 = data[5];
    const show3 = document.getElementById("root3");
    show3.innerHTML = `<img src = "${p3?.image}"/>`;
    const rate3 = document.getElementById("amt3");
    rate3.innerHTML = `<h2>price: ${p3?.price}</h2>`;

    
    const p4 = data[7];
    const show4 = document.getElementById("root4");
    show4.innerHTML = `<img src = "${p4?.image}"/>`;
    const rate4 = document.getElementById("amt4");
    rate4.innerHTML = `<h2>price: ${p4?.price}</h2>`;

    
    const p5 = data[10];
    const show5 = document.getElementById("root5");
    show5.innerHTML = `<img src = "${p5?.image}"/>`;
    const rate5 = document.getElementById("amt5");
    rate5.innerHTML = `<h2>price: ${p5?.price}</h2>`;

    
    const p6 = data[17];
    const show6 = document.getElementById("root6");
    show6.innerHTML = `<img src = "${p6?.image}"/>`;
    const rate6 = document.getElementById("amt6");
    rate6.innerHTML = `<h2>price: ${p6?.price}</h2>`;
}