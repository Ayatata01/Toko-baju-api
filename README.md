# Toko-baju-api
Proyek ini adalah sebuah API untuk toko online yang dapat digunakan untuk menampilkan daftar produk, menambahkan produk ke keranjang belanja, dan memproses pesanan, api ini juga dapat digunakan untuk jenis toko yang lain

### Fitur
1. Autentikasi pengguna menggunakan JSON Web Token (JWT).
2. Menambahkan produk 
3. Menambah produk ke keranjang belanja
4. Membeli produk

### Teknologi yang digunakan
1. node js/express
2. mongodb/mongoose
3. json web token (jwt)
4. multer

### Cara Penggunaan
1. clone github
2. buat database mongodb
3. masuk ke index.js pada bagian 
mongoose
  .connect(
    `(mongodb link)`
  )
rubah mongodb link menjadi link untuk koneksi ke database mongodb
4. jalankan perintah npm install
5. jalankan perintah npm start

### Dokumentasi Penggunaan

#### AUTHENTICATION
Authentication terbagi 2 admin dan user, admin sebagai pengelola toko dan user sebagai pembeli

##### 1. ADMIN LOGIN
````http GET http://localhost:5000/admin/login````
##### body :{
#####  email: 'seco@gmail.com',
#####  password: 123
}
##### response : Json Web Token (jwt)

##### 2. ADMIN REGISTER
##### POST http://localhost:5000/admin/register
##### body: {
#####    "username" : "secoseco",
#####    "email" : "seco@gmail.com",
#####    "nama_toko" : "seco store",
#####    "password" : "seco1234567"
##### }

##### 3. USERLOGIN
##### GET http://localhost:5000/authentication/login
##### body :{
#####  email: 'seco@gmail.com',
#####  password: 123
##### }
##### response : Json Web Token (jwt)


##### 4. USER REGISTER
##### POST http://localhost:5000/authentication/login
##### body: {
#####    "username" : "secoseco",
#####    "email" : "seco@gmail.com",
#####    "nama_toko" : "seco store",
#####    "password" : "seco1234567"
##### }

##### 5. PRODUCT ADMIN
##### Menambah product baru, gunakan token admin pada authorization
##### POST http://localhost:5000/product
##### AUTHORIZATION bearer token
##### body:{
#####  nama_produk : '',
#####  image: 'image file',
#####  jumlah : number,
#####  harga_satuan: number,
#####  deskripsi: ''
##### }

##### 6. PRODUCT ADMIN
##### Mendapatkan semua data product milik admin gunakan token admin pada authorization
##### GET http://localhost:5000/product
##### AUTHORIZATION bearer token

##### 7. PRODUCT ADMIN
##### Mengedit data product admin, gunakan token admin pada authorization
##### PUT http://localhost:5000/product/ID_PRODUCT
##### AUTHORIZATION bearer token
##### body:{
#####  nama_produk : '',
#####  image: 'image file',
#####  jumlah : number,
#####  harga_satuan: number,
#####  deskripsi: ''
##### }

##### 8. PRODUCT ADMIN
##### Mengapus data bersarkan id product
##### DELETE http://localhost:5000/product/ID_PRODUCT
##### AUTHORIZATION bearer token

##### 9. PRODUCT ALL
##### Mendapatkan semua data product toko
##### GET http://localhost:5000/product/all
##### AUTHORIZATION bearer token

##### 10 PRODUCT BY QUERY PARAMETER
##### Mendapatkan semua data product toko dengan query parameter
##### GET http://localhost:5000/product/all?page=NOMOR_PAGE&perPage=JUMLAH DATA SETIAP PAGE
##### AUTHORIZATION bearer token

##### 11. CART
##### Mendapatkan data cart, gunakan token user pada bagian authorization
##### GET http://localhost:5000/cart
##### AUTHORIZATION bearer token

##### 12. CART
##### Menambah data cart baru
##### POST http://localhost:5000/cart
##### AUTHORIZATION bearer token
##### body:{
#####    "id_product" : "641d0f5f3a7e6899192fdec1",
#####    "is_paid" : false,
#####    "jumlah" : 3
##### }

##### 13. CART
##### Mengedit cart jika is_paid:true, pesanan telah dibayar, gunakan token user pada bagian authorization
##### PUT http://localhost:5000/cart/ID_CART
##### AUTHORIZATION bearer token
##### body :{
#####    "is_paid" : true,
#####    "jumlah" : 4
##### }

##### 14. CART
##### menghapus cart berdasrakan id cart
##### DELETE http://localhost:5000/cart/ID_CART
##### AUTHORIZATION bearer token

##### 15. ORDER HISTORY
##### Mendapatkan semua data pembelian yang telah dilakukan user, gunakan token user pada bagian authorization
##### GET http://localhost:5000/order
##### AUTHORIZATION bearer token

# AUTHOR : Yoga Rizya Pratama (yogarizya.pratama@gmail.com)
