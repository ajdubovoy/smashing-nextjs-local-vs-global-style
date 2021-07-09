import Image from 'next/image'
import style from './TeaListItem.module.css'

const TeaListItem = (props) => {
  const { tea } = props

  return <li className={style.TeaListItem}>
    <div className={style.ImageContainer}>
      <Image src={tea.image} alt="" objectFit="cover" objectPosition="center" layout="fill" />
    </div>

    <div className={style.Title}>
      <h2>{tea.name}</h2>
      <p>{tea.description}</p>
    </div>
  </li>
}

export default TeaListItem
