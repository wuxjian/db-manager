import {Form} from '@douyinfe/semi-ui'

const {TextArea} = Form


const Editor = () => {
    return (
        <Form>
            <TextArea
                style={{height: '100%'}} field={'t'}
                label='申请理由（TextArea）'
                placeholder='请填写申请资源理由'
            />
        </Form>
    )
}

export default Editor