import { type Scenario } from '@padcom/cypress-pop'
import { DuckDuckGoPage } from '../pages/duckduckgo'

export class SearchScenario implements Scenario<DuckDuckGoPage, DuckDuckGoPage> {
  private searchTerm: string

  constructor(searchTerm: string) {
    this.searchTerm = searchTerm
  }

  run(entry: DuckDuckGoPage) {
    entry.searchBox
      .searchFor('test')
      .searchFor(this.searchTerm)
    entry.switchToDuckDuckGoPopup.dismiss()
    entry.clearCookiesOftenPopup.dismiss()

    return entry
  }
}
