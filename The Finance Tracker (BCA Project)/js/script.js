"use strict";

const sidebarLinks = document.querySelectorAll(".sidebar-link");

const allSections = document.querySelectorAll(".page-section");

const sectionDashboard = document.querySelector(".dashboard-section");

const sectionIncome = document.querySelector(".income-section");

const sectionExpense = document.querySelector(".expense-section");

const addIncomeBtn = document.querySelector(".add-income-btn");

const addIncomeForm = document.querySelector(".add-income");

const formCloseBtn = document.querySelectorAll(".close");

const addExpensesForm = document.querySelector(".add-expanses");

const addExpensesBtn = document.querySelector(".add-expenses-btn");

const overlay = document.querySelector(".overlay");

// Adding and removing active class when sidebar link is clicked

sidebarLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Adding and removing hidden classes from the sections when sidebar links is clicked
    // getting data-traget attribute which matches the section id
    let targetId = link.getAttribute("data-target");

    // Hide all the section
    allSections.forEach((section) => {
      section.classList.add("hidden");
    });

    // Get the matching section with the id name
    let targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.classList.remove("hidden");
      targetSection.classList.add("fade-in");
    }

    sidebarLinks.forEach((otherLink) => {
      otherLink.classList.remove("active");
    });

    link.classList.add("active");
  });
});

addIncomeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addIncomeForm.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

addExpensesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addExpensesForm.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

formCloseBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    addExpensesForm.classList.add("hidden");
    addIncomeForm.classList.add("hidden");
    overlay.classList.add("hidden");
  });
});
