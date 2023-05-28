import {parser} from "../quanta/src/parser"
import {LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside, delimitedIndent} from "@codemirror/language"
import {styleTags, tags as t} from "@lezer/highlight"
import {completeFromList} from "@codemirror/autocomplete"

export const QuantaLanguage = LRLanguage.define({
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Application: delimitedIndent({closing: ")", align: false})
      }),
      foldNodeProp.add({
        Application: foldInside
      }),
      styleTags({
        Identifier: t.variableName,
        Boolean: t.bool,
        String: t.string,
        LineComment: t.lineComment,
        "( )": t.paren
      })
    ]
  }),
  languageData: {
    commentTokens: {line: ";"}
  }
})

export const quantaCompletion = QuantaLanguage.data.of({
  autocomplete: completeFromList([
    {label: "function", type: "keyword"},
    {label: "bool", type: "keyword"},
    {label: "int", type: "keyword"},
    {label: "circle", type: "function"},
    {label: "rectangle", type: "function"},
    {label: "line", type: "function"}
  ])
})

export function quanta() {
  return new LanguageSupport(QuantaLanguage, [quantaCompletion])
}
