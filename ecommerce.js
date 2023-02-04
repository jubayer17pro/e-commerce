// Get all buttons
const buttons = document.querySelectorAll("button");

// Add click event listener to each button
buttons.forEach(button => {
  button.addEventListener("click", event => {
    // Get the item name and price
    const itemName = event.target.parentElement.querySelector("h3").textContent;
    const itemPrice = event.target.parentElement.querySelector("p:last-of-type").textContent;

    // Add the item to the shopping cart
    addToCart(itemName, itemPrice);
  });
});

// Add an item to the shopping cart
function addToCart(name, price) {
  console.log(`Added to cart: ${name} (${price})`);
}
