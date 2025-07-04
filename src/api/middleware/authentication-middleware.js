import UnauthorizedError from "../../domain/error/UnauthorizedError.js";

const isAuthorized = (req, res, next) => {
    let isUserLoggedIn = false;
    if (!isUserLoggedIn) {
        throw new UnauthorizedError('unauthorized');
    } else {
        next();
    }
}
export default isAuthorized;