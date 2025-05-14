const calculateButton = document.getElementById("calculate-age");
const dateInput = document.getElementById("date");
const resultContainer = document.querySelector(".result-container");

calculateButton.addEventListener("click", calculateAge);

function calculateAge() {
	if (!dateInput.value) {
		alert("Please select a valid birth date.");
		return;
	}

	const birthDate = new Date(dateInput.value);
	const today = new Date();

	if (birthDate > today) {
		alert("Birth date cannot be in the future.");
		return;
	}

	const birthYear = birthDate.getFullYear();
	const birthMonth = birthDate.getMonth() + 1; // 0-indexed
	const birthDay = birthDate.getDate();

	const currentYear = today.getFullYear();
	const currentMonth = today.getMonth() + 1;
	const currentDay = today.getDate();

	let ageYears = currentYear - birthYear;
	let ageMonths = currentMonth - birthMonth;
	let ageDays = currentDay - birthDay;

	if (ageDays < 0) {
		const previousMonth = new Date(currentYear, currentMonth - 1, 0);
		const daysInPreviousMonth = previousMonth.getDate();
		ageDays += daysInPreviousMonth;
		ageMonths--;
	}

	if (ageMonths < 0) {
		ageYears--;
		ageMonths += 12;
	}

	document.getElementById("years").textContent = ageYears;
	document.getElementById("months").textContent = ageMonths;
	document.getElementById("days").textContent = ageDays;

	resultContainer.classList.remove("hidden");
}
