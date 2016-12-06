```
import update from "oro-update"

var a  = { foo:{ bar:{ baz:1 } } }
var fn = v => v + v

update("foo|bar|baz", fn)(a) // { foo:{ bar:{ baz:2 } } }
```
