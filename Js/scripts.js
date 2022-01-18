let selectedToppings = []

const totalCostBox = document.getElementById('total-cost')
const toppingsCostBox = document.getElementById('toppings-cost')
const cheeseCostBox = document.getElementById('cheese-cost')
const gstCostBox = document.getElementById('gst-cost')
const grandCostBox = document.getElementById('grand-cost')
const quantity = document.getElementById('quantity')
const toppingDivs = document.querySelectorAll('.topping')
const crustDivs = document.querySelectorAll('.crust')

const toppingPrices = {
  mushroom: 50,
  onion: 60,
  paneer: 70,
  paparika: 80,
  jalapeno: 90,
  greenOlives: 60,
  goldenCorn: 70,
  capsicum: 45,
  periPeriChicken: 40,
  barbeque: 50,
  sausage: 20,
  chickenTikka: 75,
  grilledChickenRasher: 30
}

const crustPrices = {
  classicHandTossed: 35,
  cheeseBurst: 25,
  wheatThinCrust: 40,
  freshPan: 30,
  newHandTossed: 45
}

let totalCost, toppingsCost, cheeseCost, gstCost, grandCost;

const RN = num => { return Math.round(num * 100) / 100 }
const toggleClass = (item, c) => {
  item.classList.contains(c) ? item.classList.remove(c) : item.classList.add(c)
}
const camelize = str => {
  return str.toLowerCase().replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
    return index == 0 ? letter.toLowerCase() : letter.toUpperCase()
  }).replace(/\s+/g, '')
}

// TOPPING SELECTION (AS MANY AS YOU WANT)
toppingDivs.forEach(div =>
  div.addEventListener('click', e => {
    let target = e.target

    if (!(target.classList.contains('topping'))) {
      target = target.parentNode
    }

    toggleClass(target, 'on-the-pizza')
    let toppingName = target.querySelector('span').innerText;

    if (target.classList.contains('on-the-pizza')) {
      selectedToppings.push(toppingName)
    }
    else {
      selectedToppings.splice(selectedToppings.indexOf(toppingName), 1)
    }
    updateBill()
    updateImage(selectedToppings)
  })
)

// CRUST SELECTION (ONE AT ONCE)
let selectedCrust = 'CLASSIC HAND TOSSED' // default
crustDivs.forEach(div => {
  div.addEventListener('click', e => {
    document.querySelector('.selected-crust').classList.remove('selected-crust')
    e.target.classList.add('selected-crust')
    selectedCrust = e.target.innerText
    updateBill()
  })
})

// SWITCH B/W VEG & NON-VEG
const openGenre = (e, genre) => {
  document.querySelector('.toppings-genre.active').classList.remove('active')
  e.target.classList.add('active')

  document.querySelector('.toppings-body-child.active-genre').classList.remove('active-genre');

  (genre === 'veg') ? document.querySelector('.toppings-body-veg').classList.add('active-genre') : document.querySelector('.toppings-body-non').classList.add('active-genre')
}

// UPDATING BILL
const updateBill = () => {
  let n = Number(quantity.options[quantity.selectedIndex].value)

  // CRUST BILL
  totalCost = crustPrices[camelize(selectedCrust)] * n
  totalCostBox.innerText = 'ksh' + totalCost
  // TOPPINGS BILL
  let toppingsCost = 0
  selectedToppings.forEach(item => {
    toppingsCost += toppingPrices[camelize(item)]
  })
  toppingsCost *= n
  toppingsCostBox.innerText = 'ksh' + toppingsCost
  // CHEESE
  cheeseCost = document.getElementById('extra-cheese').checked ? 15 * n : 0
  cheeseCostBox.innerText = 'ksh' + cheeseCost
  // GST
  gstCost = RN(0.05 * (cheeseCost + toppingsCost + totalCost))
  gstCostBox.innerText = 'ksh' + gstCost
  // GRAND COST
  grandCost = gstCost + cheeseCost + toppingsCost + totalCost
  grandCostBox.innerText = 'ksh' + grandCost
}
const updateImage = (toppings) => {
  document.querySelectorAll('.yes').forEach(img => img.classList.remove('yes'))
  toppings.forEach(topping => {
    toppingID = (topping.toLowerCase()).split(' ').join('-')
    document.querySelector('#' + toppingID).classList.add('yes')
  })
}
function fb() {
  alert("Your pizza(s) is arriving 30mins. Have a nice day");
}
function bb() {
  alert("Our delivery charge is ksh500 ");
  alert("Please pin your exact loaction on the map below ");
}


//what we do
$(document).ready(function(){
  $("#design").hover(function() {
    $("#des").show();
    $("#design").hide();
    $(".de").hide();
    
  });
  $("#des").mouseleave(function() {
    $("#design").show();
    $("#des").hide();
    $(".de").show();
      
  }); 
});
$(document).ready(function() {
  $("#dev").hover(function() {
    $("#deve").show();
    $("#dev").hide();
    $(".de").hide();
  });
  $("#deve").mouseleave(function() {
    $("#dev").show();
    $("#deve").hide();
    $(".de").show();  
  }); 
});
$(document).ready(function() {
  $("#producti").hover(function() {
    $("#product").show();
    $("#producti").hide();
    $(".de").hide();
  });
  $("#product").mouseleave(function() {
    $("#producti").show();
    $("#product").hide();
    $(".de").show();
      
  }); 
});
// contact validation
// getting the name from form
$(document).ready(function() {
  $("#submit").click (function(event) {
    console.log("working")
    event.preventDefault();
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var text=document.getElementById("text").value;
    // form validation
    if (name == ""){
      alert("Please enter your name");
      return false;
    }else if(email == ""){
      alert("Please enter your email")
      return false;
    }else if(text == ""){
      alert("Please give a feedback")
      return false;
    }else {
      alert(name + " your message is received. Thank you");
    }
    document.getElementById("form1").reset();
  });
});
