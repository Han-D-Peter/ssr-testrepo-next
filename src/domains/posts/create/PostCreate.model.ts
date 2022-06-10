export interface CreatePostData {
  title: string;
  contents: string;
  thumnailImg: string;
  thumnailContents: string;
}

export interface CreatePostResponse {
  postIdx: number;
  title: string;
  contents: string;
  thumnailImg?: string;
  thumnailContents: string;
  board_count: number;
  privated: 'Y' | 'N';
  dateTime: string;
  deleted: 'Y' | 'N';
}
