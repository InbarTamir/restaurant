
import './HighlightPreview.scss'
export function HighlightPreview({ highlight }) {

    return (
        <li className="highlight-preview flex">
            <img src={ require(`../../assets/img/${highlight.img}`).default } />
            <img className="line-sep" src={ require('../../assets/img/icons/line.png').default } />
            <div className="preview-desc">
                <p className="highlight-title">{ highlight.title }</p>
                <p className="highlight-desc">{ highlight.desc }</p>
            </div>
        </li>
    )

}

