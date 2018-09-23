/**
 * Tag object to organise collections
 */
export interface Tag {
  name: string;
  color: string;
}

/**
 * Create new tag with default options
 */
export function defaults(
  options: {
    color?: string;
  } = { color: '#FFF' }
): (tag: { name: string; color?: string }) => Tag {
  return tag => ({
    color: tag.color || options.color || '#FFF',
    name: tag.name,
  });
}

/**
 * Create new tag with option
 */
export function update(
  options: {
    name?: string;
    color?: string;
  } = {}
): (tag: Tag) => Tag {
  return tag => ({
    color: options.color || tag.color,
    name: options.name || tag.name,
  });
}
