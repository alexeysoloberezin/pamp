export function normalizePathLink(path: string): string {
  if (path.endsWith('/')) {
    return path;
  } else {
    return path + '/';
  }
}
