import { BooksList } from "../components/BooksList";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";

export function MainPage() {
  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Главная"
            description="Исследуйте мир литературы - тысячи книг на любой вкус. Удобный поиск и фильтры помогут найти именно то, что вам нужно."
          />
        }
      >
        <BooksList />
      </PageLayout>
    </div>
  );
}
