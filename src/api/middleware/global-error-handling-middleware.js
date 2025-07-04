import NotFouNodError from "../../domain/error/NotFouNodError";
import UnauthorizedError from "../../domain/error/UnauthorizedError";
import ValidationError from "../../domain/error/ValidationError";


const globalErrorHandlingMiddleware = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        res.status(400).json({ error: err.message });
    };
    if (err instanceof NotFouNodError) {
        res.status(404).json({ error: err.message });
    }
    if (err instanceof UnauthorizedError) {
        res.status(401).json({ error: err.message });
    } else {
        res.status(500).json({ error: err.message || 'Internal server error' });
    }
}

export default globalErrorHandlingMiddleware;