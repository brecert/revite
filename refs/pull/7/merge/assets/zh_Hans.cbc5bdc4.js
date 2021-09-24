const e={settings:{categories:{client_settings:"客户端设置",user_settings:"用户设置"},title:"设置",pages:{appearance:{title:"外观",export_clipboard:"复制到粘贴板",import_clipboard:"从剪贴板导入",import_manual:"手动导入",import_theme:"从文本导入主题",theme_data:"主题数据",overrides:"主题覆写",reset_overrides:"重置覆写",sync:"同步选项",custom_css:"自定义 CSS",advanced:"高级选项",message_display:"消息显示",accent_selector:"主题颜色",color:{dark:"深色",light:"浅色"},display:{default_description:"美观、时尚且现代。",compact:"简约",default:"默认",compact_description:"怀旧 IRC 风格。"},theme:"主题",emoji_pack:"表情包",mono_font:"等宽字体偏好",ligatures:"连字",font:"字体",ligatures_desc:"如果字体支持，连字特性可以将相邻字符结合在一起，例如，将 -> 字符显示为箭头。您可以选择 Inter 字体并启用此选项试试效果。",import:"导入主题"},sessions:{title:"登录的设备",created:"创建于 {{time_ago}}",this_device:"此设备",active_sessions:"活跃设备",logout:"登出其他所有设备"},account:{change_field:"更改",title:"我的账户","2fa":{add_auth:"添加认证器",remove_auth:"移除认证器",title:"双重认证",description:"启用双重认证，为您的账户添加额外一层保护。"},unique_id:"这是您账户的用户唯一标识。",manage:{title:"账户管理",description:"您随时可以禁用或删除账户。此操作会登出并彻底删除您的账户数据，包括您的消息记录与好友。",delete:"删除账户",disable:"禁用账户"}},notifications:{title:"通知",enable_push:"启用推送通知。",enable_desktop:"启用桌面通知。",descriptions:{enable_outgoing_sound:"此项设定将会在你收到信息是播放提示。",enable_sound:"此项设定将会在你收到信息是播放提示音。",enable_push:"此选项将会在您离线时接收通知。",enable_desktop:"此选项将会在应用运行时向您发送通知。"},enable_outgoing_sound:"在发送时播放声音。",enable_sound:"收到消息时播放声音。",sounds:"声音",push_notifications:"推送通知",sound:{outbound:"发出消息",call_join:"用户加入语音",message:"收到消息",call_leave:"用户离开语音"}},logOut:"登出",feedback:{title:"反馈",send:"发送反馈",describe:"在这里描述您的问题.",other:"其他",feature:"新功能",bug:"漏洞追踪",report:"想要反馈什么呢？",suggest_desc:"在 GitHub 讨论区为 Revolt 建议新功能。",suggest:"提交功能建议",issue:"创建新 Issue",issue_desc:"为了帮助我们更轻松地对问题进行分类，您可以在 GitHub 上创建 Issue。",bug_desc:"在此处查看当前活跃的错误报告。"},source_code:"源代码",donate:{title:"捐赠"},language:{title:"语言",select:"选择语言",const:"人造语言",other:"其他语言选项"},profile:{placeholder:"介绍一下您自己…",fetching:"正在获取您的个人资料…",info:"信息",title:"个人资料",edit_background:"编辑背景",custom_background:"自定义背景",profile_picture:"个人资料头像",edit_profile:"编辑个人资料"},sync:{title:"同步",descriptions:{appearance:"此项将会同步表情包与消息显示选项。",theme:"此项将会同步您的主题、颜色与自定义 CSS。",locale:"此项将会同步您当前选择的语言。"},categories:"同步分类"},experiments:{title:"实验室",not_available:"目前没有可用的实验功能。",features:"可用功能"},native:{title:"桌面设置"},bots:{title:"我的机器人",public_bot_tip:"机器人为公开。所有人都可以邀请。",reserved:"注意：此字段为将来保留。",create_bot:"创建机器人",copy_invite:"复制邀请链接",add:"添加机器人",token:"令牌",private_bot_tip:"机器人为私密。只有您可以邀请。",public_bot:"公开机器人",public_bot_desc:"是否允许其他用户邀请此机器人。",interactions_url:"交互 URL"},audio:{title:"语音设置",input_device:"麦克风",output_device:"扬声器 / 耳机"}},tips:{sessions:{b:"请更改密码并启用双重认证以保护您的账户。",a:"如果您在列表中看到未知的设备，"},languages:{b:"帮助提供更多翻译。",a:"缺少您需要的语言吗？"},account:{b:"前往您的个人资料设置。",a:"要自定义您的公开个人资料吗？"}},channel_pages:{overview:{description:"频道简介",name:"频道名称",title:"概况"},permissions:{title:"权限"}},actions:{upload:"上传",remove:"移除",max_filesize:"（最大 {{filesize}}）"},server_pages:{overview:{system_messages:"系统消息频道",title:"概况",name:"服务器名称",description:"频道描述"},invites:{title:"邀请",channel:"频道",code:"邀请码",invitor:"邀请人",revoke:"撤销"},bans:{title:"封禁",revoke:"撤销",user:"用户",no_reason:"无封禁原因。",reason:"封禁原因"},roles:{title:"角色"},members:{title:"成员"},categories:{title:"类别"}},permissions:{server:"服务器权限",channel:"频道权限",create_role:"创建新角色",role_name:"角色名称",default_role:"默认"}},main:{groups:{name:"群组名",create:"创建一个群组",owner:"群主",description:"群组简介"},channel:{bot:"机器人",unknown_user:"<未知用户>",system:{user_left:"{{user}} 离开了",user_joined:"{{user}} 加入了",added_by:"{{other_user}} 邀请了 {{user}}",removed_by:"{{other_user}} 移除了 {{user}}",channel_renamed:"{{user}} 将频道更名为 {{name}}",channel_icon_changed:"{{user}} 更改了频道图标",channel_description_changed:"{{user}} 更改了频道简介",user_kicked:"{{user}} 被踢出",user_banned:"{{user}} 被封禁了"},typing:{several:"多人正在输入…",multiple:"{{userlist}} 与 {{user}} 正在输入…",single:"{{user}} 正在输入…"},attached_file:"上传了 {{filename}}",failed_upload:"上传失败！",uploading_file:"正在上传…",message_saved:"保存至笔记",message_who:"发送至 {{person}}",message_where:"发送至 {{channel_name}}",edited:"（已编辑）",start:{group:"这里是你们对话的开头。"},misc:{jump_present:"跳转到现在",viewing_old:"正在查看旧消息",spoiler_attachment:"剧透警告",no_sending:"您没有权限在此频道发送消息。",blocked_user:"已屏蔽用户",failed_load:"无法载入消息。",blocked_messages:"{{count}} 条消息被屏蔽",sent_file:"发送附件",sent_multiple_files:"发送多个附件"},voice:{unmute:"取消静音",mute:"静音",leave:"离开",connected:"已连接语音"},nsfw:{channel:{marked:"此频道被标记为少儿不宜。",confirm:"进入频道"},confirm:"我确定我已成年。"},search:{sort:{relevance:"相关性",latest:"最新",oldest:"最旧"},title:"搜索"},notifications:{none:"不通知",default:"使用默认值",all:"所有消息",mention:"仅提及我的",muted:"静音"}},categories:{members:"成员",channels:"频道",conversations:"对话",participants:"参与者"},servers:{description:"服务器简介",channel_description:"频道简介",custom_banner:"自定义横幅",create:"创建服务器",name:"服务器名称",channel_name:"频道名称",owner:"服务器所有者",text_channel:"文本频道",voice_channel:"语音频道",channel_type:"频道类型"}},navigation:{tabs:{saved:"保存的笔记",unreads:"未读消息",friends:"好友",dev:"开发者",home:"主页"}},status:{offline:"离线",invisible:"隐身",busy:"勿扰",idle:"离开",online:"在线"},special:{friends:{blocked:"已屏蔽",pending:"待处理的请求",outgoing:"发出的好友请求。",incoming:"收到的好友请求。",nobody:"这里目前还没有人！",sent:"发送",from:{multiple:"来自 {{userlist}} 与 {{user}}",several:"来自 {{userlist}} 与其他 {{count}} 人…",single:"来自 {{user}}"}},popovers:{user_profile:{no_groups:"你们没有共同群组！",no_users:"你们没有共同好友！",badges:{translator:"翻译者",early_adopter:"早期用户",supporter:"支持者",responsible_disclosure:"漏洞发现者"},mutual_groups:"共同群组",mutual_friends:"共同好友",profile:"个人资料",sub:{connections:"连接",information:"信息",badges:"徽章"},empty:"这里有点空空的…",mutual_servers:"共同的服务器",no_servers:"你们没有共同的服务器！"},user_picker:{select:"选择要添加的好友。"},create_bot:{title:"创建新机器人",failed:"创建机器人失败！"}},modals:{clipboard:{https:"您当前不在 HTTPS 连接环境。",copy:"手动复制：",unavailable:"剪贴板不可用！"},signed_out:"您已登出！",actions:{cancel:"取消",continue:"继续",reload:"重新加载应用",send_email:"发送电子邮件",preview:"预览",update:"更新",close:"关闭",save:"保存",ok:"确定",block:"屏蔽",leave:"离开",create:"创建",ban:"封禁",delete:"删除",remove:"移除",back:"返回",hide:"隐藏",reveal:"显示",kick:"踢出",edit:"编辑"},account:{failed:"更改失败！",change:{password:"更改您的密码",email:"更改您的电子邮箱",username:"更改您的用户名"}},prompt:{confirm_leave_long:"除非重新接受邀请，否则您将无法重新加入。",confirm_leave:"要离开 {{name}} 吗？",confirm_ban_reason:"封禁原因",block_user:"要屏蔽 {{name}} 吗？",unfriend_user_long:"您可能无法再与他们对话，除非重新添加。",confirm_delete:"要删除 {{name}} 吗？",unfriend_user:"要移除 {{name}} 吗？",block_user_long:"您确定要屏蔽 {{name}} 吗？他们将会被移出您的好友列表。",confirm_delete_long:"删除后，将无法恢复。",create_invite_generate:"正在生成邀请…",create_invite_created:"这是您的新邀请码：",confirm_kick:"您确定要踢出 {{name}} 吗？",confirm_close_dm:"要关闭与 {{name}} 的对话吗？",confirm_delete_message_long:"您确定要删除吗？",confirm_ban:"您即将封禁 {{name}}",confirm_close_dm_long:"这也会为对方删除此对话，但您可以稍后再重新打开。"},onboarding:{pick:"选择一个用户名，让人们能够找到您，以后也可以在设置中修改。",welcome:"欢迎使用"},error:"发生错误！",external_links:{title:"外部链接可能有危险！",short:"您确定要访问： ",trust_domain:"信任此域名"},token_reveal:"{{name}} 的令牌"},status:{disconnected:"已断开连接。",reconnecting:"正在重新连接…",connecting:"正在连接…",offline:"离线。"},requires_online:"您需要在线才能查看。",copy_username:"点击以复制用户名",invite:{user_count:"{{member_count}} 位用户",invited_by:"由 {{user}} 邀请",login:"登录 Revolt",accept:"接受邀请",invalid:"无效邀请！",invalid_desc:"此邀请可能不存在，或者您没有权限加入。"},copy:"点击以复制"},context_menu:{unblock_user:"取消屏蔽用户",block_user:"屏蔽用户",quote_message:"引用消息",set_custom_status:"设置自定义状态",clear_status:"清除状态",custom_status:"自定义状态",cancel_friend:"取消请求",remove_friend:"删除好友",add_friend:"添加好友",open_link:"打开链接",copy_link:"复制链接",save_video:"保存视频",open_video:"打开视频",save_image:"保存图像",open_image:"打开图像",save_file:"保存文件",open_file:"打开文件",remove_member:"从群组中移除",delete_message:"删除消息",edit_message:"编辑消息",cancel_message:"取消发送",retry_message:"重新发送",mark_as_read:"标记为已读",message_user:"消息",mention:"提及",copy_mid:"复制消息 ID",copy_cid:"复制频道 ID",copy_uid:"复制用户 ID",copy_text:"复制文本",copy_id:"复制 ID",open_channel_settings:"频道设置",open_group_settings:"群组设置",copy_selection:"复制选择区域",view_profile:"查看个人资料",create_invite:"创建邀请",open_notification_options:"通知选项",close_dm:"关闭私聊",open_server_settings:"服务器设置",leave_group:"离开群组",leave_server:"离开服务器",copy_message_link:"复制消息链接",kick_member:"踢出成员",edit_identity:"编辑身份",ban_member:"封禁成员",copy_sid:"复制服务器 ID",create_channel:"创建频道",reply_message:"回复",delete_channel:"删除频道",delete_server:"删除服务器",create_category:"创建类别"},permissions:{required:"需要权限"}},n={error:{resend:"重新发送失败！",reset:"重置失败！",login:"登录失败！",create:"注册失败！"},successful_registration:"成功注册！",open_mail_provider:"打开 {{provider}}",check_spam:"如果找不到，请检查垃圾邮件",check_mail:"请检查您的邮件。",cancel:"取消请求。",resend:"重新发送验证码。",missing_verification:"没有收到邮件吗？",create:"创建新账户。",existing:"已经有账户了吗？",new:"第一次使用吗？",remembered:"回到登录界面。",set_password:"设置新密码。",reset:"重置密码。",forgot:"忘记密码了吗？",enter:{current_password:"输入您现在的密码。",invite:"输入您的邀请码。",password:"输入您的密码。",email:"输入您的电子邮箱。",username:"输入一个用户名。"},current_password:"当前密码",invite:"邀请码",password:"密码",email:"电子邮箱",username:"用户名",register:"注册",title:"登录",email_delay:"请等待邮件送达，最长可能需要 10 分钟。"},s={image_by:"图片来自",privacy:"隐私政策",tos:"服务条款",about:"关于",loading:"正在加载…",on:"开",off:"关",disabled:"已禁用",unavailable:"不可用"},t={now_friends:"您与 @{{person}} 成为了好友！",sent_request:"@{{person}} 向您发送了好友请求。"},i={lastWeek:"[上个]dddd {{time}}",nextDay:"[明天] {{time}}",sameDay:"[今天] {{time}}",lastDay:"[昨天] {{time}}",nextWeek:"dddd {{time}}",sameElse:"L",defaults:{date_separator:"-",twelvehour:"no",date_format:"ISO8601"}},a={members:{one:"1 位成员",many:"{{count}} 位成员"}},o={BlockedOther:"此用户已屏蔽您。",Blocked:"您已屏蔽此用户。",AlreadyOnboarded:"已经完成了初始化。",EmailInUse:"电子邮箱已被使用。",Unlabelled:"有些神秘的事情发生了。",Unauthorized:"未经授权。",DeniedNotification:"您拒绝了通知权限，请检查页面设置。",UnsupportedBrowser:"浏览器缺少对此功能的支持。",IoError:"服务器遇到 I/O 错误。",ProbeError:"获取文件元数据失败。",MissingData:"请求缺少数据。",FailedToReceive:"服务器接收您的文件失败。",FileTooLarge:"文件太大。",Unavailable:"不可用。",InvalidEmail:"无效的电子邮箱地址",TooLong:"太长",TooShort:"太短",RequiredField:"必填",NoEffect:"此请求无效。",AlreadySentRequest:"已经向此用户发送了请求。",AlreadyFriends:"已经与此用户成为好友。",UsernameTaken:"用户名已被使用。",InvalidInvite:"无效的代码",MissingInvite:"请求中缺少邀请码。",InvalidToken:"无效的令牌",InvalidCredentials:"电子邮箱或密码错误。",EmailFailed:"电子邮件发送失败。",UnknownUser:"未知的用户。",UnverifiedAccount:"未验证的账户。",InvalidSession:"无效的会话。",MissingHeaders:"缺少 Header。",RenderFail:"模板渲染失败。",OperationFailed:"操作失败。",UnknownError:"请查看浏览器控制台。",MissingPermission:"缺少权限。",InternalError:"内部错误。",DatabaseError:"数据库错误。",FailedValidation:"无法验证字段。",NetworkError:"网络错误。",CompromisedPassword:"此密码不安全。",ReachedMaximumBots:"您已达到机器人最大数量。"},r={server:{ManageServer:{t:"管理服务器",d:"允许成员更改服务器名称、描述、图标和其他相关信息。"},KickMembers:{t:"踢出成员",d:"允许成员从服务器中移除成员。被踢出的成员可以通过邀请重新加入。"},ChangeAvatar:{t:"更改头像",d:"允许成员更改在此服务器上的头像。"},ManageNicknames:{t:"管理昵称",d:"允许成员更改其他成员的昵称。"},ManageRoles:{t:"管理角色",d:"允许成员创建、编辑和删除等级低于自身的角色。也允许他们修改频道的角色权限。"},ChangeNickname:{d:"允许成员更改在此服务器上的昵称。",t:"更改昵称"},RemoveAvatars:{d:"允许成员删除此服务器上其他成员的头像。",t:"移除头像"},ManageChannels:{d:"允许成员创建、编辑和删除频道。",t:"管理频道"},BanMembers:{t:"封禁成员",d:"允许成员从服务器中永久移除成员。"}},channel:{ManageChannel:{t:"管理频道",d:"允许成员编辑或删除频道。"},VoiceCall:{t:"语音聊天",d:"允许成员加入语音频道。"},ManageMessages:{d:"允许成员删除其他成员发送的消息。",t:"管理消息"},EmbedLinks:{d:"允许成员在文本频道发送链接时，显示嵌入内容。",t:"嵌入链接"},View:{d:"允许成员查看他们拥有查看权限的任何频道。",t:"查看频道"},UploadFiles:{d:"允许成员在文本频道上传文件。",t:"上传文件"},SendMessage:{d:"允许成员在文本频道发送消息。",t:"发送消息"},InviteOthers:{t:"邀请成员",d:"允许成员邀请其他用户到此频道。"}}},l={ctrlc:"Ctrl + C"};var c={app:e,login:n,general:s,notifications:t,dayjs:i,quantities:a,error:o,permissions:r,shortcuts:l};export{e as app,i as dayjs,c as default,o as error,s as general,n as login,t as notifications,r as permissions,a as quantities,l as shortcuts};
//# sourceMappingURL=zh_Hans.cbc5bdc4.js.map
