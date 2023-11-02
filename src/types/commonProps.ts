import { TagObject } from './tag';

/* @noflow */
export type CommonProps = {
  loggedIn: boolean;
  relative_path: string;
  template: Template;
  url: string;
  bodyClass: string;
  _header: Header;
  widgets: Widget[];
};

/* @noflow */
export interface Template {
  name: string;
}

/* @noflow */
export interface Header {
  tags: TagObject[];
  link: Link[];
}

/* @noflow */
export interface Link {
  rel: string;
  type: string;
  href: string;
  title: string;
  sizes: string;
  as: string;
}

/* @noflow */
export interface Widget {
  html: string;
}
