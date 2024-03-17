import { Request, Response, NextFunction } from "express";
import { HandlerResponse } from "./HandlerResponse";

type RequestParams<T> = { [P in keyof T]: string };
type QueryParams<T> = { [P in keyof T]: string };

type RequestBody<T> = T;
type ResponseBody<T> = T;

type ExpressHandler<TReqParams, TQueryParams, TReqBody, TResBody> = (
  req: Request<
    RequestParams<TReqParams>,
    QueryParams<TQueryParams>,
    RequestBody<TReqBody>,
    ResponseBody<TResBody>
  >,
  res: Response<HandlerResponse<TResBody>>,
  next: NextFunction
) => Promise<void>;

export default ExpressHandler;
