# React-hooks-axios

## Installation

Use npm to install react-hooks-axios.

```bash
npm install react-hooks-axios
```

## Usage

index.tsx

```typescript
import { AxiosProvider } from "react-hooks-axios";
import axios from "axios";

root.render(
  <AxiosProvider axios={axios}>
    <App />
  </AxiosProvider>
);
```

useAxiosCallback: function queryCallback() use get or delete data with callback.

```typescript
import { useAxiosCallback } from "react-hooks-axios";

const { queryCallback } = useAxiosCallback();
const [fetchPosts, { loading, data, error }] = queryCallback("/posts");

console.log(loading);
console.log(data);
console.log(error);

useEffect(() => {
  fetchPosts({
    method: "get",
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });
}, []);
```

useAxiosCallback: function mutationCallback() use post, put or patch data with callback.

```typescript
import { useAxiosCallback } from "react-hooks-axios";

const { mutationCallback } = useAxiosCallback();
const [createPost, { loading, data, error }] = mutationCallback("/posts");

console.log(loading);
console.log(data);
console.log(error);

const createPostHandler = () => {
  createPost({
    method: "post",
    body: {
      id: 2,
      title: "post1",
      author: "author1",
    },
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });
};
```

useAxiosAsync: function query use get or data with async/await.

```typescript
import { useAxiosAsync } from "react-hooks-axios";

const { queryAsyncReturnError } = useAxiosAsync();

useEffect(() => {
  const fetchPosts = async () => {
    const { data, error } = await queryAsyncReturnError("/posts", "get");
    if (error) {
      return;
    }
    console.log(data);
  };
  fetchPosts();
}, []);
```

useAxiosAsync: function mutation use post, put or patch data with async/await.

```typescript
import { useAxiosAsync } from "react-hooks-axios";

const { mutationAsyncReturnError } = useAxiosAsync();

const createPostHandler = async () => {
  const body = {
    id: 3,
    title: "post2",
    author: "author2",
  };
  const { data, error } = await mutationAsyncReturnError(
    "/posts",
    body,
    "post"
  );
  if (error) {
    return;
  }
  console.log(data);
};
```

useAxiosTransaction: useTransaction group multiple operations into a single transaction.

```typescript
import { useAxiosTransaction } from "react-hooks-axios";

const [onTransaction, { loading }] = useAxiosTransaction();

const clickHandler = async () => {
  onTransaction({
    async onRun({ mutation, query }) {
      const body = {
        id: 4,
        title: "post3",
        author: "author2",
      };
      await mutation("/posts", body, "post");
      await mutation("/posts/4", { author: "author1" }, "patch");
      const posts = await query("/posts");
      console.log(posts);
    },
    onError(error) {
      console.log(error);
    },
  });
};
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
