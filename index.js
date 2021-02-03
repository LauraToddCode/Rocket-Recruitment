$( "div.menuDropbtnDesktop" ).click(function() { var x = document.getElementById("navList");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
        $( "ul" ).slideToggle( "slow" );
      });

      function myMenuDropdown() {
        document.getElementById("menuDropbtnDesktop").classList.toggle("show");
        }