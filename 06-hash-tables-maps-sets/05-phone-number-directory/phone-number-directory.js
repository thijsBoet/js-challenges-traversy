function phoneNumberDirectory(array) {
  // Create a new Map object
  const directory = new Map();

  array.map((phoneNumber) => {
    const [name, number] = phoneNumber.split(':');
    directory.set(name, number);
  });

  return directory;
}

module.exports = phoneNumberDirectory;
