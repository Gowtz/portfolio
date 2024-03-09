export default async function Repo({ lang }) {
    const la: { [key: string]: number } = await fetch(lang).then(res => res.json())
    const keyss = await Object.keys(la)
    return (
        <div>
            {
                keyss.map((key) => {return <span key={key} className="px-1"> {key}</span> })
            }
        </div>
    )
}