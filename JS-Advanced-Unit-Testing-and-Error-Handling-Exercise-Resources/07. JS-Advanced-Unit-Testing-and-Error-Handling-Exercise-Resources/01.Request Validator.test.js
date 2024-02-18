function validateHttpRequest(request) {
  const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

  function isValidMethod(method) {
    return validMethods.includes(method);
  }

  function isValidUri(uri) {
    const uriPattern = /^[a-zA-Z0-9.]+$/;
    return uriPattern.test(uri) || uri === '*';
  }

  function isValidVersion(version) {
    return validVersions.includes(version);
  }

  function isValidMessage(message) {
    const specialCharactersPattern = /[<>'"&\\]/;
    return !specialCharactersPattern.test(message);
  }

  if (!request.hasOwnProperty('method') || !isValidMethod(request.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!request.hasOwnProperty('uri') || !isValidUri(request.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (!request.hasOwnProperty('version') || !isValidVersion(request.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (!request.hasOwnProperty('message') || !isValidMessage(request.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return request;
}