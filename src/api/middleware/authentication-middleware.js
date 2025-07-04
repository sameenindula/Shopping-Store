import unauthorizedError from "../../domain/error/unauthorized-error";

const isAuthorized = (req, res, next) => {
    let isUserLoggedIn = false;
    if (!isUserLoggedIn) {
        throw new unauthorizedError('unauthorized')
    } else {
        next();
    }
}
export default isAuthorized;