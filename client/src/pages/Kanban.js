/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import {
  Button, Col, Container, Row,
} from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import { Context } from '../index';

import { fetchOneProject } from '../http/projectApi';
import { fetchIssues } from '../http/issueApi';
import { fetchTags } from '../http/tagApi';
import { fetchUsersByWs } from '../http/userAPI';
import CreateIssue from '../modals/createIssue';
import IssueColumn from '../components/IssueColumn';

const Issues = observer(() => {
  const { project } = useContext(Context);
  const { id } = useParams();
  const [issueVisible, setIssueVisible] = useState(false);

  useEffect(() => {
    fetchIssues(id).then((data) => project.setIssues(data));
    fetchOneProject(id).then((data) => {
      project.setProject(data);
      fetchUsersByWs(data.ws_id).then((data1) => project.setUsers(data1));
    });
    fetchTags(id).then((data) => project.setTags(data));
  }, []);

  const onDragEnd = () => {
    console.log(1);
    return 1;
  };

  return (
    <div>
      <Container className="p-3">
        <DragDropContext onDragEnd={onDragEnd}>
          <Row>
            <IssueColumn status="To Do" />
            <IssueColumn status="In Progress" />
            <IssueColumn status="Done" />
          </Row>
        </DragDropContext>
      </Container>
      <Container className="d-flex flex-column">
        <Button variant="outline-primary" onClick={() => setIssueVisible(true)}>
          Create Issue
        </Button>
        <Button variant="outline-primary" onClick={() => console.log(project.issues)}>
          Users
        </Button>
        <CreateIssue show={issueVisible} onHide={() => setIssueVisible(false)} />
      </Container>
    </div>
  );
});

export default Issues;
