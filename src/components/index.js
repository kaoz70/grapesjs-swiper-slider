import Container from './Container';
import Wrapper from './Wrapper';
import Slide from './Slide';
import NavPrev from './NavPrev';
import NavNext from './NavNext';
import Pagination from "./Pagination";
import Scrollbar from "./Scrollbar";

export default (editor, config = {}) => {
  const domComponents = editor.DomComponents;

  Container(domComponents, config);
  Wrapper(domComponents, config);
  Slide(domComponents, config);
  NavPrev(domComponents, config);
  NavNext(domComponents, config);
  Pagination(domComponents, config);
  Scrollbar(domComponents, config);
}
