const orderForm = document.getElementById("orderForm");
const orderItems = document.getElementById("orderItems");
const addItemButton = document.getElementById("addItem");


// Add another product
addItemButton.addEventListener("click", function () {

    const newItem = document.createElement("div");

    newItem.className = "order-item";

    newItem.innerHTML = `
        <hr>

        <div class="form-group">

            <label>
                Item / Product *
            </label>

            
<select class="item-name" required>
    <option value="">Select a product</option>
    <option value="MDF Board">MDF Board</option>
    <option value="Plywood">Plywood</option>
    <option value="Floating Panels">Floating Panels</option>
    <option value="Drawer Runners">Drawer Runners</option>
    <option value="Cabinet Hinges">Cabinet Hinges</option>
    <option value="Handles">Handles</option>
    <option value="Screws">Screws</option>
    <option value="Nails & Pins">Nails & Pins</option>
    <option value="PVC Edge Bands">PVC Edge Bands</option>
    <option value="Other / Not Listed">Other / Not Listed</option>
</select>
            <input
    type="text"
    class="other-product"
    placeholder="Please specify the product you need"
    style="display: none;"
>

        </div>


        <div class="form-row">

            <div class="form-group">

                <label>
                    Quantity *
                </label>

                <input
                    type="number"
                    class="item-quantity"
                    min="1"
                    placeholder="Quantity"
                    required
                >

            </div>


            <div class="form-group">

                <label>
                    Size / Specification
                </label>

                <input
                    type="text"
                    class="item-specification"
                    placeholder="Example: 35mm"
                >

            </div>

        </div>

        <button
            type="button"
            class="remove-item">
            Remove Item
        </button>
    `;


    orderItems.appendChild(newItem);
setupProductSelector(newItem);
});


// Remove an item
orderItems.addEventListener("click", function (event) {

    if (event.target.classList.contains("remove-item")) {

        event.target.closest(".order-item").remove();

    }

});

function setupProductSelector(item) {

    const productSelect = item.querySelector(".item-name");
    const otherProduct = item.querySelector(".other-product");

    productSelect.addEventListener("change", function () {

        if (productSelect.value === "Other / Not Listed") {

            otherProduct.style.display = "block";
            otherProduct.required = true;

        } else {

            otherProduct.style.display = "none";
            otherProduct.required = false;
            otherProduct.value = "";

        }

    });

}document.querySelectorAll(".order-item").forEach(function (item) {
    setupProductSelector(item);
});
// Submit order
orderForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const customerName =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const address =
        document.getElementById("address").value.trim();

    const details =
        document.getElementById("details").value.trim();


    const items =
        document.querySelectorAll(".order-item");


    let orderList = "";


    items.forEach(function (item, index) {

        const name =
            item.querySelector(".item-name").value.trim();

        const quantity =
            item.querySelector(".item-quantity").value.trim();

        const specification =
            item.querySelector(".item-specification").value.trim();


        orderList +=
            `\n${index + 1}. ${name}` +
            `\n   Quantity: ${quantity}` +
            `\n   Specification: ${specification || "Not specified"}\n`;

    });


    const whatsappNumber = "2349121293089";


    const message =
`*NEW ORDER - ALAMIN GLOBAL FITTINGS*

*CUSTOMER INFORMATION*

Name: ${customerName}
Phone: ${phone}
Email: ${email || "Not provided"}

Delivery Address:
${address}

*ORDER ITEMS*
${orderList}

*ADDITIONAL DETAILS*
${details || "None"}

Please confirm availability, prices and delivery arrangements.

Thank you.`;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.location.href = whatsappURL;

});
