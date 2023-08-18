# Boolean Plus
easy-to-use bulk boolean operations

# Install

```sh
npm install boolean-plus
```

# Simplified Usage
You can just import the module "boolean-plus" ad using function AND, NAND, OR, NOR, XOR, XNOR or NOT 

```javascript
import { AND, NAND, NOR, OR, XOR, XNOR, NOT } from './index'

AND(true, true, true, ...) => return true
AND(true, false, true, ...) => return false

NAND(true, true, true, ...) => return false
NAND(true, false, true, ...) => return true

OR(true, false, true, ...) => return true
OR(false, false, false, ...) => return false

NOR(true, false, true, ...) => return false
NOR(false, false, false, ...) => return true

XOR(true, false, false, ...) => return true
XOR(true, false, true, ...) => return false
XOR(false, false, false, ...) => return false

XNOR(true, false, false, ...) => return false
XNOR(true, false, true, ...) => return true
XNOR(false, false, false, ...) => return true

NOT(true, false, true, true, ...) => return [false, true, false, false, ...]
NOT(false, false, false, ...) => return [true, true, true, ...]

```