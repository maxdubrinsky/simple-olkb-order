import "./styles.css";

fetch("https://raw.githubusercontent.com/olkb/orders/master/README.md")
  .then(res => res.text())
  .then(text => {
    const rawList = text.slice(text.indexOf("1. ")).trim();

    const list = rawList
      .split("\n")
      .map(rawItem => rawItem.split(". ")[1].trim());

    const orderNumber = location.pathname.slice(1);

    document.getElementById("app").innerHTML = `
      <div class="container">
        ${
          !orderNumber
            ? "Please specify an order number."
            : `
            You are
              <div class="orderNumber">
                #${list.indexOf(location.pathname.slice(1)) + 1}
              </div>
            </div>
          `
        }
    `;
  });
