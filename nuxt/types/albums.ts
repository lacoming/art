export interface Albomy {
    id: number;
    title: string;
    description: string;
    slug: string,
    image: {
      id: number;
      name: string;
      url: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail?: {
          name: string;
          url: string;
          width: number;
          height: number;
        };
        small?: {
          name: string;
          url: string;
          width: number;
          height: number;
        };
        medium?: {
          name: string;
          url: string;
          width: number;
          height: number;
        };
        large?: {
          name: string;
          url: string;
          width: number;
          height: number;
        };
      };
      createdAt?: string;
      updatedAt?: string;
      publishedAt?: string;
    } | null; // Учитываем возможность отсутствия изображения
  }
  