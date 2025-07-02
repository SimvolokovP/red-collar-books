import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";
import { ErrorBlock } from "../components/ErrorBlock";

export function NotFoundPage() {
  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Страница не найдена"
            description="Такой страницы не существует. Возможно, она была удалена или перемещена. Вернитесь на главную и попробуйте снова."
          />
        }
      >
        <ErrorBlock error="404" />
      </PageLayout>
    </div>
  );
}
