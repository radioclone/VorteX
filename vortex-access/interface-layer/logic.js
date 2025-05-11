// Add event listeners for postMessage communication
window.addEventListener('message', (e) => {
  if (e.data.name === 'RollDice') {
    // Replace with actual dice trigger
    console.log('Spline requested dice roll');
  }
});