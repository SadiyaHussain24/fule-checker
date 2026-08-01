function calculateFuel() {
    // Inputs se values lena
    let distance = parseFloat(document.getElementById("distance").value);
    let mileage = parseFloat(document.getElementById("mileage").value);
    let price = parseFloat(document.getElementById("price").value);

    let resultsBox = document.getElementById("resultsBox");
    let fuelNeededText = document.getElementById("fuelNeeded");
    let totalCostText = document.getElementById("totalCost");

    // Validation check karna taaki khali fields par error na aaye
    if (isNaN(distance) || isNaN(mileage) || isNaN(price) || distance <= 0 || mileage <= 0 || price <= 0) {
        alert("Please enter valid positive numbers in all fields!");
        return;
    }

    // Calculations
    // 1. Kitna fuel chahiye = Distance / Mileage
    let litersNeeded = distance / mileage;
    
    // 2. Total cost = Fuel Needed * Petrol Price
    let totalCost = litersNeeded * price;

    // UI par data update karna (toFixed(2) se decimal ke baad sirf 2 numbers dikhte hain)
    fuelNeededText.innerHTML = litersNeeded.toFixed(2) + " Liters";
    totalCostText.innerHTML = "Rs. " + Math.round(totalCost); // Round figure cost ke liye

    // Results box ko smoothly display karna
    resultsBox.style.display = "flex";
}