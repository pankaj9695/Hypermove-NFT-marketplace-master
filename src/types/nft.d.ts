export interface NftMatadata {
  name: string;
  description: string;
  image: string;
  animation_url: string;
  properties: Properties;
}

export interface Properties {
  type: string;
  origins: Origins;
  authors: Author[];
  content: Content;
}

export interface Origins {
  http: string;
}

export interface Author {
  name: string;
}

export interface Content {
  "text/markdown": string;
}
