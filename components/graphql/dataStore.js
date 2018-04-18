'user strict';

const AWS = require('aws-sdk'),
  docCliente = new AWS.DynamoDB.DocumentClient(),
  getTableName = function () {
    return 'sum_code-bar';
  },

  addProduct =  function (product) {
    const params  = {
      TableName: getTableName(),
      Item: {
        productid: product.productid,
        description: product.description,
        price: product.price
      }
    };
    return docCliente.put(params).promise().then(()=> product); 
  }

  getProduct = function (productid) {
    const params = {
      TableName: getTableName(),
      AttributesToGet: ['productid', 'description', 'price']
    };

    if (productid){
      params.key = {productid: productid};
      return docCliente.get(params).promise()
        .then((data) => [data.item]);
    } else {
      return docCliente.scan(params).promise()
        .then((data) => data.items);
    }
  };

  deleteProduct = function() {
    let toBeDeletedUser;
    return getUser(userid)
      .then( resultArr => {
        toBeDeletedUser= resultArr[0];
        if(!toBeDeletedUser || !toBeDeletedUser.userid){
          throw `Delete product failed: no product with productid ${productid}`;
        }
      }).then(() => {
        const params = {
          TableName: getTableName(),
          Key: {
            productid: productid
          }
        };
        return docCliente.delete(params).promise();
      }).then(() => toBeDeletedUser);
  };

module.exports = { addProduct: addProduct, getProduct: getProduct, deleteProduct: deleteProduct };