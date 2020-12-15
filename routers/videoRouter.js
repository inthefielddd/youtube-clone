import express from "express";
import { deleteVideo, getEditVideo, getUpload, postEditVideo, postUpload, videoDetail, videos } from "../controllers/videoController";
import { onlyPrivate, uploadVideo } from "../middleware";
import routes from "../routes";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

//videoDetail
videoRouter.get(routes.videoDetail(), videoDetail);

//edit video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);

//delete video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
