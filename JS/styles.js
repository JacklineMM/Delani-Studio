$(document).ready(function() {
    // Add click event listener to each icon
    $(".what-we-do-item").on("click", function() {
      // Toggle to display descriptive text
      $(this).find("p").slideToggle();
      // Toggle font weight of the header
      $(this).find("h4").toggleClass("bold");
    });
  });

  $(document).ready(function() {
    $(".portfolio_item").hover(
      function() {
        $(this).find(".portfolio_overlay").css("opacity", "1");
      },
      function() {
        $(this).find(".portfolio_overlay").css("opacity", "0");
      }
    );
  });