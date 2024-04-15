class BankAccount
{
	
	constructor(AccountNumber, Depositor, Balance)
	{
	   this.AccountNumber=AccountNumber;
	   this.Depositor=Depositor;
	   this.Balance=Balance;
		
	}
	
	Deposit(Amount)
	{
	   if(Amount>0)
	   {
		 Balance=Balance+Amount;  
		   
	   }
      else	   
	  {
		  
		  console.log('Negetive Amount Is Not Allowed');
	  }
	}
	
	Withdrow (Amount)
	{
	   if (Amount>0 && Amount<=Balance)
	   {
		 Balance=Balance-  Amount
		   
	   }
        else
        {
			
			console.log('Negetive Amount Is Not Allowed and WithDraw amount must not excced Balance');
		}			
	   
		
	}
	
	GetBalance()
	{
		  return Balance;
		
	}
	
	PrintAccountInfo()
	{
	  console.log('AccountNumber is:{AccountNumber}');
      console.log('Depositor is:{Depositor}');	
       console.log('Balance is:{Balance}');  
		
	}
	
}

// Creating two instances of the BankAccount class
const FirstAccount = new BankAccount(4127, "Rabiul", 500);
const SecondAccount = new BankAccount(4128, "Hasan", 300);

// Demonstrating the functionality
FirstAccount.PrintAccountInfo();  // Should show initial account info
FirstAccount.Deposit(200);          // Depositing into John's account
FirstAccount.Withdrow(100);         // Withdrawing from John's account
FirstAccount.PrintAccountInfo();  // Show account info after transactions

SecondAccount.PrintAccountInfo();  // Show Mary's initial account info
SecondAccount.Deposit(500);          // Mary deposits an amount
SecondAccount.Withdrow(1000);        // Attempting to withdraw more than balance
SecondAccount.PrintAccountInfo(); 