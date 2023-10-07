const firstName = document.getElementById("name");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const buttonSend = document.getElementById("buttonSend");

firstName.addEventListener("blur", () => {
  if (firstName.value.length < 3) {
    firstName.classList.remove("border-green-600");
    firstName.classList.add("border-red-600");
  } else if (firstName.value.length >= 3) {
    firstName.classList.remove("border-red-600");
    firstName.classList.add("border-green-600");
  }
});

lastName.addEventListener("blur", () => {
  if (lastName.value.length < 3) {
    lastName.classList.remove("border-green-600");
    lastName.classList.add("border-red-600");
  } else if (lastName.value.length >= 3) {
    lastName.classList.remove("border-red-600");
    lastName.classList.add("border-green-600");
  }
});

email.addEventListener("blur", () => {
  if (email.value.length <= 3) {
    email.classList.remove("border-green-600");
    email.classList.add("border-red-600");
  } else {
    email.classList.remove("border-red-600");
    email.classList.add("border-green-600");
  }
});

phone.addEventListener("blur", () => {
  if (phone.value.length < 10) {
    phone.classList.remove("border-green-600");
    phone.classList.add("border-red-600");
  } else if (phone.value.length >= 3) {
    phone.classList.remove("border-red-600");
    phone.classList.add("border-green-600");
  }
});

message.addEventListener("blur", () => {
  if (message.value.length <= 3) {
    message.classList.remove("border-green-600");
    message.classList.add("border-red-600");
  } else if (message.value.length >= 3) {
    message.classList.remove("border-red-600");
    message.classList.add("border-green-600");
  }
});

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("name").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  const buttonSend = document.getElementById("buttonSend").value;

  if (firstName.length == 0) {
    Swal.fire({
      title: "Warning",
      text: `Nama depan harus diisi!`,
      icon: "warning",
      confirmButtonText: "Kembali",
    });
    return false;
  } else if (firstName.length < 3) {
    Swal.fire({
      title: "Warning",
      text: `Nama depan terlalu singkat`,
      icon: "warning",
      confirmButtonText: "Kembali",
    });
    return false;
  } else if (lastName.length == 0) {
    Swal.fire({
      title: "Warning",
      text: `Nama belakang harus diisi!`,
      icon: "warning",
      confirmButtonText: "Kembali",
    });
    return false;
  } else if (lastName.length <= 2) {
    Swal.fire({
      title: "Warning",
      text: `Nama belakang terlalu singkat`,
      icon: "warning",
      confirmButtonText: "Kembali",
    });
    return false;
  } else if (email.length == 0) {
    Swal.fire({
      title: "Warning",
      text: `Email harus diisi!`,
      icon: "warning",
      confirmButtonText: "Kembali",
    });
    return false;
  } else if (email.length <= 3) {
    Swal.fire({
      title: "Warning",
      text: `Email terlalu singkat`,
      icon: "warning",
      confirmButtonText: "Kembali",
    });
    return false;
  } else if (phone.length == 0) {
    Swal.fire({
      title: "Warning",
      text: `Nomor telepon harus diisi!`,
      icon: "warning",
      confirmButtonText: "Kembali",
    });
    return false;
  } else if (phone.length < 10) {
    Swal.fire({
      title: "Warning",
      text: `Nomor telepon tidak valid!`,
      icon: "warning",
      confirmButtonText: "Kembali",
    });
    return false;
  } else if (message.length <= 3) {
    Swal.fire({
      title: "Warning",
      text: `Pesan harus diisi dengan jelas!`,
      icon: "warning",
      confirmButtonText: "Kembali",
    });
    return false;
  } else {
    const firstName = document.getElementById("name");
    const lastName = document.getElementById("lastname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyaqGFtA0d_brt1jdfW7OPYVzrOD-pXMjmJRheZEmcQ8OWWM850J8YiijJLAiP9Xb0qdQ/exec";
    const form = document.forms["submit-to-google-sheet"];

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("Success!", response))
      .catch((error) => console.error("Error!", error.message));
    Swal.fire({
      title: "SUCCESS",
      text: `Terimakasih, pesan anda sudah terkirim`,
      icon: "success",
      confirmButtonText: "Kembali",
    });
    firstName.classList.remove("border-green-600");
    lastName.classList.remove("border-green-600");
    email.classList.remove("border-green-600");
    phone.classList.remove("border-green-600");
    message.classList.remove("border-green-600");

    form.reset();
  }
});
