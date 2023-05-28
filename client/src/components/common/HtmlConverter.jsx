import ReactHtmlParser from "react-html-parser";

const HtmlConverter = ({ htmlString }) => {
  return <div>{ReactHtmlParser(htmlString)}</div>;
};

export default HtmlConverter;
