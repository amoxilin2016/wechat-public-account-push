/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxf499e56db5cb00c7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a0ebdedef37c78a9dd386b0ddeb32c3c',

  PROVINCE: '天津',
  CITY: '天津',
  SWITCH: {
  
    // 土味情话(彩虹屁), 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    earthyLoveWords: true,
  },
  USERS: [
    {
      // 想要发送的人的名字
      name: '琦琦',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oUg985itrOTozxcg6-3-TQ69ZAsU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'aTQLSuqeeE9uZUaUOZ1Bjb5HddgcvLPamJhj1VDXWOY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '琦琦', year: '1999', date: '07-28',isShowAge: true,
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小马', year: '1997', date: '11-12',isShowAge: true,
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
    // 在一起的日子
        { keyword: 'love_day', date: '2023-07-28' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-11-12' }
      ],
    },
        {
      // 想要发送的人的名字
      name: '琦琦',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oUg985oTvkq9yIW6AgtexJFyJARw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'aTQLSuqeeE9uZUaUOZ1Bjb5HddgcvLPamJhj1VDXWOY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-28',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '琦琦', year: '1999', date: '07-28',isShowAge: true,
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小马', year: '1997', date: '11-12',isShowAge: true,
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        { keyword: 'encourage_oneself', contents: '小马说今天要给你一个么么哒，不过明天给你什么还没想好。' },
    // 在一起的日子
        { keyword: 'love_day', date: '2023-07-28' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-11-12' }
      ],
      SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    { keyword: 'encourage_oneself', contents: '今天给你一个么么哒，明天给什么我再想想！' }
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	kW-1xK45XGq8MqEnbd9fSAjS2egURNogpcxzq1jwC-s',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oUg985itrOTozxcg6-3-TQ69ZAsU',
    }
  ],

}

module.exports = USER_CONFIG

