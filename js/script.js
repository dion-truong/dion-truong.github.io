

// Wacht tot de DOM volledig is geladen

document.addEventListener("DOMContentLoaded", (event) => {
    function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /*loop through a collection of all HTML elements:*/
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
          elmnt = z[i];
          /*search for elements with a certain atrribute:*/
          file = elmnt.getAttribute("w3-include-html");
          if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /*remove the attribute, and call this function once more:*/
                elmnt.removeAttribute("w3-include-html");
                includeHTML();
              }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
          }
        }
      }

      includeHTML();

    // Functie om een specifieke dropdown te openen of te sluiten
    function toggleDropdown(button) {
        var dropdownContent = button.nextElementSibling;

        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    }

    // Eventlistener om te reageren op klikken op dropdownknoppen
    var dropdownButtons = document.querySelectorAll(".dropbtn");
    dropdownButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            toggleDropdown(button);
        });
    });

    // Sluit de dropdown als er ergens anders op de pagina wordt geklikt
    window.addEventListener("click", function (event) {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function (dropdown) {
            if (event.target !== dropdown && event.target !== button) {
                dropdown.style.display = "none";
            }
        });
    });
});

