export default (json) => {
  const initialValue = 0;
  const dataLength = json.length;
  const sumAges = json.reduce(
    (total, item) => total + item.edad,
    initialValue
  );
  return sumAges / dataLength;
};
  