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

## License

[MIT](https://choosealicense.com/licenses/mit/)
