export default interface TagInfo {
  is_owner: boolean;
  is_uneditable_tag: boolean;
  category_tags: string[];
  tags: Tag[];
  status: string;
}

interface Tag {
  id: string;
  tag: string;
  owner_lock: number;
  can_cat: boolean;
  cat?: boolean;
  dic?: boolean;
}
