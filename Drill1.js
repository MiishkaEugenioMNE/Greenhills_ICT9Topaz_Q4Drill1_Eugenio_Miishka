//Electricity Consumption Rates
function classifier() {
    let input = Number (document.getElementById("KWH_").value).toLowerCase()

switch (true) {
    case (KWH_ <= 100):
        document.getElementById("output").innerHTML = 'Lifeline Consumer: Discounted electricity rates';
        break;
    case (KWH_ > 101 && KWH_ <= 200):
        document.getElementById("output").innerHTML = 'Low Consumption: Normal residential rate';
        break;
    case (KWH_ > 201 && KWH_ <= 300):
        document.getElementById("output").innerHTML = 'Average Consumption: Typical electricity usage';
        break;
    case (KWH_ > 301 && KWH_ <= 500):
        document.getElementById("output").innerHTML = 'High Consumption: Higher electricity usage';
        break;
    case (KWH_ > 501):
        document.getElementById("output").innerHTML = 'Very High Consumption: Heavy electricity users';
        break;
    default:
        document.getElementById("output").innerHTML = 'Invalid Output';
        break;
}
}