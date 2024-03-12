import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/metting/:id*"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
