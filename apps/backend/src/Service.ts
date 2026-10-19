import type { Express } from "express";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import morgan from "morgan";

class Service {
    protected name: string;
    protected app: Express;
    constructor() {
        this.name = "kanban";
        this.app = express();
    }

    private initMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan("dev"));
    }

    private initRoutes() {
        this.app.get("/api/v1/healtz", (_, res) => {
            res.status(200).json({
                message: "Ok",
            });
        });
        this.app.use("/api/v1", routes);
    }

    public start() {
        this.initMiddlewares();
        this.initRoutes();
        this.app.listen("8081", () => {
            console.log(`backend is running on port 8081`);
        });
    }
}

export default Service;
