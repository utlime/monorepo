/**
 * Tag object to organise collections
 *
 * @todo add color interface
 */
export interface Tag {
  readonly tag: string;
  readonly color: string;
}

/**
 * Create new tag with default options
 */
export function create(options: { tag: string; color?: string }): Tag {
  return {
    color: options.color || '#FFF',
    tag: options.tag,
  };
}

/**
 * Create new tag with option
 */
export function update(options: { tag?: string; color?: string } = {}): (tag: Tag) => Tag {
  return tag => create({
    color: options.color || tag.color,
    tag: options.tag || tag.tag,
  });
}
