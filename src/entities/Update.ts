export interface UpdateType {
  id?: string;
  title: string;
  summary?: string;
  content: string;
  author?: string;
  cover_image?: string;
  created_date?: string;
}

export class Update {
  static async list(order: string): Promise<UpdateType[]> {
    // TODO: Replace with real API call
    return [];
  }
} 