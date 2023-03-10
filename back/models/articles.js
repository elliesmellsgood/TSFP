import { Schema, model } from 'mongoose'

const schema = new Schema({
  date: {
    type: Date,
    default: Date.now()
  },
  title: {
    type: String,
    required: [true, '缺少標題']
  },
  shortDesc: {
    type: String,
    required: [true, '缺少短說明']
  },
  articleText: {
    type: String,
    required: [true, '缺少內文']
  },
  keyWord: {
    type: String,
    required: [true, '缺少關鍵字']
  },
  image: {
    type: String,
    required: [true, '缺少圖片']
  },
  upload: {
    type: Boolean,
    required: [true, '缺少狀態']
  },
  category: {
    type: String,
    required: [true, '缺少分類'],
    enum: {
      values: ['心靈', '自我成長', '品味生活', '藝文', '職場', '人際', '趨勢'],
      message: '分類錯誤'
    }
  }
}, { versionKey: false })

export default model('articles', schema)
