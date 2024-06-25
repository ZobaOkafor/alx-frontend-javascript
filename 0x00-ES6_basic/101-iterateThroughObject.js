export default function iterateThroughObject(reportWithIterator) {
  const result = '';

  for (const employee of reportWithIterator) {
    result += employee + ' | ';
  }

  // Remove the trailing ' | ' from the result
  result = result.slice(0, -3);

  return result;
}
