import cn from 'classnames';
import '../css/sample.css';
export default function Books({ books }) {
  return books
    .filter((book) => book.price > 1500)
    .sort((b1, b2) => b2.price - b1.price)
    .map((book) => (
      <div key={book.id}>
        <dl className={cn('box', book.icon && 'dl-color')}>
          {/* <dl className={`box${book.icon ? ' dl-color' : ''}`}> */}
          <dt>{book.title}</dt>
          <dt>{book.price}</dt>
          <dt>{book.icon ? 'アイコンあり' : 'アイコンなし'}</dt>
          <dt>{book.icon && '<icon>'}</dt>
        </dl>
      </div>
    ));
}
