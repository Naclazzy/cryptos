import React from 'react'

import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectionOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'

import icon from '../images/cryptocurrency.png'

const navbar = () => {
  return (
    <div className="nav-ctr">
        <div className="logo-ctr">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="Logo">
                <Link to="/"> Crypto Stats</Link>
            </Typography.Title>
            {/* <Button className="menu-control-ctr">

            </Button> */}
        </div>
    </div>
  )
}

export default navbar