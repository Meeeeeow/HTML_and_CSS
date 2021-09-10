

const takeOrders = (customer,callBack) =>{
    console.log(`taker order from ${customer}`);
    callBack(customer);
}
const processOrders = (customer,callBack) =>{
    console.log(`Processing order from ${customer}`);
    setTimeout(()=>{
        console.log('Cooking completed');
        console.log(`order processed from ${customer}`);
        callBack(customer);
    },6000);
}

const completeOrder = customer =>{
    console.log(`order complete for ${customer}`);
}

takeOrders('customer2', (customer) =>{
    processOrders(customer, completeOrder);
});
console.log("Hello world"); // no execution was blocked