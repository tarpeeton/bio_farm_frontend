

router.get("/product/:productID", productController.getProductWithID);
http://localhost:9090/product/getAll


router.post("/order/create/:productID", orderController.createOrder);
router.put("/order/update", orderController.updateOrder);

