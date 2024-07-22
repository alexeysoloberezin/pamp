import {hasTrailingSlash} from "~/server-middleware/seo-redirect";

export default ({app}) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    if (hasTrailingSlash(to.path)) return next();
    next(to.path + '/');
  })
}
