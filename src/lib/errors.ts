export class AppError extends Error {
  status: number;

  constructor(message: string, status: number = 500) {
    super(message);
    this.status = status;
    this.name = 'AppError';
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'The requested resource was not found') {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

export class ServerError extends AppError {
  constructor(message: string = 'An unexpected error occurred') {
    super(message, 500);
    this.name = 'ServerError';
  }
}
