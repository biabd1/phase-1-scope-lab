var customerName='bob';  
function customer(){  
return(window.customerName);
}  


function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}



function setBestCustomer(){
   bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
    throw 'Assignment to constant variable.'
}