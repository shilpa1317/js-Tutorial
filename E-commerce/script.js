// HTML madhun product  cha input ghetoy
//queryselector use kela because aapan queryselector() use krun multipal ways ne element assecs kr shakto  && aapan document.getelementbyId()use kru shakto
const NameInputElmt = document.querySelector("#productName")
const descriptionInputElmt = document.querySelector("#productDescription")
const priceInputElmt = document.querySelector("#productPrice")
const imagePathInputElmt = document.querySelector("#productImage")
// HTML madhun Add New Product button ghetoy
const addNewBtnElmt = document.querySelector("#addNewBtn")
// HTML madhun products render karnyasathi div ghetoy
const renderProductsElmt = document.querySelector("#renderProducts")
const renderCartElmt = document.querySelector("#renderCart")
const amtDetailsElmt = document.querySelector("#amtDetails")
const priceDisInputElmt = document.querySelector("#priceDisInput")
 const likeElmt=document.querySelector("#heartLength")

// Products store karnyasathi empty array banavla
const products = []
// Cart madhle products store karnyasathi empty array banavla
const cart = []
// LocalStorage madhun products cha data ghenyasathi function banavla
function getProductsFromLocal() {
    // b87Products navane save kelela data localStorage madhun ghetoy
    // JSON.parse mule string parat JavaScript array/object madhe convert hoto
    // Data nasel tar empty array [] return karto
    return JSON.parse(localStorage.getItem("b87Products")) || []
}
// LocalStorage madhun cart cha data ghenyasathi function banavla
function getCartFromLocal() {

    // b87Cart key madhla data localStorage madhun ghetoy
    // JSON.parse mule string parat JavaScript array madhe convert hoto
    // Data nasel tar empty array [] return karto
    return JSON.parse(localStorage.getItem("b87Cart")) || []

}
// Products localStorage madhe save karnyasathi function banavla
function saveToLocalProducts(p = products) {

    // Products array la JSON string madhe convert karun
    // b87Products ya key khali localStorage madhe save karto
    localStorage.setItem("b87Products", JSON.stringify(p))

}
// Cart localStorage madhe save karnyasathi function banavla
function saveToLocalCart(c) {

    // Cart array la JSON string madhe convert karun
    // b87Cart ya key khali localStorage madhe save karto
    localStorage.setItem("b87Cart", JSON.stringify(c))
}
// New product add karnyasathi function banavla
function addNewProducst() {

    // New product cha object tayar karto
    const newProduct = {
        id: Date.now(),// each product get unique id
        name: NameInputElmt.value,
        description: descriptionInputElmt.value,
        price: Number(priceInputElmt.value),
        imgPath: imagePathInputElmt.value,
        discount: Number(priceDisInputElmt.value)
    }

    // New product tayar zala ka te check karto
    console.log("NEW PRODUCT:", newProduct)
    // LocalStorage madhun existing products ghetoy
    const prodFromLocal = getProductsFromLocal()
    // Existing products madhe new product add karto
    prodFromLocal.push(newProduct)
    // Updated products localStorage madhe save karto
    saveToLocalProducts(prodFromLocal)
    // Save zala ka te check karto
    console.log(
        "SAVED PRODUCTS:",
        localStorage.getItem("b87Products")
    )
    // Product add zalyanantar input fields clear karto
    NameInputElmt.value = ''
    descriptionInputElmt.value = ''
    priceInputElmt.value = ''
    priceDisInputElmt.value = ''
    imagePathInputElmt.value = ''
    // Product add zalyanantar products parat render karto
    renderProducts()

}
// Button current page var available asel tarch event add karto
if (addNewBtnElmt) {
 // Button click zalyavar addNewProducst function call karto
    addNewBtnElmt.addEventListener("click", addNewProducst)
}
// LocalStorage madhle products HTML var display karnyasathi function banavla
function renderProducts() {
   // Render karnyasathi HTML element available nasel tar function stop karto
    if (!renderProductsElmt) {
        return
    }
    // LocalStorage madhun sagle products ghetoy
    const prodFromLocal = getProductsFromLocal()
    // Pratyek product var loop chalavun tyacha HTML card tayar karto

    const likedProducts =
    JSON.parse(localStorage.getItem("b87Likes")) || [];
    renderProductsElmt.innerHTML = prodFromLocal.map((prod, i) => `

        <div class="col-12 col-md-6 col-lg-3">

            <div class="card" style="width: 16rem;">

                <!-- Current product chi image display karto -->
                <img 
                    src="${prod.imgPath}" 
                    class="card-img-top customImgCard" 
                    alt="${prod.name}"
                >

                <div class="card-body">

                    <!-- Current product cha name display karto -->
                    <h5 class="card-title">
                        ${prod.name}
                    </h5>

                    <!-- Current product chi description display karto -->
                    <p class="card-text">
                        ${prod.description}
                    </p>

                    <!-- Product chi price display karto -->
                    <p class="card-text">
                       Original price = ₹${prod.price}
                    </p>
                     <p class="card-text"> Discount price =
                        ${prod.discount} %
                    </p>

                    <!-- Product cart madhe add karnyasathi button -->
                    <button 
                        class="btn btn-primary"
                        onclick="addToCart(${prod.id})"
                    >
                        Add To Cart
                    </button>
<button class="like-btn" onclick="likeProduct(${prod.id})">
    <i id="heart-${prod.id}" class="fa-solid fa-heart"></i>
</button>

                </div>

            </div>

        </div>

    `).join("")

}
function addToCart(ID){
 const prodFromLocal = getProductsFromLocal()  
 const cartFromLocal = getCartFromLocal() 
    // Product cha ID search karun tyacha index get kartoy
 index= prodFromLocal.findIndex((p)=>p.id == ID)
 if(index == -1){
   alert("product not available")
   return
 }   // Product cart madhe already available aahe ka check kartoy
 existingprodInCartIndex = cartFromLocal.findIndex(p=> p.prodID ==ID)
    // Product already cart madhe asel tar quantity increase kartoy
 if(existingprodInCartIndex != -1){
       // Existing product chi quantity 1 ne increase kartoy
    cartFromLocal[existingprodInCartIndex].quantity +=1
           // Updated cart localStorage madhe save kartoy
    saveToLocalCart(cartFromLocal)
 }else{
     // Product array madhun selected product get kartoy
    const prodForcart =prodFromLocal.find(p=>p.id ==ID)

        // Cart madhe store karnyasathi new object create kartoy
    prod ={
        id:Date.now(),
        prodID:prodForcart.id,
        name:prodForcart.name,
        price:prodForcart.price,
        discount:prodForcart.discount,
        quantity :1
    }
    cartFromLocal.push(prod)
    saveToLocalCart(cartFromLocal)
     document.querySelector("#cartLength").textContent = cartFromLocal.length
 }
}
// Cart madhle products screen var display karnyasathi function
function renderCart(){
    let cartFromLocal = getCartFromLocal()
    const isallAvailableProds = cartFromLocal.every((p)=>p.quantity > 0)
    if(!isallAvailableProds){
        cartFromLocal = cartFromLocal.filter((p)=> p.quantity >0)

    }
        const prodFromLocal = getProductsFromLocal()
    renderCartElmt.innerHTML=cartFromLocal.map((p,i)=>`
     <tr class="align-middle">

            <!-- Product number -->
            <th scope="row">${i+1}</th>

            <!-- Product name -->
            <td>
                <strong>${p.name}</strong>
            </td>

           

            <!-- Product price -->
            <td>
                <span class="fw-semibold text-success">
                    <del>₹${p.price}</del>
                    ₹${(p.price - (p.price * p.discount / 100)).toFixed(2)}
                </span>
            </td>

            <!-- Discount -->
            <td>
                <span class="fw-semibold text-success">
                    ${p.discount}%
                </span>
            </td>

            <!-- Quantity -->
            <td>
                <div class="d-flex align-items-center gap-2">

                    <button
                        class="btn btn-sm btn-outline-secondary quantity-btn"
                        onclick="decreamentProdQuantity(${p.id})">
                        −
                    </button>

                    <span class="fw-bold px-2">
                        ${p.quantity}
                    </span>

                    <button
                        class="btn btn-sm btn-primary quantity-btn"
                        onclick="increamentProdQuantity(${p.id})">
                        +
                    </button>

                </div>
            </td>

            <!-- Total -->
            <td>
                <strong>
                    ₹${((p.price - (p.price * p.discount / 100)) * p.quantity).toFixed(2)}
                </strong>
            </td>

        </tr>
    `).join("")
// Cart empty asel tar total amount 0
if (cartFromLocal.length == 0) {

    TotalAmount = 0
    deliveryCharges = 0
    handlingCharges = 0
    cartAMT = 0
    alert("your cart is empty")
} else {

    // Cart madhlya products cha total calculate kartoy
    TotalAmount = cartFromLocal.reduce((tAmt, p) => {
        return tAmt + ((p.price-(p.price*p.discount/100)) * p.quantity)
    }, 0)
    // Delivery charges
    deliveryCharges = 30
   // Handling charges
    handlingCharges = 50
    // Final cart amount
    cartAMT = TotalAmount + deliveryCharges + handlingCharges
}
// Order amount nusar discount calculate kartoy
let discount = 0
let discountPercent = 0

if (TotalAmount > 3000) {

    // ₹3000 peksha jast order asel tar 30% discount
    discountPercent = 30
    discount = TotalAmount * 30 / 100

} else if (TotalAmount > 2000) {

    // ₹2000 peksha jast order asel tar 20% discount
    discountPercent = 20
    discount = TotalAmount * 20 / 100

} else if (TotalAmount > 1000) {

    // ₹1000 peksha jast order asel tar 10% discount
    discountPercent = 10
    discount = TotalAmount * 10 / 100
}

// Discount nantar final amount calculate kartoy
let finalAmount = TotalAmount + deliveryCharges + handlingCharges - discount
    amtDetailsElmt.innerHTML=` 
     <div class="amount-card">

        <h4>🧾 Price Details</h4>

        <div class="amount-row">
            <span>Total Amount</span>
            <span>₹${TotalAmount.toFixed(2)}</span>
        </div>

        <div class="amount-row">
            <span>Delivery Charges</span>
            <span class="text-success">₹${deliveryCharges}</span>
        </div>

        <div class="amount-row">
            <span>Handling Charges</span>
            <span>₹${handlingCharges}</span>
        </div>

        <div class="amount-row">
            <span> discount = ${discountPercent}% </span>
            <span class="text-success">- ₹${discount}</span>
        </div>

        <div class="amount-total">
            <span>Final Amount</span>
            <span>₹${finalAmount.toFixed(2)}</span>
        </div>

    </div>`
}

function decreamentProdQuantity(ID){
    const cartFromLocal = getCartFromLocal()
    const index = cartFromLocal.findIndex(p=>p.id ==ID)
    if(cartFromLocal[index].quantity>1){
    cartFromLocal[index].quantity--
    saveToLocalCart(cartFromLocal)
    renderCart()
}else{
    cartFromLocal.splice(index,1)
    saveToLocalCart(cartFromLocal)
    renderCart()


}
}
function increamentProdQuantity(ID){
    const cartFromLocal = getCartFromLocal()
    const index =cartFromLocal.findIndex(p=>p.id ==ID)

    cartFromLocal[index].quantity++
    saveToLocalCart(cartFromLocal)
    renderCart()
}

//likeitems
function renderLikedProducts() {

    const likedProductsElmt =
        document.querySelector("#likedProducts");

    if (!likedProductsElmt) {
        return;
    }

    // LocalStorage madhun products ghetoy
    const products = getProductsFromLocal();

    // LocalStorage madhun liked product IDs ghetoy
    const likedProducts =
        JSON.parse(localStorage.getItem("b87Likes")) || [];

    // Fakt liked products filter karto
    const liked = products.filter(
        (prod) => likedProducts.includes(prod.id)
    );

    // Ekahi product liked nasel tar
    if (liked.length === 0) {

        likedProductsElmt.innerHTML = `
            <div class="text-center">
                <h4>No liked products ❤️</h4>
            </div>
        `;

        return;
    }

    // Liked products display karto
    likedProductsElmt.innerHTML = liked.map((prod) => `

        <div class="col-12 col-md-6 col-lg-3 mb-4">

            <div class="card" style="width: 16rem;">

                <img
                    src="${prod.imgPath}"
                    class="card-img-top customImgCard"
                    alt="${prod.name}"
                >

                <div class="card-body">

                    <h5 class="card-title">
                        ${prod.name}
                    </h5>

                    <p class="card-text">
                        ${prod.description}
                    </p>

                    <p class="card-text">
                        ₹${prod.price}
                    </p>

                                        <button 
                        class="btn btn-primary"
                        onclick="addToCart(${prod.id})"
                    >
                        Add To Cart
                    </button>

                    <button
                        class="like-btn"
                        onclick="likeProduct(${prod.id})"
                    >
                        <i
                            id="heart-${prod.id}"
                            class="fa-solid fa-heart liked"
                        ></i>
                    </button>
                    

                </div>

            </div>

        </div>

    `).join("");
}

function likeProduct(productId) {

    let likedProducts =
        JSON.parse(localStorage.getItem("b87Likes")) || [];

    const heart = document.querySelector(`#heart-${productId}`);

    if (!likedProducts.includes(productId)) {
        likedProducts.push(productId);
        if (heart) {
            heart.classList.add("liked");
        }
    } else {

        likedProducts = likedProducts.filter(
            (id) => id !== productId
        );

        if (heart) {
            heart.classList.remove("liked");
        }
    }
    localStorage.setItem(
        "b87Likes",
        JSON.stringify(likedProducts)
    );
if (likeElmt) {
    likeElmt.textContent = likedProducts.length;
}
}
function updateLikeCount() {

    let likedProducts =
        JSON.parse(localStorage.getItem("b87Likes")) || [];

if (likeElmt) {
    likeElmt.textContent = likedProducts.length;
}
  // like.html var products punha render kar
    renderLikedProducts();
}

// Page complete load zalyavar ha code run karto
window.addEventListener("load", () => {
     // Page load zala ka te check karto
    console.log("WINDOW LOAD WORKING")
    // LocalStorage madhun products ghetoy
    const prodFromLocal = getProductsFromLocal()
    // LocalStorage madhun cart ghetoy
    const cartFromLocal = getCartFromLocal()
   // Products ani cart console madhe check karto
    console.log("PRODUCTS:", prodFromLocal)
    console.log("CART:", cartFromLocal)
    // Products localStorage madhe nasel tar empty products array save karto
    if (!prodFromLocal ) {
        saveToLocalProducts()
    }
    // Cart localStorage madhe nasel tar empty cart array save karto
    if (!cartFromLocal ) {
        saveToLocalCart(cart)
    }
   // Render element available asel tar products display karto
    if (renderProductsElmt) {
        renderProducts()
    }
    if (renderCartElmt) {
    renderCart()
}
renderLikedProducts();
updateLikeCount();
// Cart madhle total products count cart icon var display kartoy
document.querySelector("#cartLength").textContent = cartFromLocal.length
})