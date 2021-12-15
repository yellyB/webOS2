import React from "react";
import { Comment, Avatar, Form, Button, List, Input, Rate } from "antd";
import moment from "moment";
import CommontRate from "./CommontRate";

const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

function WriteComment() {
  const [state, setState] = React.useState<any>({
    comments: [],
    submitting: false,
    value: "",
  });

  const handleSubmit = () => {
    if (!state.value) {
      return;
    }

    setState({ submitting: true, ...state });

    setTimeout(() => {
      setState({
        submitting: false,
        value: "",
        comments: [
          state.comments,
          {
            author: "Han Solo",
            avatar: "https://joeschmoe.io/api/v1/random",
            content: <p>{state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  const handleChange = (e: any) => {
    setState({
      value: e.target.value,
    });
  };

  return (
    <React.Fragment>
      <CommontRate />
      <Comment
        avatar={
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        }
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={state.submitting}
            value={state.value}
          />
        }
      />
    </React.Fragment>
  );
}

export default WriteComment;