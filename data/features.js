/**
 * ========================================
 * 核心功能数据配置
 * ========================================
 * 
 * 这个文件定义了首页"核心功能"板块显示的三个功能卡片内容
 * 
 * 如何修改：
 * - title: 功能标题，显示在卡片顶部
 * - description: 功能描述，显示在标题下方
 * - icon: 图标名称，对应 data/icons.js 中定义的图标
 * - color: 颜色主题，对应 data/icons.js 中定义的颜色（blue/purple/pink/green）
 */

export const features = [
  {
    title: '可视化编辑器',
    description: '通过拖拽节点和连线的方式，直观地设计AI模型架构，无需编写复杂代码。',
    icon: 'puzzle',   // 拼图图标，代表模块化设计
    color: 'blue'     // 蓝色主题
  },
  {
    title: '实时代码生成',
    description: '设计完成后，自动生成PyTorch或TensorFlow代码，即刻部署运行。',
    icon: 'code',     // 代码图标
    color: 'purple'   // 紫色主题
  },
  {
    title: '团队协作',
    description: '支持多人在线协作编辑，实时同步，让团队高效沟通架构设计思路。',
    icon: 'users',    // 用户组图标
    color: 'pink'     // 粉色主题
  }
]
