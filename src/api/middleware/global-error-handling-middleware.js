import notFoundError from "../../domain/error/not-found-error";
import unauthorizedError from "../../domain/error/unauthorized-error";
import validationError from "../../domain/error/validation-error";

const globalErrorHandlingMiddleware = (err, req, res, next) => {
    if (err instanceof validationError) {
        res.status(400).json({ error: err.message });
    };
    if (err instanceof notFoundError) {
        res.status(404).json({ error: err.message });
    }
    if (err instanceof unauthorizedError) {
        res.status(401).json({ error: err.message });
    } else {
        res.status(500).json({ error: err.message || 'Internal server error' });
    }
}

export default globalErrorHandlingMiddleware;