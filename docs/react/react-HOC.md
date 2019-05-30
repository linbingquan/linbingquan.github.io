# react HOC(高阶组件)

react 公共组件

```js
// HOC declaration
function withLoadingIndicator(Component) {
  return function EnhancedComponent({ isLoading, ...props }) {
    if (!isLoading) {
      return <Component {...props} />;
    }
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  };
}

// Usage
const ListWithLoadingIndicator = withLoadingIndicator(List);
<ListWithLoadingIndicator isLoading={props.isLoading} list={props.list} />;
```
