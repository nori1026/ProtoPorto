$("#contactForm").submit(function(e) {
  var name = document.getElementById("inputName"),
    email = document.getElementById("inputEmail"),
    phone = document.getElementById("inputPhone"),
    message = document.getElementById("inputMessage");

  if (!name.value || !email.value || !message.value || !phone.value) {
    alertify.error("Please check your entries");
  } else {
    $.ajax({
      url: "https://formspree.io/djokazaki@gmail.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });
    e.preventDefault();
    $(this)
      .get(0)
      .reset();
    alertify.success("Message sent");
  }
});
