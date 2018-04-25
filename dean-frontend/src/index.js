import dva from 'dva';
import './index.css';
import 'ant-design-pro/dist/ant-design-pro.css'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/tableInfo').default)
app.model(require('./models/person').default)
app.model(require('./models/lesson').default)
app.model(require('./models/teach').default)
app.model(require('./models/choice').default)
app.model(require('./models/score').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
