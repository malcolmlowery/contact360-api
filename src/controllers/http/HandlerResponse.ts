type SuccessResponse<T> = {
  data: T;
};

type ErrorResponse = {
  error: {
    status: number;
    message: string;
  };
};

export type HandlerResponse<T> = SuccessResponse<T> | ErrorResponse;
