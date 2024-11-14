interface Success<T> {
  success: true;
  error_code: '0000';
  message: 'Success';
  response: T;
}

interface Failure {
  success: false;
  error_code: Exclude<string, '0000'>;
  message: Exclude<string, 'Success'>;
  response: null;
}

export type Response<T> = Success<T> | Failure;
