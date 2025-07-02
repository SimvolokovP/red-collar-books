import { BooksList } from "../components/BooksList";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";

export function MainPage() {
  return (
    <div>
      <PageLayout
        header={<PageHeaderLayout title="Каталог" description="Каталог книг" />}
      >
        <BooksList />
      </PageLayout>
    </div>
  );
}
