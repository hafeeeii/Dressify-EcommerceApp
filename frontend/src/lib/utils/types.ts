export type Tabs = {
  id: number;
  content: React.JSX.Element;
  label: string;
};
type ImgFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
};

type Img = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: null;
      caption: null;
      width: number;
      height: number;
      formats: {
        large: ImgFormat;
        small: ImgFormat;
        medium: ImgFormat;
        thumbnail: ImgFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type Product = {
  id: number;
  attributes: {
    title: string;
    description: string;
    price: number;
    isNew: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    type: string;
    categories: object;
    sub_categories: {
      data: Sub_category[];
    };
    images:{
      data: Img[];
    }
    quantity: number;
    img: Img;
    img2: Img;
    availability: boolean;
    color: string;
  };
};

export type categories = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    products: {
      data: Product[];
    };
    categories: {
      data: [];
    };
    img: Img;
  };
};

export type Sub_category = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    img: Img;
    products: {
      data: Product[];
    };
  };
};

export type Hero = {
  id: number;
  attributes: {
    title: string;
    createdAt: string;
    updatedAt: string;
    img: Img;
  };
};

export type Testimonial = {
  id: number;
  img: string;
  comment: string;
  name: string;
  isVerified: boolean;
  star: number;
};
export type SortOptions = {
  label: string;
  value: string;
};

export type HeroCategory = {
  id: number;
  title: string;
  img: string;
};

export type Navigation = {
  title: string;
  href: string;
};
