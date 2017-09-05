
// 引入组件库
import {Row, Col} from './components/grid/index.js';
import {Menu, MenuItem, SubMenu} from './components/menu/index.js';
import {Input, InputNumber, InputDate} from './components/input/index.js';
import {DatePanel} from './components/panel/panel.js';
import {Icon} from './components/icon/index.js';
import {Button} from './components/button/index.js';
import {Select, Option} from './components/select/index.js';
import {Radio, RadioGroup} from './components/radio/index.js';
import {Checkbox, CheckboxGroup} from './components/checkbox/index.js';
import {Upload, UploadList} from './components/upload/index.js';
import {Table} from './components/table/index.js';
import {Pagination} from './components/pagination/index.js';
import {Modal} from './components/modal/index.js';
import {Progress} from './components/progress/index.js';
import {Loading} from './components/loading/index.js';
import Message from './components/Message/index.js';

const uiworker = {
    version: '1.1.2',
    Row,
    Col,
    Menu,
    MenuItem,
    SubMenu,
    Input,
    InputNumber,
    InputDate,
    DatePanel,
    Icon,
    Button,
    Select,
    Option,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Upload,
    UploadList,
    Table,
    Pagination,
    Modal,
    Progress,
    Loading
};

// 定义插件install方法
const install = function (Vue, options = {}) {
    // 遍历组件封装到全局Vue组件中
    Object.keys(uiworker).forEach(function(key) {
        Vue.component(key, uiworker[key]);
    });
    
    // 添加Vue实例方法，添加到Vue.prototype上实现
    Vue.prototype.$alert = Modal.alert;
    Vue.prototype.$confirm = Modal.confirm;
    Vue.prototype.$Message = Message;
}

// 检测是否为浏览器环境
if (typeof window !== undefined && window.Vue) {
    install(window.Vue);
}

uiworker.install = install;

export default uiworker;