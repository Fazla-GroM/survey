import { useMemo } from 'react'
import xss from 'xss'

/**
 * A hook which parses html, hopefully escapes xss bs.
 * It returns  Object containing dangerousySetInnerHtml prop with cleaned up sting
 *
 * @param {string} html
 * @return {Object}
 */
const useInnerHtml = html => {
    const htmlProps = useMemo(
        () => ({
            dangerouslySetInnerHTML: {
                __html: xss(html, {
                    // Allow all attributes that contains class tag
                    onIgnoreTagAttr(tag, tagName, tagValue) {
                        if (tagName === 'class') {
                            // escape its value using built-in escapeAttrValue function
                            return `${tagName}="${xss.escapeAttrValue(tagValue)}"`
                        }
                    }
                })
            }
        }),
        [html]
    )

    return htmlProps
}

export default useInnerHtml
