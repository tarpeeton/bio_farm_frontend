

router.get("/product/:productID", productController.getProductWithID);



router.post("/order/create/:productID", orderController.createOrder);
router.put("/order/update", orderController.updateOrder);

