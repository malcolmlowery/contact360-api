import { Request, Response, NextFunction } from "express";

type RequestParams<T> = { [P in keyof T]: string };
type QueryParams<T> = { [P in keyof T]: string };

type RequestBody<T> = T;
type ResponseBody<T> = T;

export type ExpressHandler<TReqParams, TQueryParams, TReqBody, TResBody> = (
  req: Request<
    RequestParams<TReqParams>,
    QueryParams<TQueryParams>,
    RequestBody<TReqBody>,
    ResponseBody<TResBody>
  >,
  res: Response<ResponseBody<TResBody>>,
  next: NextFunction
) => Promise<void>;
