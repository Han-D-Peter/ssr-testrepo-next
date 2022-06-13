export type PostCardSizeType = 'large' | 'medium' | 'small';

interface PostCard {
  postIdx: number;
  title: string;
  contents: string;
  thumbnailImg: string;
  thumbnailContents: string;
  boardCount: number;
  privated: string;
  dateTime: string;
  deleted: string;
}

export interface PostCardProps {
  data: PostCard;
}
