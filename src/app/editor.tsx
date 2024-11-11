"use client";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import GlobalDragHandle from "tiptap-extension-global-drag-handle";
import { DragMenu } from "./block-menu";

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle,
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  GlobalDragHandle.configure({
    dragHandleWidth: 50, // default

    // The scrollTreshold specifies how close the user must drag an element to the edge of the lower/upper screen for automatic
    // scrolling to take place. For example, scrollTreshold = 100 means that scrolling starts automatically when the user drags an
    // element to a position that is max. 99px away from the edge of the screen
    // You can set this to 0 to prevent auto scrolling caused by this extension
    scrollTreshold: 100, // default

    // The css selector to query for the drag handle. (eg: '.custom-handle').
    // If handle element is found, that element will be used as drag handle.
    // If not, a default handle will be created
    dragHandleSelector: ".my-drag-handler", // default is undefined

    // Tags to be excluded for drag handle
    // If you want to hide the global drag handle for specific HTML tags, you can use this option.
    // For example, setting this option to ['p', 'hr'] will hide the global drag handle for <p> and <hr> tags.
    excludedTags: [], // default

    // Custom nodes to be included for drag handle
    // For example having a custom Alert component. Add data-type="alert" to the node component wrapper.
    // Then add it to this list as ['alert']
    //
    customNodes: [],
  }),
];

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>Tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
  display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

export function Editor() {
  return (
    <>
      <div className="my-drag-handler">
        <DragMenu />
      </div>
      <div className="prose w-full m-auto bg-stone-50 shadow-stone-200 shadow p-2">
        <EditorProvider
          extensions={extensions}
          content={content}
          editorProps={{}}
        />
      </div>
    </>
  );
}
