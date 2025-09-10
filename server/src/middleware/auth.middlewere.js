import jwt from "jsonwebtoken";

export const authMiddlewere = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        const token = authHeader.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECREATE);
        req.user = decode;
        next();
    } catch (error) {
        console.error("Auth middleware error:", error);
        res.status(401).json({ error: "Invalid or expired token" });
    }
}