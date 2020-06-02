### ex7
代码分别通过mysqlli和pdo建立和数据库的连接.
sql语句用来找出Genres表中所有的数据并根据GenreName排序
执行后在网页中展示查询结果


### ex8
outputArtists
展示artists(只显示前30条)
outputPaintings
展示每个artist的painting, 根据id查询结果
outputSinglePainting
展示单个painting的全部信息


### ex9
利用prepare statements执行sql语句更加灵活, 修改时直接修改相应绑定的参数即可
同时更加安全, 可以防止sql注入

php执行sql语句
* mysqli
* pdo
