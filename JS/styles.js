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

  $(document).ready(function() {
    // Add click event listener to submit button
    $("#submit-btn").on("click", function() {
      // Get input values
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();

      // Show confirmation pop-up
      alert(name + ", we have received your message. Thank you for reaching out to us.");

      // Reset form fields
      $("#name").val("");
      $("#email").val("");
      $("#message").val("");
    });
  });