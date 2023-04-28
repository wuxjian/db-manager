import './App.css';
import 'reset-css/reset.css'
import { Layout  } from '@douyinfe/semi-ui';
import DbConfig from "./components/DbConfig";
import Editor from "./components/Editor";

function App() {
    const { Content, Sider, Header } = Layout;
    return (
        <div id="App">
            <Layout style={{height: '100%'}}>
                <Sider style={{width: "300px", overflow: "hidden"}}>
                    <DbConfig/>
                </Sider>
                <Content>
                    <Layout>
                        <Header style={{lineHeight: '50px'}}>header</Header>
                        <Content style={{height: '100%'}}>
                            <Editor/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        </div>
    )
}

export default App
