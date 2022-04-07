import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { APP_TEST, APP_HOME_ONE, APP_HOME_TWO } from '../../router'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '@src/controller/reducer/globalSlice'
import { Button } from 'antd'

import './home.module.less'

const Home = (props: any): JSX.Element => {
  console.log(props)
  const disPatch = useDispatch()
  const test = useSelector((state: any) => {
    return state.globalSlice.userInfo.test
  })

  useEffect(() => {
    setTimeout(() => {
      disPatch(getUserInfo({ test: '777' }))
    }, 2000)
  }, [disPatch])

  return (
    <div styleName='home'>
      <Link
        to={APP_TEST}
      >
        <span>Home</span>
      </Link>
      <Link
        to={APP_HOME_ONE}
      >
        <span>APP_HOME_ONE</span>
      </Link>
      <Link
        to={APP_HOME_TWO}
      >
        <span>APP_HOME_TWO</span>
      </Link>
      <div className='test1'>热更新似乎a不是s111很好用asd啊{test}</div>
      <Button type='primary'>123</Button>
      <Outlet />
    </div>
  )
}

export default Home
