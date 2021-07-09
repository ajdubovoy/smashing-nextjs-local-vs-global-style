import classnames from 'classnames'
import TeaListItem from './TeaListItem'
import style from './TeaList.module.css'

const TeaList = (props) => {
  const { teas } = props

  return <ul role="list" className={classnames(style.TeaList, "grid")}>
    {teas.map(tea =>
      <TeaListItem tea={tea} key={tea.name} />)}
  </ul>
}

export default TeaList
