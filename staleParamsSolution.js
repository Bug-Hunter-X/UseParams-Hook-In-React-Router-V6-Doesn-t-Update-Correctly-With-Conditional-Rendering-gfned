The solution uses the `useLocation` hook and manually extracts the parameters from the URL pathname. This provides a more robust solution to the problem of stale parameters.  The solution also adds a small delay to show the bug more prominently.

```javascript
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MyComponent() {
  const location = useLocation();
  const [id, setId] = useState(null);

  useEffect(() => {
    const match = location.pathname.match(/\/my-route\/(\d+)/);
    if (match) {
      setId(parseInt(match[1], 10));
    }
  }, [location]);

  if (id === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>My Component</h1>
      <p>ID: {id}</p>
    </div>
  );
}
export default MyComponent;
```