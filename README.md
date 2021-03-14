# query-parser

query-parser makes you easy to parse query string of url or even request in <b>
express of node.js</b>

## Input

input urlSearch which is a string has to be like

```javascript
urlSearch = "code=123&address=123";
```

## Usage

```javascript
const queryObject = queryParser(urlSearch);
```

## Output

querObject which is an ouptut of queryParser looks like

```javascript
{
  code : 123,
  address : 123,
}
```

#### You can also use queryParser in Web browser though It is recommended to user serarch method of location object which is embedded in window object.

If you use search method, you can use like

```javascript
const url = "http://example.com/index.php?foo=bar";
location.search.substring(1);
// 'foo=bar'
```

# Thank you!
