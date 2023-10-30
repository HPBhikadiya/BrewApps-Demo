import { Request as expresesRequest } from "express";
import { FileReference } from "typescript";

export interface Request extends expresesRequest {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  files: FileReference;
}
