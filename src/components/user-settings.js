import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  notificationsState: state.settings.notifications ? 'on' : 'off'
})

const NotificationsSelect = ({notificationsState}) => (
  <div>
    <p>
      Notifications are { notificationsState }
    </p>
  </div>
)

export default connect(mapStateToProps)(NotificationsSelect)