import { BooksList } from "../components/BooksList";
import { PageHeaderLayout } from "../layouts/PageHeaderLayout";
import { PageLayout } from "../layouts/PageLayout";
import type { Book } from "../models/booksModels";
import { Dropdown } from "../UI/Dropdown";
import { Input } from "../UI/Input";

const books: Book[] = [
  {
    kind: "books#volume",
    id: "2QVbEQAAQBAJ",
    etag: "XkxP5i1OfiM",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/2QVbEQAAQBAJ",
    volumeInfo: {
      title:
        "Разработка веб-приложений с использованием JavaScript и React: Практическое руководство",
      authors: ["Программист"],
      publisher: "Litres",
      publishedDate: "2025-05-02",
      description:
        "Эта книга представляет собой полное руководство по разработке веб-приложений с использованием JavaScript и React. В ней вы найдете подробные описания и примеры кода, которые помогут вам освоить основы и продвинутые техники создания современных веб-приложений. Книга охватывает темы от базовой настройки проекта до продвинутых тем, таких как управление состоянием, маршрутизация и оптимизация производительности. С помощью этой книги вы сможете создавать быстрые, масштабируемые и удобные веб-приложения, которые соответствуют современным стандартам веб-разработки.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9785047529868",
        },
        {
          type: "ISBN_10",
          identifier: "504752986X",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 80,
      printType: "BOOK",
      categories: ["Computers"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "preview-1.0.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=2QVbEQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=2QVbEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "ru",
      previewLink:
        "http://books.google.ru/books?id=2QVbEQAAQBAJ&pg=PT12&dq=react&hl=&cd=10&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=2QVbEQAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=2QVbEQAAQBAJ",
    },
    saleInfo: {
      country: "RU",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 248.75,
        currencyCode: "RUB",
      },
      retailPrice: {
        amount: 223.88,
        currencyCode: "RUB",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=2QVbEQAAQBAJ&rdid=book-2QVbEQAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 248750000,
            currencyCode: "RUB",
          },
          retailPrice: {
            amountInMicros: 223880000,
            currencyCode: "RUB",
          },
        },
      ],
    },
    accessInfo: {
      country: "RU",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.ru/books/download/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%B2%D0%B5%D0%B1_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6-sample-epub.acsm?id=2QVbEQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.ru/books/download/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0_%D0%B2%D0%B5%D0%B1_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6-sample-pdf.acsm?id=2QVbEQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=2QVbEQAAQBAJ&hl=&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "... \u003cb\u003eReact\u003c/b\u003e и его ролью в разработке веб-приложений. Теперь давайте углубимся детали рассмотрим один из наиболее важных аспектов \u003cb\u003eReact\u003c/b\u003e: компоненты JSX. Компоненты: строительные блоки \u003cb\u003eReact\u003c/b\u003e Компоненты. –. это основные строительные блоки любого&nbsp;...",
    },
  },
  {
    kind: "books#volume",
    id: "zNedDwAAQBAJ",
    etag: "4dNVEhDIqCg",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/zNedDwAAQBAJ",
    volumeInfo: {
      title: "Изучаем React",
      authors: ["Кирупа Чиннатамби"],
      publisher: "Litres",
      publishedDate: "2019-06-18",
      description:
        "Второе, обновленное, издание снискавшей множество положительных отзывов на Amazon книги известного преподавателя основ веб-разработки, автора обучающего Youtube-канала Кирупы Чиннатамби. Эта книга позволит вам освоить разработку современных веб-приложений с использованием React и Redux. До выхода этой книги считалось, что освоить React самостоятельно, да еще и новичку, практически невозможно. Однако благодаря свежему взгляду и легкому стилю изложения автора этой книги сотни веб-разработчиков по всему миру признали, что освоили тему легко и быстро. На то, чтобы приступить к созданию первых собственных приложений на React, вам потребуется буквально несколько минут чтения. Дерзайте!",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9785041763411",
        },
        {
          type: "ISBN_10",
          identifier: "5041763410",
        },
      ],
      readingModes: {
        text: false,
        image: true,
      },
      pageCount: 368,
      printType: "BOOK",
      categories: ["Computers"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: true,
      contentVersion: "1.4.3.0.preview.1",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=zNedDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=zNedDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "ru",
      previewLink:
        "http://books.google.ru/books?id=zNedDwAAQBAJ&pg=PA33&dq=React&hl=&cd=1&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=zNedDwAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=zNedDwAAQBAJ",
    },
    saleInfo: {
      country: "RU",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 401.35,
        currencyCode: "RUB",
      },
      retailPrice: {
        amount: 361.22,
        currencyCode: "RUB",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=zNedDwAAQBAJ&rdid=book-zNedDwAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 401350000,
            currencyCode: "RUB",
          },
          retailPrice: {
            amountInMicros: 361220000,
            currencyCode: "RUB",
          },
        },
      ],
    },
    accessInfo: {
      country: "RU",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.ru/books/download/%D0%98%D0%B7%D1%83%D1%87%D0%B0%D0%B5%D0%BC_React-sample-pdf.acsm?id=zNedDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=zNedDwAAQBAJ&hl=&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "Кирупа Чиннатамби. &lt;title&gt;\u003cb\u003eReact\u003c/b\u003e! \u003cb\u003eReact\u003c/b\u003e! \u003cb\u003eReact\u003c/b\u003e!&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;script&gt; &lt;/script&gt; &lt;/body&gt; &lt;/html&gt; Эта страница не содержит ничего интересного, но мы исправим это, добавив ссылку на библиотеку \u003cb\u003eReact\u003c/b\u003e. Сразу под заголовком до&nbsp;...",
    },
  },
  {
    kind: "books#volume",
    id: "zzcmEQAAQBAJ",
    etag: "9U/mIeqILy8",
    selfLink:
      "https://content-books.googleapis.com/books/v1/volumes/zzcmEQAAQBAJ",
    volumeInfo: {
      title: "React в действии",
      authors: ["Марк Тиленс Томас"],
      publisher: "Питер",
      publishedDate: "2024-10-01",
      description:
        'Книга "React в действии" знакомит фронтенд-разработчиков с фреймворком React и смежными инструментами. Сначала вы познакомитесь с библиотекой React, затем освежите материал о некоторых фундаментальных идеях в данном контексте и узнаете о работе с компонентами. Вы на практике освоите чистый React (без транспиляции, без синтаксических помощников), перейдете от простейших статических компонентов к динамическим и интерактивным. Во второй половине книги рассмотрены различные способы взаимодействия с React. Вы изучите базовые методы жизненного цикла, научитесь создавать поток данных, формы, а также тестировать приложения. На закуску вас ждет материал об архитектуре React-приложения, взаимодействии с Redux, экскурс в серверный рендеринг и обзор React Native.',
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9785446109999",
        },
        {
          type: "ISBN_10",
          identifier: "5446109996",
        },
      ],
      readingModes: {
        text: true,
        image: true,
      },
      pageCount: 428,
      printType: "BOOK",
      categories: ["Computers"],
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "1.1.1.0.preview.3",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=zzcmEQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=zzcmEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "ru",
      previewLink:
        "http://books.google.ru/books?id=zzcmEQAAQBAJ&pg=PT59&dq=React&hl=&cd=2&source=gbs_api",
      infoLink:
        "https://play.google.com/store/books/details?id=zzcmEQAAQBAJ&source=gbs_api",
      canonicalVolumeLink:
        "https://play.google.com/store/books/details?id=zzcmEQAAQBAJ",
    },
    saleInfo: {
      country: "RU",
      saleability: "FOR_SALE",
      isEbook: true,
      listPrice: {
        amount: 699.99,
        currencyCode: "RUB",
      },
      retailPrice: {
        amount: 699.99,
        currencyCode: "RUB",
      },
      buyLink:
        "https://play.google.com/store/books/details?id=zzcmEQAAQBAJ&rdid=book-zzcmEQAAQBAJ&rdot=1&source=gbs_api",
      offers: [
        {
          finskyOfferType: 1,
          listPrice: {
            amountInMicros: 699990000,
            currencyCode: "RUB",
          },
          retailPrice: {
            amountInMicros: 699990000,
            currencyCode: "RUB",
          },
        },
      ],
    },
    accessInfo: {
      country: "RU",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.ru/books/download/React_%D0%B2_%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B8-sample-epub.acsm?id=zzcmEQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      pdf: {
        isAvailable: true,
        acsTokenLink:
          "http://books.google.ru/books/download/React_%D0%B2_%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D0%B8-sample-pdf.acsm?id=zzcmEQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=zzcmEQAAQBAJ&hl=&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "... \u003cb\u003eReact\u003c/b\u003e . Таким образом , этот метод аналогичен тому , с помощью которого создаются элементы \u003cb\u003eReact\u003c/b\u003e они могут быть вложенными , но на самом верхнем уровне есть один узел . Однако , в отличие от элементов \u003cb\u003eReact\u003c/b\u003e , методы render классов \u003cb\u003eReact\u003c/b\u003e&nbsp;...",
    },
  },
];

export function MainPage() {
  return (
    <div>
      <PageLayout
        header={
          <PageHeaderLayout
            title="Главная"
            description="Исследуйте мир литературы - тысячи книг на любой вкус. Удобный поиск и фильтры помогут найти именно то, что вам нужно."
            actions={
              <div className="flex items-center gap-[16px]">
                <Input placeholder="Search.." />
                <Dropdown
                  placeholder="Filter.."
                  options={[{ label: "text", value: "1" }]}
                  onChange={(e) => console.log(e)}
                />
              </div>
            }
          />
        }
      >
        <BooksList books={books} />
      </PageLayout>
    </div>
  );
}
