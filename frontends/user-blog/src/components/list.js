import { List as AntList, Button } from 'antd';
import styled from 'styled-components';
import { RightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function List({ items }) {
  const router = useRouter();
  return (
    <AntList
      itemLayout="horizontal"
      dataSource={items}
      renderItem={(item) => (
        <Item
          actions={[
            <Button
              key={item.id}
              onClick={() => router.push(`/post/${item.id}`)}
              type="primary"
              shape="circle"
              icon={<RightOutlined />}
            />,
          ]}
        >
          <Item.Meta title={item.title} description={item.description} />
        </Item>
      )}
    />
  );
}

const Item = styled(AntList.Item)`
  background-color: white;
  padding: 10px !important;
  margin-bottom: 20px;
`;
