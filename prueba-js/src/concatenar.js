export default (json) => {
  return json.map((item) => {
    const { nombre, apellido, apellido2 } = {...item};
    const fullName = `${nombre} ${apellido} ${apellido2 || ''}`.trim();
    return capitalize(fullName);
  });
};

function capitalize(fullName) {
  const str = fullName.toLowerCase();
  const words = str.split(' ');

  return words.map((word) => {
    return word[0].toUpperCase() + word.substring(1); 
  }).join(' ');
}
  