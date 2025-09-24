import { articleService } from '~/services/articleService';
import type { Article } from '~/types/article';

export function useArticles() {
  const articles = ref<Article[]>([]);
  const loading = ref(false);
  const error = ref<Error | null>(null);

  async function fetchArticles() {
    loading.value = true;
    try {
      articles.value = await articleService.getArticles();
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  }

  return {
    articles,
    loading,
    error,
    fetchArticles,
  };
}