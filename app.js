document.addEventListener('DOMContentLoaded', function() {
  const solveBtn = document.getElementById('solveBtn');
  
  solveBtn.addEventListener('click', solve);
});

function solve() {
  // Get the expression from the input field
  let expression = document.getElementById('expression').value;

  // Replace percentage syntax with math.js compatible format
  expression = expression.replace(/(\d+)%/g, '($1 / 100)'); // Converts '20%' to '(20 / 100)'

  try {
      // Use math.js to evaluate the expression
      const result = math.evaluate(expression);
      
      // Display the result
      document.getElementById('result').innerText = `The result of ${expression} is: ${result}`;
  } catch (err) {
      // Display error message if the expression is invalid
      document.getElementById('result').innerText = 'Error: Invalid expression';
  }
}
