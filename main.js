





  // Get the user's name.
  const name = prompt("What is your name?");

  // Get the user's PIN.
  const pin = prompt("Enter your PIN:");

  // Ask the user what they want to do.
  const option = prompt("What would you like to do? \n1.Withdrawal \n2.Deposit \n3.Balance Inquiry\n4.  Exit");

  // Check if the user entered a valid option.
  if (option === "1" || option === "2" || option === "3" || option === "4") {
    // The user entered a valid option.
    // Do something based on the user's choice.
    if (option === "1") {
      // Withdrawal.
      const withdrawAmount = prompt("Enter the amount you want to withdraw:");
      const availableBalance = 100;
      if (withdrawAmount > availableBalance) {
        alert("Insufficient balance.");
      } else {
        alert("You have withdrawn $" + withdrawAmount);
      }
    } else if (option === "2") {
      // Deposit.
      const depositAmount = prompt("Enter the amount you want to deposit:");
      alert("You have deposited $" + depositAmount);
    } else if (option === "3") {
      // Balance inquiry.
      alert("Your balance is $100.");
    } else {
      // Exit.
      alert("Thank you for using our ATM.");
    }
  } else {
    // The user entered an invalid option.
    alert("Invalid option.");
  }


// console.log(name);


























