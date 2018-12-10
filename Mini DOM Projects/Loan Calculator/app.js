// Listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results
function calculateResults(e){
  console.log('Calculating...');
  // UI Variables
  const UI_amount = document.getElementById('amount');
  const UI_interest = document.getElementById('interest');
  const UI_years = document.getElementById('years');
  const UI_monthlyPayment = document.getElementById('monthly-payment');
  const UI_totalPayment = document.getElementById('total-payment');
  const UI_totalInterest = document.getElementById('total-interest');

  // parseFloat() turns them into a decimal
  const principal = parseFloat(UI_amount.value);
  const calculatedInterest = parseFloat(UI_interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(UI_years.value) * 12;

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  //isFinite() is a JS method that determines if the number is a finite number
  if (isFinite(monthly)) {
    // toFixed() tells the computer how many decimals you want
    UI_monthlyPayment.value = monthly.toFixed(2);
    UI_totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    UI_totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault(); 
}

// Show Error
function showError(error) {
  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  // example.insertBefore(whatYouWantToInsert, whereYouWantToInsertBefore);
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}