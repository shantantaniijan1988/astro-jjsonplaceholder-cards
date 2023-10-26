export interface Card {
  id: string;
  name: string;
  company: string;
  division: string;
  title: string;
}

export const endpoint = import.meta.env.JJSONPLACEHOLDER_CARDS_API;
