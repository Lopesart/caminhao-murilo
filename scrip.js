  function toggleMenu() {
    var menu = document.getElementById('men');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  };

  function mostrarLinks() {
    var linksDiv = document.getElementById("links");

    if (linksDiv.style.display === "none") {
      linksDiv.style.display = "block";
    } else {
      linksDiv.style.display = "none";
    }
  }

  function scrollToDiv1() {
    var div = document.getElementById("p1");
    div.scrollIntoView({ behavior: 'smooth' });
  };

  
  function scrollToDiv2() {
    var div = document.getElementById("p2");
    div.scrollIntoView({ behavior: 'smooth' });
  };

  
  function scrollToDiv3() {
    var div = document.getElementById("p3");
    div.scrollIntoView({ behavior: 'smooth' });
  };

  
  function scrollToDiv4() {
    var div = document.getElementById("p4");
    div.scrollIntoView({ behavior: 'smooth' });
  };

  

