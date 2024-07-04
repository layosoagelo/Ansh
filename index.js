document.addEventListener("DOMContentLoaded", function() {
            const products = [
              { id: 1, price: 27000.00 },
              { id: 2, price: 37000.00 },
              { id: 3, price: 50000.00 },
              { id: 4, price: 60000.00 },
              { id: 5, price: 40000.00 },
              { id: 6, price: 45000.00 },
              { id: 7, price: 30000.00 },
              { id: 8, price: 35000.00 },
              { id: 9, price: 45000.00 },
              { id: 10, price: 40000.00 }
              ];
          
            function calculateTotal() {
              let total = 0;
              let orders = "";
          
              products.forEach(product => {
                const qty = document.getElementById(qty${product.id}).value;
                if (qty && qty > 0) {
                  const subTotal = qty * product.price;
                  total += subTotal;
                  orders += Product ${product.id}: Quantity: ${qty}, Subtotal: ${subTotal.toFixed(2)}\n;
                }
              });
          
              document.getElementById("total").value = total.toFixed(2);
              document.getElementById("carts").value = orders;
            }
          
            function calculateChange() {
              const total = parseFloat(document.getElementById("total").value);
              const cash = parseFloat(document.getElementById("cash").value);
          
              if (!isNaN(total) && !isNaN(cash) && cash >= total) {
                const change = cash - total;
                document.getElementById("change").value = change.toFixed(2);
              } else {
                document.getElementById("change").value = "Insufficient Cash";
              }
            }
          
            window.calculateTotal = calculateTotal;
            window.calculateChange = calculateChange;
          });
