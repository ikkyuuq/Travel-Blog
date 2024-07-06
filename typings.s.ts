interface Post extends Base {
  title: string;
  mainImage: Image;
  body: Body[];
  slug: Slug;
  description: string;
  author: Author;
}

interface Base {
  _id: string;
  _createAt: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Body {
  _type: string;
  _key: string;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  markDefs: any[];
  children: Span[];
}

interface Span {
  _type: "span";
  _key: string;
  marks: string[];
  text: string;
}

interface Author extends Base {
  bio: Body[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Reference {
  _ref: string;
  _type: "reference";
}
