type Item = {
  link: string
  content: string
}

interface FooterItems {
  copyrights: string
  items: Item[]
}

const Footer = ({ items, copyrights }: FooterItems) => {
  return (
    <div className="tablet:flex-row tablet:mb-8 mt-auto flex flex-col-reverse gap-8 text-center">
      <p>{copyrights}</p>
      <div className="tablet:flex-row flex flex-col gap-3.5">
        {items.map((item, index) => {
          return (
            <a key={index} target="_blank" href={item.link}>
              {item.content}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
