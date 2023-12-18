export type WorkResponse = {
  id: number;
  attributes: {
    headline: string;
    description: string;
    link: string;
    screenshot: UniversalDataType<DefaultImageType>
    teches: {
      data: Technology[];
    };
  };
};

export type Technology = {
  attributes: {
    name: string;
    logo: UniversalDataType<DefaultImageType>
  };
};

interface UniversalDataType<T> {
  data: {
    id: number;
    attributes: T;
  }
}

interface FormatImage {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

interface Formats {
  large: FormatImage
  small: FormatImage
  medium: FormatImage
  thumbnail: FormatImage
}
export interface DefaultImageType {
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Profile {
  photo: UniversalDataType<DefaultImageType>
  createdAt: string
  updatedAt: string
}

export interface ProfileResponse extends UniversalDataType<Profile> {
  meta: {}
}
