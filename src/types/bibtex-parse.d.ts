declare module 'bibtex-parse' {
  interface BibTeXEntry {
    key: string;
    type: string;
    [field: string]: string;
  }
  function entries(bibtex: string): BibTeXEntry[];
  export default { entries };
}
