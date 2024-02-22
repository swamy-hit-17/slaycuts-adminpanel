// ==================== OTP JS START =====================


const inputs = document.querySelectorAll(".otp-field > input");
const button = document.querySelector(".otp-submit");

window.addEventListener("load", () => inputs[0].focus());
button.setAttribute("disabled", "disabled");

inputs[0].addEventListener("paste", function (event) {
  event.preventDefault();

  const pastedValue = (event.clipboardData || window.clipboardData).getData(
    "text"
  );
  const otpLength = inputs.length;

  for (let i = 0; i < otpLength; i++) {
    if (i < pastedValue.length) {
      inputs[i].value = pastedValue[i];
      inputs[i].removeAttribute("disabled");
      inputs[i].focus;
    } else {
      inputs[i].value = ""; // Clear any remaining inputs
      inputs[i].focus;
    }
  }
});

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }

    button.classList.remove("active");
    button.setAttribute("disabled", "disabled");

    const inputsNo = inputs.length;
    if (!inputs[inputsNo - 1].disabled && inputs[inputsNo - 1].value !== "") {
      button.classList.add("active");
      button.removeAttribute("disabled");

      return;
    }
  });
});





// ==================== OTP JS END ==========================



// ==================== SALOON IMAGE UPLOAD ===================

function handleImageUpload() {
  const input = document.getElementById('imageInput');
  const container = document.getElementById('imageContainer');
  const image = document.getElementById('uploadedImage');
  const uploadArrow = document.getElementById('upload-arrow');
  const file = input.files[0];

  if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
          image.src = e.target.result;
          container.style.display = 'block';
          input.style.display = 'none';
          uploadArrow.style.display = 'none';
      };

      reader.readAsDataURL(file);
  }
}
//++++++++++++++ Owl Caurosel +++++++++++++++++
$(document).ready(function () {
  initializeCarousel('booking-carousel-1');
  
});
function initializeCarousel(carouselId) {
  $('#' + carouselId).owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsiveClass: true,
  });
}