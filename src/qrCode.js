import React, { Component } from 'react';
import WodaXLoginWithQrCode from 'wodax-login-qrcode.react';

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <WodaXLoginWithQrCode
        options={{
          title: `打开我打App，扫描二维码登录`,
          titleStyle: {
            color: "red"
          }
        }}
      />
    )
  }
}

export default QrCode;