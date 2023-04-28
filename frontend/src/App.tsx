import './App.css';
import 'reset-css/reset.css'
import { Button, Toast } from '@douyinfe/semi-ui';

function App() {
    return (
        <div id="App">
            <Button onClick={() => Toast.warning({ content: 'welcome' })}>Hello Semi</Button>
        </div>
    )
}

export default App
