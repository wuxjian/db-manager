import {Button, ButtonGroup, Form} from '@douyinfe/semi-ui'
import { IconCamera } from '@douyinfe/semi-icons';

const {TextArea} = Form


const Editor = () => {
    return (
        <>
            <div style={{marginTop: '14px'}}>
                <ButtonGroup>
                    <Button size={'large'} icon={<IconCamera />} aria-label="截屏" />
                </ButtonGroup>
            </div>
            <Form>
                <TextArea
                    style={{height: '500px'}} field={'t'}
                    label='申请理由（TextArea）'
                    placeholder='请填写申请资源理由'
                />
            </Form>
        </>
    )
}

export default Editor