var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

var bestSolutions = []; // Define bestSolutions array here

var highScore = printAndGetHighScore(scores);
//console.log(bestSolutions);

var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);

function printAndGetHighScore(scores) {
    var highScore = 0;
    var output;

    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i +" score: " + scores[i];
        

        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    
    return highScore;
}

function getBestResults(scores, highScore) {
    var bestSolutions = [];

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

var bestSolutions = getBestResults(scores, highScore);

function getMostCostEffectiveSolution(scores, costs, highScore) {
    var cost = 100; 
    var lowCostIndex = null; // Initialize lowCostIndex to null

    for (var i = 0; i < bestSolutions.length; i++) {
        var solutionIndex = bestSolutions[i];
        console.log("Solution index:", solutionIndex); // Check the solution index being considered
        console.log("Cost of solution:", costs[solutionIndex]); // Check the cost of the solution

        if (cost > costs[solutionIndex]) {
            lowCostIndex = solutionIndex;
            cost = costs[solutionIndex];
        }
    }

    console.log("Lowest cost index:", lowCostIndex); // Check the lowest cost index found
    return lowCostIndex;
}

// Create HTML content to display
var html = "Highest bubble score: " + highScore + "<br>";
html += "Most cost-effective solution: Bubble Solution #" + mostCostEffective;

// Set innerHTML of demo element
document.getElementById("demo").innerHTML = html;