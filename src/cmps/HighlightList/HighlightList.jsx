
import './HighlightList.scss'
import { highlights } from '../../data/item.js'
import { HighlightPreview } from '../HighlightPreview/HighlightPreview'

export function HighlightList() {
    return (
        <ul className="highlight-list clean-list">
            { highlights.map(highlight => <HighlightPreview key={ highlight.id } highlight={ highlight } />) }
        </ul>
    )
}

