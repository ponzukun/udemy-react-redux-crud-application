import _ from 'lodash';
import { READ_EVENTS } from "../actions";

export default (events = {}, action) => {
  switch(action.type) {
    case READ_EVENTS:
      // [
      //   {
      //       "id": 1,
      //       "token": "token123",
      //       "title": "Let's have an event 1!",
      //       "body": "This is the body for event 1.",
      //       "created_at": "2022-07-14T07:01:08.488Z",
      //       "updated_at": "2022-07-14T07:01:08.488Z"
      //   },
      //   {
      //       "id": 2,
      //       "token": "token123",
      //       "title": "Let's have an event 2!",
      //       "body": "This is the body for event 2.",
      //       "created_at": "2022-07-14T07:01:08.523Z",
      //       "updated_at": "2022-07-14T07:01:08.523Z"
      //   }
      // ]
      // { こっちの方が望ましい
      //   1: {
      //         "id": 1,
      //         "token": "token123",
      //         "title": "Let's have an event 1!",
      //         "body": "This is the body for event 1.",
      //         "created_at": "2022-07-14T07:01:08.488Z",
      //         "updated_at": "2022-07-14T07:01:08.488Z"
      //       },
      // }
      // console.log(action.response.data);
      // console.log(_.mapKeys(action.response.data, 'id'))
      return _.mapKeys(action.response.data, 'id');
    default:
      return events;
  }
}