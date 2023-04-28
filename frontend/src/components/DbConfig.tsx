import {Avatar, Button, ButtonGroup, List} from "@douyinfe/semi-ui";

const DbConfig = () => {
    const data = [
        <p>
            Semi Design
        </p>,
        <p>
            Semi Design
        </p>,
        <p>
            Semi Design
        </p>,
    ];

  return (
      <div style={{ padding: 12, border: '1px solid var(--semi-color-border)', margin: 12 }}>
          <List
              dataSource={data}
              renderItem={item => (
                  <List.Item
                      header={<Avatar color="blue">SE</Avatar>}
                      main={
                          <div>
                              <span style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}>示例标题</span>
                              {item}
                          </div>
                      }
                      extra={
                          <ButtonGroup theme="borderless">
                              <Button>编辑</Button>
                              <Button>更多</Button>
                          </ButtonGroup>
                      }
                  />
              )}
          />
      </div>
  )
}

export default DbConfig