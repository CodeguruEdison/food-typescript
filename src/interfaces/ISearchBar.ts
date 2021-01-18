export default interface ISearchBar {
  term: string;
  onTermChange: (newTerm: string) => void;
  onTermSubmit: () => void;
}
