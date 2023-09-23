// function validateEmail(email) {
//   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//   return emailRegex.test(email);
// }

function validateEmail(email) {
  if (!email) return false;
  if (email.indexOf('@') === -1) return false;
  
  const [local, domain] = email.split('@');
  if(local.length === 0 || local.length > 64) return false;
  if(domain.length < 3 || domain.length > 255) return false;
  
  const domainExtension = domain.split('.');
  if(domainExtension[1] < 2 || domainExtension.length < 2) return false;
  
  return true;
}

module.exports = validateEmail;
