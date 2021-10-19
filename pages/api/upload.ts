import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";

const storage = multer.memoryStorage();

// disable next.js' default body parser
export const config = {
  api: { bodyParser: false },
};

export default async function upload(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await new Promise((resolve) => {
    // you may use any other multer function
    const mw = multer({
      storage,
      limits: {
        fileSize: 1000,
      },
    }).any();

    //use resolve() instead of next()
    mw(req, res, resolve);
  });
  console.debug(req.files);
  return res.end();
}
