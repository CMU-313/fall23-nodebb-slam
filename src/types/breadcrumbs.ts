/* @noflow */
export type Breadcrumbs = {
  breadcrumbs: Breadcrumb[];
};

/* @noflow */
export type Breadcrumb = {
  text: string;
  url: string;
  cid: number;
};
