import Container from './Container';
import Wrapper from './Wrapper';
import Slide from './Slide';
import NavPrev from './NavPrev';
import NavNext from './NavNext';
import Pagination from "./Pagination";
import Scrollbar from "./Scrollbar";

export default (editor, config = {}) => {
  const dc = editor.DomComponents;
  Container(dc, config);
  Wrapper(dc, config);
  Slide(dc, config);
  NavPrev(dc, config);
  NavNext(dc, config);
  Pagination(dc, config);
  Scrollbar(dc, config);
}
