export interface PostBase {
  title: string;
  contents: string;
  thumbnailImg?: string;
  thumbnailContents: string;
}

export interface PostDetail extends PostBase {
  postIdx: number;
  boardCount: number;
  privated: 'Y' | 'N';
  dateTime: string;
  deleted: 'Y' | 'N';
}
