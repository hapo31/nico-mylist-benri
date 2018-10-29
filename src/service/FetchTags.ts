import TagInfo from "../model/TagInfo";

export default async function FetchTags(videoId: string) {
  const res = await fetch(
    `
  https://www.nicovideo.jp/tag_edit/${videoId}?res_type=json&cmd=tags`,
    {
      credentials: "include"
    }
  );

  return (await res.json()) as TagInfo;
}
