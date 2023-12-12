/**
 * Renders a section component with an optional title and unique id.
 *
 * @param {React.ReactNode} children - The content to be rendered within the section.
 * @param {string} id - The unique identifier for the section.
 * @param {string} [title] - The optional title for the section.
 * @return {React.ReactNode} The rendered section component.
 */
export const Section = ({
    children,
    id,
    title,
    clasNameSection
}: {
    children: React.ReactNode,
    id: string,
    title?: string,
    clasNameSection?: string
}) => {
    return (
        <section
            className={`${clasNameSection}`}
            id={`${id}`}
        >
            <h2 className="text-dark-blue text-center text-2xl">{title}</h2>
            {children}
        </section>
    )
}

/**
 * Renders a card component with the given children.
 *
 * @param {React.ReactNode} children - The content to be rendered inside the card.
 * @return {React.ReactNode} The rendered card component.
 */
export const Card = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div
            className="w-36 h-52 bg-white border-4 border-dark-green mx-auto"
        >
            {children}
        </div>
    )
}

export const Button = ({
    buttonText,
    hrefBtn,
    btnClassName
}: {
    buttonText: string,
    hrefBtn: string,
    btnClassName?: string
}) => {
    return (
        <button className={`p-3 bg-light-red text-white border-[2px] rounded-3xl ${btnClassName}`}>
            <a href={`${hrefBtn}`} target="_blank">{buttonText}</a>
        </button>
    )
}

export const IconButton = ({
    children,
    hrefBtn
}: {
    children: React.ReactNode,
    hrefBtn: string
}) => {
    return (
        <div className="rounded-full w-10 h-10">
            <a href={`${hrefBtn}`} target="_blank" className="text-dark-blue">
                {children}
            </a>
        </div>
    )
}