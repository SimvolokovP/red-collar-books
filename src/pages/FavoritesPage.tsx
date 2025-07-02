import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";

export function FavoritesPage() {
  return (
    <div>
      <PageLayout
        header={<PageHeaderLayout title="Избранное" description="Избранные книги" />}
      >
        <div>favorites</div>
      </PageLayout>
    </div>
  );
}
