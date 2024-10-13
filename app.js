document.addEventListener('DOMContentLoaded', function() {
  const solveBtn = document.getElementById('solveBtn');
  const expressionInput = document.getElementById('expression');

  // Listen for button click
  solveBtn.addEventListener('click', solve);

  // Listen for "Enter" key press
  expressionInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          solve(); // Call the solve function when "Enter" is pressed
      }
  });
});

function solve() {
  // Get the expression from the input field
  let expression = document.getElementById('expression').value;

  // Replace percentage syntax with math.js compatible format
  expression = expression.replace(/(\d+)%/g, '($1 / 100)'); // Converts '20%' to '(20 / 100)'

  // Check if the expression is an equation
  if (expression.includes('=')) {
      const result = solveForX(expression);
      document.getElementById('result').innerText = `Result: ${result}`;
  } else {
      try {
          // Use math.js to evaluate the expression
          const result = math.evaluate(expression);
          
          // Display the result
          document.getElementById('result').innerText = `The result of ${expression} is: ${result}`;
      } catch (err) {
          // Display error message if the expression is invalid
          document.getElementById('result').innerText = 'Study Your Self Im Not Genius I Cant Solve Everything';
      }
  }
}

// Function to solve equations for x
function solveForX(equation) {
  const variable = 'x';
  
  try {
      const solution = math.solve(equation, variable);
      return `x = ${solution}`;
  } catch (error) {
      return 'Error: Study Your Self Im Not Genius I Cant Solve Everything';
  }
}
