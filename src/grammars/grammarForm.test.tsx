import {transformGrammarUpsert} from "./grammarUpsert";
import {Grammar} from "./grammar";

test('renders learn react link', () => {
  const grammar: Grammar = transformGrammarUpsert({id: "1", grammar: "\\begin{equation*} G2=\\left\\lbrace terminal:\\left\\lbrace a\\right\\rbrace,nonterminal:\\left\\lbrace\\Sigma,S\\right\\rbrace,start\\_symbol:\\Sigma,production\\_rules:\\left\\lbrace\\Sigma\\to S,S\\to\\lambda,S\\to a\\rbrace\\right\\rbrace\\right. \\end{equation*}"});
  expect(grammar.name).toBe("G2");
  expect(grammar.terminal_symbols).toBe("a");
  expect(grammar.nonterminal_symbols).toBe("\\Sigma,S");
  expect(grammar.production_rules).toBe("\\Sigma\\to S,S\\to\\lambda,S\\to a");
});