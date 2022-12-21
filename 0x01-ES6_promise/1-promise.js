export default function getFullResponseFromAPI(success) {
  return new Promise((_resolve, _reject) => {
    if (success) _resolve({ status: 200, body: 'success' });
    else _reject(Error('The fake API is not working currently'));
  });
}
