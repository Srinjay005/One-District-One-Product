
function get_districts() {
  state_selected = document.getElementById("states_select").value;
  const districts_select = document.getElementById("districts_select");
  districts_select.innerHTML = "";
  states_districts.states.filter((stateObj) => {
    if (state_selected === stateObj.state) {
      districts = stateObj.districts;
      return districts;
    }
    return;
  })
  districts.map((district) => {
    var option = document.createElement("option");
    option.value = district;
    option.text = district;
    districts_select.add(option);
    return option;
  })
  district_change_handler();
}
function create_product_card(products, product_grid) {
  products.map((product, index) => {
    var product_demo = document.getElementById("product_demo");
    const clone = product_demo.cloneNode(true);
    clone.id = "product_" + index;
    clone.hidden = false;
    clone.getElementsByTagName("h5")[0].innerHTML = product.name;
    clone.getElementsByTagName("h6")[0].innerHTML = product.price;
    clone.getElementsByTagName("p")[0].innerHTML = product.description;
    clone.getElementsByTagName("img")[0].src = product.img;//changes
    product_grid.appendChild(clone);
    if ((index + 1) % 4 == 0) {
      var new_row_demo = document.getElementById("new_row_demo");
      const new_row_clone = new_row_demo.cloneNode(true);
      new_row_clone.id = "new_row_" + index;
      new_row_clone.hidden = false;
      product_grid.appendChild(new_row_clone);
    }
    return clone;
  });
  return;
}


function district_change_handler() {
  district_selected = document.getElementById("districts_select").value;
  console.log(district_selected);
  products = districts_products.states.filter(state => state.state == state_selected)[0].districts.filter(district => district.district == district_selected)[0].products;
  const product_grid = document.getElementById("product_grid");
  product_grid.innerHTML = "";
  create_product_card(products, product_grid);
  return;
}

window.onload = function() {
  var states = [];
  var districts = [];
  var products = [];
  var district_selected;
  var state_selected;
  const states_select = document.getElementById("states_select");
  states = states_districts.states.map((state) => {
    const state_name = state.state;
    var option = document.createElement("option");
    option.value = state_name;
    option.text = state_name;
    states_select.add(option);
    return state_name;
  });
  state_selected = document.getElementById("states_select").value;
  get_districts(state_selected);
  console.log(district_selected);
}





function mydist() {
  window.location.href = `${district_selected}.html`;
}


function addToCart() {

}






// function mydist() {
//     var states = [];
//     var districts = [];
//     var district_selected;
//     var state_selected;
//     const states_select = document.getElementById("states_select");
//     states = states_districts.states.map((state) => {
//         const state_name = state.state;
//         var option = document.createElement("option");
//         option.value = state_name;
//         option.text = state_name;
//         states_select.add(option);
//         return state_name;
//     });
//     state_selected = document.getElementById("states_select").value;
//     get_districts(state_selected);
//     console.log(district_selected);
// }