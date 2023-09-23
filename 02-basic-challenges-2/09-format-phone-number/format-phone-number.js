function formatPhoneNumber(phoneNum) {
  return `(${phoneNum.slice(0, 3).join('')}) ${phoneNum.slice(3, 6).join('')}-${phoneNum.slice(6).join('')}`;
}

module.exports = formatPhoneNumber;
