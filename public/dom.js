const buttonNavigation = document.getElementById("button-menu");
const navigation = document.getElementById("navigation-menu");

buttonNavigation.addEventListener("click", () => {
  navigation.classList.toggle("hidden");
  buttonNavigation.classList.toggle("bg-greylight");
});