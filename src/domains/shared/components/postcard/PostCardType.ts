export type PostCardSizeType = 'large' | 'medium' | 'small';

interface Author {
  profileImgSrc: string;
  name: string;
}

export interface PostCardProps {
  imageSrc: string;
  title: string;
  summary: string;
  author: Author[];
}
