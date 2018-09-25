/**
 * Tag object to organise collections
 *
 * @todo add color interface
 */
export interface Tag {
  tag: string;
  color: string;
}

/**
 * Create new tag with default options
 */
export function defaults(
  options: {
    color?: string;
  } = { color: '#FFF' }
): (tag: { tag: string; color?: string }) => Tag {
  return tag => ({
    color: tag.color || options.color || '#FFF',
    tag: tag.tag,
  });
}

/**
 * Create new tag with option
 */
export function update(
  options: {
    tag?: string;
    color?: string;
  } = {}
): (tag: Tag) => Tag {
  return tag => ({
    color: options.color || tag.color,
    tag: options.tag || tag.tag,
  });
}
