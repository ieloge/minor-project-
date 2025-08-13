// This file contains the JavaScript code for the NGO Donation Inventory System.
// It handles user interactions, manages the donation inventory logic, and updates the HTML dynamically.

document.addEventListener('DOMContentLoaded', () => {
    const donationForm = document.getElementById('donation-form');
    const donationList = document.getElementById('donation-list');

    donationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const donationItem = document.getElementById('donation-item').value;
        const donationQuantity = document.getElementById('donation-quantity').value;

        if (donationItem && donationQuantity) {
            addDonationToList(donationItem, donationQuantity);
            donationForm.reset();
        } else {
            alert('Please fill in both fields.');
        }
    });

    function addDonationToList(item, quantity) {
        const listItem = document.createElement('li');
        listItem.textContent = `${item} - Quantity: ${quantity}`;
        donationList.appendChild(listItem);
    }
});