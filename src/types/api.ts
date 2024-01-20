type EmptyObj = {};
type String = string | null;
export type Meta =
  | {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    }
  | EmptyObj;

interface IncludesSeo {
  seo: Seo | null;
}

interface BaseAttributes {
  createdAt: string;
  updatedAt: string;
}

interface BaseResponse {
  meta: Meta;
}
export interface Seo {
  id: number;
  metaTitle: String;
  metaDescription: String;
  keywords: String;
  metaRobots: String;
  structuredData: String;
  metaViewport: String;
  canonicalURL: String;
  metaImage: UniversalDataType<DefaultImageType>
}

export type WorkResponse = {
  id: number;
  attributes: {
    headline: string;
    description: string;
    link: string;
    screenshot: UniversalDataType<DefaultImageType>;
    teches: {
      data: Technology[];
    };
  };
};

export type Technology = {
  attributes: {
    name: string;
    logo: UniversalDataType<DefaultImageType>;
  };
};

interface UniversalDataType<T> {
  data: {
    id: number;
    attributes: T;
  };
}
interface UniversalArrayDataType<T> {
  data: {
    id: number;
    attributes: T;
  }[];
}

interface FormatImage {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: String;
  size: number;
  width: number;
  height: number;
}

interface Formats {
  large: FormatImage;
  small: FormatImage;
  medium: FormatImage;
  thumbnail: FormatImage;
}
export interface DefaultImageType extends BaseAttributes {
  name: string;
  alternativeText: String;
  caption: String;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
}

export interface Profile extends BaseAttributes {
  photo: UniversalDataType<DefaultImageType>;
}

export interface Pages extends BaseAttributes, IncludesSeo {
  path: string;
}

export interface Article extends BaseAttributes, IncludesSeo {
  content: string;
  title: string;
  slug: string
}

export interface ProfileResponse extends UniversalDataType<Profile>, BaseResponse {}

export interface PagesResponse extends UniversalArrayDataType<Pages>, BaseResponse {}

export interface ArticleResponse extends UniversalDataType<Article>, BaseResponse{}
export interface ArticlesResponse extends UniversalArrayDataType<Exclude<Article, Seo>>, BaseResponse {}