import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";

export function FavoritesPage() {
  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Избранное"
            description="Ваша личная коллекция. Здесь хранятся отмеченные книги, которые вы хотите прочитать или сохранить для будущего."
          />
        }
      >
        <div>favorites</div>
      </PageLayout>
    </div>
  );
}
