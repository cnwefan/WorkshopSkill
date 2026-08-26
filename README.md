# Workshop Skill Manager (车间蓝领员工技能管理平台)

这是一个专为离散制造车间设计的蓝领员工技能与能力管理平台。它不仅是一个 UI 原型，而是一个具备完整前后端架构、预留 API 接口、并内置“技能差距分析引擎”的全栈应用。

---

## 🛠 架构说明 (Architecture)

项目采用 **Vite + Express** 的全栈混合架构，确保了开发效率与生产环境的稳定性。

- **前端 (Frontend)**: React 18 + Tailwind CSS + Recharts (数据可视化) + Lucide React (图标库)。
- **后端 (Backend)**: Express 框架，通过 `server.ts` 统一调度。
- **开发模式**: 在 `npm run dev` 模式下，Express 服务器会作为主入口，通过 Vite Middleware 实时渲染前端页面并处理 API 请求。
- **数据层 (Data Layer)**: 
  - 当前版本使用 **虚拟数据库 (`src/db/mockDb.ts`)** 进行演示。
  - 数据结构完全遵循关系型数据库（PostgreSQL）逻辑，方便后续无缝迁移。

---

## 📂 核心模块与代码映射

### 1. 业务逻辑层 (Business Logic)
- **`src/lib/engine.ts`**: 核心技能差距引擎。包含 `Baseline - Actual = Gap` 的计算逻辑，以及将差距自动解构为“理论培训”和“MES 实操工时”的算法。
- **`src/db/mockDb.ts`**: 系统的“真相来源”。定义了用户、工位、技能基准和现有技能等级的模拟数据。**调优接口请从此处开始**。

### 2. 后端接口 (API Layer)
- **`server.ts`**: 服务端主入口，配置了跨域、JSON 解析以及 Vite 中间件。
- **`src/api/routes.ts`**: 预留的 API 路由。目前已实现 `/api/skills`, `/api/employees`, `/api/workshops` 等接口，直接与 `mockDb` 联动。

### 3. 前端视图 (UI Views)
- **`src/App.tsx`**: 全局视图管理器。使用 `AppView` 状态机控制页面跳转（Dashboard, Roadmap, Plans, Approvals 等）。
- **`src/components/`**: 
  - `SupervisorDashboard.tsx`: 主管仪表盘，包含产能缺口分析。
  - `WorkerDashboard.tsx`: 员工视角，包含技能雷达图。
  - `SkillMatrix.tsx`: 跨工位的技能矩阵表格。
  - `ApprovalCenter.tsx`: **(新)** 审批流程中心，处理技能晋升申请。
  - `TrainingPlans.tsx`: 培训计划列表。
  - `OperatorList.tsx`: 全量人员管理档案。

---

## 🚀 如何在本地 VSCode 中完美运行

为了避免出现“空白页”，请严格遵循以下步骤：

### 1. 环境检查
- 确保电脑已安装 [Node.js](https://nodejs.org/) (建议版本 v18.x 或 v20.x)。

### 2. 获取代码并安装依赖
在终端中进入项目根目录，运行：
```bash
npm install
```
*注意：这步非常重要，它会根据 `package.json` 下载所有必要的第三方库（如 `recharts`, `lucide-react`, `motion` 等）。*

### 3. 启动演示
**不要**直接打开 `index.html`。请在终端运行：
```bash
npm run dev
```
启动成功后，在浏览器访问：`http://localhost:3000`。

### 4. 为什么之前可能会看到空白页？
- **原因 A**: 只安装了依赖但没有运行 `npm run dev`。
- **原因 B**: 尝试直接用插件（如 Live Server）打开 `index.html`。由于本项目是全栈应用，前端依赖于后端 API 路由，必须通过 `npm run dev` 启动 Express 服务器。

---

## 💡 后续开发建议 (给同事的笔记)

1. **接入真实数据库**: 
   - 在 `src/db/` 下配置 Drizzle 或 Prisma。
   - 在 `src/api/routes.ts` 中将 `mockDb` 调用替换为异步的数据库查询。
2. **MES 实时同步**:
   - 可以在 `server.ts` 中添加一个新的定时任务（Cron Job），模拟从 MES 系统拉取 `clock_in` 日志。
3. **UI 调优**:
   - 所有的样式均基于 Tailwind CSS，可直接在组件中使用 `className` 修改。
   - 动画效果由 `motion/react` (Framer Motion) 提供，逻辑位于各组件的 `motion.div` 中。

---

**由 AI Studio Build 协作开发**
