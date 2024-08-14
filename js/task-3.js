<<<<<<< HEAD
function getElementWidth(content, padding, border) {
  
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return totalWidth;
=======
function checkForSpam(message) {
  let messageAdapt = message.toLowerCase();
  if (messageAdapt.includes('spam') || messageAdapt.includes('sale')) {
    return true;
  } else {
    return false;
  }
>>>>>>> dc9fa69bf06a1d34e9a65c18704514e74ed7dacb
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
