document.getElementById("packagesBtn").addEventListener("click", function() {
    document.getElementById("packagesSection").classList.remove("d-none");
    document.getElementById("toursSection").classList.add("d-none");

    // Toggle active button styles
    this.classList.add("btn-dark");
    this.classList.remove("btn-outline-dark");
    document.getElementById("toursBtn").classList.remove("btn-dark");
    document.getElementById("toursBtn").classList.add("btn-outline-dark");
});

document.getElementById("toursBtn").addEventListener("click", function() {
    document.getElementById("toursSection").classList.remove("d-none");
    document.getElementById("packagesSection").classList.add("d-none");

    // Toggle active button styles
    this.classList.add("btn-dark");
    this.classList.remove("btn-outline-dark");
    document.getElementById("packagesBtn").classList.remove("btn-dark");
    document.getElementById("packagesBtn").classList.add("btn-outline-dark");
});


function updateTime() {
    const timeIcon = document.getElementById("timeIcon");
    const selectedTime = document.getElementById("timeDropdown").value;

    if (selectedTime === 'day') {
        timeIcon.className = "fa-solid fa-sun";

    } else if (selectedTime === 'evening') {
        timeIcon.className = "fa-solid fa-cloud-sun";
    } else if (selectedTime === 'night') {
        timeIcon.className = "fa-solid fa-moon";
    }
}