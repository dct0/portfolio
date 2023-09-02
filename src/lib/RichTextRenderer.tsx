import {
  documentToReactComponents,
  type Options
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, type Document } from "@contentful/rich-text-types";

export const rendererOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p className="mb-2">{children}</p>,
    [BLOCKS.QUOTE]: (_, children) => (
      <blockquote className="mb-2">{children}</blockquote>
    ),
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className="mb-2 text-2xl font-semibold">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="mb-2 text-xl font-semibold">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="mb-2 text-lg font-semibold">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="mb-2 text-base font-semibold">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (_, children) => (
      <h5 className="mb-2 text-sm font-semibold">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (_, children) => (
      <h6 className="mb-2 text-xs font-semibold">{children}</h6>
    ),
    [BLOCKS.HR]: () => <hr className="mb-2" />,
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-inside list-disc">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <ol className="list-inside list-decimal">{children}</ol>
    ),

    // Fuck you contentful
    [BLOCKS.LIST_ITEM]: (node) => {
      const UnTaggedChildren = documentToReactComponents(node as Document, {
        renderNode: {
          ...rendererOptions.renderNode,
          [BLOCKS.PARAGRAPH]: (_, children) => children,
          [BLOCKS.LIST_ITEM]: (_, children) => children
        }
      });

      return <li>{UnTaggedChildren}</li>;
    }
  }
};
