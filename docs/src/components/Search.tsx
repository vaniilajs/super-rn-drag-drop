/** @jsxImportSource react */
// import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
// import Link from "next/link";
// import Router from "next/router";
import { useCallback, useEffect, useState } from "react";
import { SearchIcon } from "./icon";

// const docSearchConfig = {
//   // appId: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
//   // apiKey: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
//   // indexName: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
// };

// function Hit({ hit, children }) {
//   return <Link href={hit.url}>{children}</Link>;
// }

export function Search() {
  let [_isOpen, setIsOpen] = useState(false);
  let [modifierKey, setModifierKey] = useState("");

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  // const onClose = useCallback(() => {
  //   setIsOpen(false);
  // }, [setIsOpen]);

  // useDocSearchKeyboardEvents({ isOpen, onOpen, onClose });

  useEffect(() => {
    setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? "⌘" : "Ctrl ");
  }, []);

  return (
    <>
      <button
        type="button"
        className="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 lg:w-96 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500"
        onClick={onOpen}
      >
        <SearchIcon className="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 md:group-hover:fill-slate-400 dark:fill-slate-500" />
        <span className="sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400">
          Search docs
        </span>
        {modifierKey && (
          <kbd className="ml-auto hidden font-medium text-slate-400 md:block dark:text-slate-500">
            <kbd className="font-sans">{modifierKey}</kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        )}
      </button>
      {/* {isOpen &&
        createPortal(
          <DocSearchModal
            {...docSearchConfig}
            initialScrollY={window.scrollY}
            onClose={onClose}
            hitComponent={Hit}
            navigator={{
              navigate({ itemUrl }) {
                Router.push(itemUrl);
              },
            }}
          />,
          document.body
        )} */}
    </>
  );
}
