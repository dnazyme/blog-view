import * as React from 'react'
import * as styles from "./index.scss";
import {
  Link,
} from 'react-router-dom'
const item = {
  title: 1,
  path: "/posts",
  search: "?page=1"
}
const items = [item, item, item, item, item]

export default class pageControl extends React.Component {
  render() {
    return (
      <div className={styles.control}>

        {items.map((item, index) => {
          return <Link
            key={index}
            replace
            className={[styles.item, index == 0 && styles.item_selected || ""].join(' ')}
            to={{ pathname: item.path, search: `page=${index}` }} >
            {item.title}
          </Link>
        })}

      </div>
    )
  }
}