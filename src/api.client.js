
// generated by ./scripts/generate-stateful-client
export default function client(token) {
  var applied = {}
  applied.auth = {}
  applied.bots = {}
  applied.channels = {}
  applied.chat = {}
  applied.dnd = {}
  applied.emoji = {}
  applied.files.comments = {}
  applied.files = {}
  applied.groups = {}
  applied.im = {}
  applied.mpim = {}
  applied.pins = {}
  applied.reactions = {}
  applied.reminders = {}
  applied.rtm = {}
  applied.search = {}
  applied.stars = {}
  applied.team = {}
  applied.team.profile = {}
  applied.usergroups = {}
  applied.usergroups.users = {}
  applied.users = {}
  applied.users.profile = {}
  applied.auth.test = function (params, callback) {
    params.token = token
    require('./auth.test').call({}, params, callback)
  }
  applied.bots.info = function (params, callback) {
    params.token = token
    require('./bots.info').call({}, params, callback)
  }
  applied.channels.archive = function (params, callback) {
    params.token = token
    require('./channels.archive').call({}, params, callback)
  }
  applied.channels.create = function (params, callback) {
    params.token = token
    require('./channels.create').call({}, params, callback)
  }
  applied.channels.history = function (params, callback) {
    params.token = token
    require('./channels.history').call({}, params, callback)
  }
  applied.channels.info = function (params, callback) {
    params.token = token
    require('./channels.info').call({}, params, callback)
  }
  applied.channels.invite = function (params, callback) {
    params.token = token
    require('./channels.invite').call({}, params, callback)
  }
  applied.channels.join = function (params, callback) {
    params.token = token
    require('./channels.join').call({}, params, callback)
  }
  applied.channels.kick = function (params, callback) {
    params.token = token
    require('./channels.kick').call({}, params, callback)
  }
  applied.channels.leave = function (params, callback) {
    params.token = token
    require('./channels.leave').call({}, params, callback)
  }
  applied.channels.list = function (params, callback) {
    params.token = token
    require('./channels.list').call({}, params, callback)
  }
  applied.channels.mark = function (params, callback) {
    params.token = token
    require('./channels.mark').call({}, params, callback)
  }
  applied.channels.rename = function (params, callback) {
    params.token = token
    require('./channels.rename').call({}, params, callback)
  }
  applied.channels.setPurpose = function (params, callback) {
    params.token = token
    require('./channels.setPurpose').call({}, params, callback)
  }
  applied.channels.setTopic = function (params, callback) {
    params.token = token
    require('./channels.setTopic').call({}, params, callback)
  }
  applied.channels.unarchive = function (params, callback) {
    params.token = token
    require('./channels.unarchive').call({}, params, callback)
  }
  applied.chat.delete = function (params, callback) {
    params.token = token
    require('./chat.delete').call({}, params, callback)
  }
  applied.chat.meMessage = function (params, callback) {
    params.token = token
    require('./chat.meMessage').call({}, params, callback)
  }
  applied.chat.postMessage = function (params, callback) {
    params.token = token
    require('./chat.postMessage').call({}, params, callback)
  }
  applied.chat.update = function (params, callback) {
    params.token = token
    require('./chat.update').call({}, params, callback)
  }
  applied.dnd.endDnd = function (params, callback) {
    params.token = token
    require('./dnd.endDnd').call({}, params, callback)
  }
  applied.dnd.endSnooze = function (params, callback) {
    params.token = token
    require('./dnd.endSnooze').call({}, params, callback)
  }
  applied.dnd.info = function (params, callback) {
    params.token = token
    require('./dnd.info').call({}, params, callback)
  }
  applied.dnd.setSnooze = function (params, callback) {
    params.token = token
    require('./dnd.setSnooze').call({}, params, callback)
  }
  applied.dnd.teamInfo = function (params, callback) {
    params.token = token
    require('./dnd.teamInfo').call({}, params, callback)
  }
  applied.emoji.list = function (params, callback) {
    params.token = token
    require('./emoji.list').call({}, params, callback)
  }
  applied.files.comments.add = function (params, callback) {
    params.token = token
    require('./files.comments.add').call({}, params, callback)
  }
  applied.files.comments.delete = function (params, callback) {
    params.token = token
    require('./files.comments.delete').call({}, params, callback)
  }
  applied.files.comments.edit = function (params, callback) {
    params.token = token
    require('./files.comments.edit').call({}, params, callback)
  }
  applied.files.delete = function (params, callback) {
    params.token = token
    require('./files.delete').call({}, params, callback)
  }
  applied.files.info = function (params, callback) {
    params.token = token
    require('./files.info').call({}, params, callback)
  }
  applied.files.list = function (params, callback) {
    params.token = token
    require('./files.list').call({}, params, callback)
  }
  applied.files.revokePublicURL = function (params, callback) {
    params.token = token
    require('./files.revokePublicURL').call({}, params, callback)
  }
  applied.files.sharedPublicURL = function (params, callback) {
    params.token = token
    require('./files.sharedPublicURL').call({}, params, callback)
  }
  applied.files.upload = function (params, callback) {
    params.token = token
    require('./files.upload').call({}, params, callback)
  }
  applied.groups.archive = function (params, callback) {
    params.token = token
    require('./groups.archive').call({}, params, callback)
  }
  applied.groups.close = function (params, callback) {
    params.token = token
    require('./groups.close').call({}, params, callback)
  }
  applied.groups.create = function (params, callback) {
    params.token = token
    require('./groups.create').call({}, params, callback)
  }
  applied.groups.createChild = function (params, callback) {
    params.token = token
    require('./groups.createChild').call({}, params, callback)
  }
  applied.groups.history = function (params, callback) {
    params.token = token
    require('./groups.history').call({}, params, callback)
  }
  applied.groups.info = function (params, callback) {
    params.token = token
    require('./groups.info').call({}, params, callback)
  }
  applied.groups.invite = function (params, callback) {
    params.token = token
    require('./groups.invite').call({}, params, callback)
  }
  applied.groups.kick = function (params, callback) {
    params.token = token
    require('./groups.kick').call({}, params, callback)
  }
  applied.groups.leave = function (params, callback) {
    params.token = token
    require('./groups.leave').call({}, params, callback)
  }
  applied.groups.list = function (params, callback) {
    params.token = token
    require('./groups.list').call({}, params, callback)
  }
  applied.groups.mark = function (params, callback) {
    params.token = token
    require('./groups.mark').call({}, params, callback)
  }
  applied.groups.open = function (params, callback) {
    params.token = token
    require('./groups.open').call({}, params, callback)
  }
  applied.groups.rename = function (params, callback) {
    params.token = token
    require('./groups.rename').call({}, params, callback)
  }
  applied.groups.setPurpose = function (params, callback) {
    params.token = token
    require('./groups.setPurpose').call({}, params, callback)
  }
  applied.groups.setTopic = function (params, callback) {
    params.token = token
    require('./groups.setTopic').call({}, params, callback)
  }
  applied.groups.unarchive = function (params, callback) {
    params.token = token
    require('./groups.unarchive').call({}, params, callback)
  }
  applied.im.close = function (params, callback) {
    params.token = token
    require('./im.close').call({}, params, callback)
  }
  applied.im.history = function (params, callback) {
    params.token = token
    require('./im.history').call({}, params, callback)
  }
  applied.im.list = function (params, callback) {
    params.token = token
    require('./im.list').call({}, params, callback)
  }
  applied.im.mark = function (params, callback) {
    params.token = token
    require('./im.mark').call({}, params, callback)
  }
  applied.im.open = function (params, callback) {
    params.token = token
    require('./im.open').call({}, params, callback)
  }
  applied.mpim.close = function (params, callback) {
    params.token = token
    require('./mpim.close').call({}, params, callback)
  }
  applied.mpim.history = function (params, callback) {
    params.token = token
    require('./mpim.history').call({}, params, callback)
  }
  applied.mpim.list = function (params, callback) {
    params.token = token
    require('./mpim.list').call({}, params, callback)
  }
  applied.mpim.mark = function (params, callback) {
    params.token = token
    require('./mpim.mark').call({}, params, callback)
  }
  applied.mpim.open = function (params, callback) {
    params.token = token
    require('./mpim.open').call({}, params, callback)
  }
  applied.pins.add = function (params, callback) {
    params.token = token
    require('./pins.add').call({}, params, callback)
  }
  applied.pins.list = function (params, callback) {
    params.token = token
    require('./pins.list').call({}, params, callback)
  }
  applied.pins.remove = function (params, callback) {
    params.token = token
    require('./pins.remove').call({}, params, callback)
  }
  applied.reactions.add = function (params, callback) {
    params.token = token
    require('./reactions.add').call({}, params, callback)
  }
  applied.reactions.get = function (params, callback) {
    params.token = token
    require('./reactions.get').call({}, params, callback)
  }
  applied.reactions.list = function (params, callback) {
    params.token = token
    require('./reactions.list').call({}, params, callback)
  }
  applied.reactions.remove = function (params, callback) {
    params.token = token
    require('./reactions.remove').call({}, params, callback)
  }
  applied.reminders.add = function (params, callback) {
    params.token = token
    require('./reminders.add').call({}, params, callback)
  }
  applied.reminders.complete = function (params, callback) {
    params.token = token
    require('./reminders.complete').call({}, params, callback)
  }
  applied.reminders.delete = function (params, callback) {
    params.token = token
    require('./reminders.delete').call({}, params, callback)
  }
  applied.reminders.info = function (params, callback) {
    params.token = token
    require('./reminders.info').call({}, params, callback)
  }
  applied.reminders.list = function (params, callback) {
    params.token = token
    require('./reminders.list').call({}, params, callback)
  }
  applied.rtm.start = function (params, callback) {
    params.token = token
    require('./rtm.start').call({}, params, callback)
  }
  applied.search.all = function (params, callback) {
    params.token = token
    require('./search.all').call({}, params, callback)
  }
  applied.search.files = function (params, callback) {
    params.token = token
    require('./search.files').call({}, params, callback)
  }
  applied.search.messages = function (params, callback) {
    params.token = token
    require('./search.messages').call({}, params, callback)
  }
  applied.stars.add = function (params, callback) {
    params.token = token
    require('./stars.add').call({}, params, callback)
  }
  applied.stars.list = function (params, callback) {
    params.token = token
    require('./stars.list').call({}, params, callback)
  }
  applied.stars.remove = function (params, callback) {
    params.token = token
    require('./stars.remove').call({}, params, callback)
  }
  applied.team.accessLogs = function (params, callback) {
    params.token = token
    require('./team.accessLogs').call({}, params, callback)
  }
  applied.team.billableInfo = function (params, callback) {
    params.token = token
    require('./team.billableInfo').call({}, params, callback)
  }
  applied.team.info = function (params, callback) {
    params.token = token
    require('./team.info').call({}, params, callback)
  }
  applied.team.integrationLogs = function (params, callback) {
    params.token = token
    require('./team.integrationLogs').call({}, params, callback)
  }
  applied.team.profile.get = function (params, callback) {
    params.token = token
    require('./team.profile.get').call({}, params, callback)
  }
  applied.usergroups.create = function (params, callback) {
    params.token = token
    require('./usergroups.create').call({}, params, callback)
  }
  applied.usergroups.disable = function (params, callback) {
    params.token = token
    require('./usergroups.disable').call({}, params, callback)
  }
  applied.usergroups.enable = function (params, callback) {
    params.token = token
    require('./usergroups.enable').call({}, params, callback)
  }
  applied.usergroups.list = function (params, callback) {
    params.token = token
    require('./usergroups.list').call({}, params, callback)
  }
  applied.usergroups.update = function (params, callback) {
    params.token = token
    require('./usergroups.update').call({}, params, callback)
  }
  applied.usergroups.users.list = function (params, callback) {
    params.token = token
    require('./usergroups.users.list').call({}, params, callback)
  }
  applied.usergroups.users.update = function (params, callback) {
    params.token = token
    require('./usergroups.users.update').call({}, params, callback)
  }
  applied.users.deletePhoto = function (params, callback) {
    params.token = token
    require('./users.deletePhoto').call({}, params, callback)
  }
  applied.users.getPresence = function (params, callback) {
    params.token = token
    require('./users.getPresence').call({}, params, callback)
  }
  applied.users.identity = function (params, callback) {
    params.token = token
    require('./users.identity').call({}, params, callback)
  }
  applied.users.info = function (params, callback) {
    params.token = token
    require('./users.info').call({}, params, callback)
  }
  applied.users.list = function (params, callback) {
    params.token = token
    require('./users.list').call({}, params, callback)
  }
  applied.users.profile.get = function (params, callback) {
    params.token = token
    require('./users.profile.get').call({}, params, callback)
  }
  applied.users.profile.set = function (params, callback) {
    params.token = token
    require('./users.profile.set').call({}, params, callback)
  }
  applied.users.setActive = function (params, callback) {
    params.token = token
    require('./users.setActive').call({}, params, callback)
  }
  applied.users.setPhoto = function (params, callback) {
    params.token = token
    require('./users.setPhoto').call({}, params, callback)
  }
  applied.users.setPresence = function (params, callback) {
    params.token = token
    require('./users.setPresence').call({}, params, callback)
  }

  return applied
}

