//Electricity Consumption Classifier
function classifier() {
    let input = Number (document.getElementById("KWH_").value);

    switch (true) {
        case (input > 501):
            document.getElementById("output").innerHTML = 'Very High Consumption: Heavy electricity users';
            break;
        case (input > 301):
            document.getElementById("output").innerHTML = 'High Consumption: Higher electricity usage';
            break;
        case (input > 201):
            document.getElementById("output").innerHTML = 'Average Consumption: Typical electricity usage';
            break;
        case (input > 100):
            document.getElementById("output").innerHTML = 'Low Consumption: Normal residential rate';
            break;
        case (input >= 1):
            document.getElementById("output").innerHTML = 'Lifeline Consumer: Discounted electricity rates';
            break;
        default:
            document.getElementById("output").innerHTML = 'Invalid Output';
            break;
    }
}
