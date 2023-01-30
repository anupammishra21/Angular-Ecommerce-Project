import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product = [
    {
      prod_id: 'NikonD7500',
      prod_name: 'NikonD7500',
      prod_price: 75000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc:"aaaaaaaaaaaaaa",
      prod_img: '../../assets/project image webskitters/camera/nikon/m2.webp',
      prod_img2: '../../assets/project image webskitters/camera/nikon/m1.webp',
      prod_img3: '../../assets/project image webskitters/camera/nikon/m3.webp',

    },
    {
      prod_id: 'CanonEOSM50',
      prod_name: 'Canon EOS M50',
      prod_price: 80000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc:"",
      prod_img: '../../assets/project image webskitters/camera/canon/m1.webp',
      prod_img2: '../../assets/project image webskitters/camera/canon/m2.webp',
      prod_img3: '../../assets/project image webskitters/camera/canon/m3.webp',
    },
    {
      prod_id: 'sony alpha 7',
      prod_name: 'sony alpha 7 II',
      prod_price: 120000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc:'',
      prod_img: '../../assets/project image webskitters/camera/sony/m1.webp',
      prod_img2: '../../assets/project image webskitters/camera/sony/m2.webp',
      prod_img3: '../../assets/project image webskitters/camera/sony/m3.webp',
    },
   
    {
      prod_id: 'FUJIFILM Mirrorless X-T4',
      prod_name: 'FUJIFILM Mirrorless X-T4',
      prod_price: 210000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc: '',
      prod_img: '../../assets/project image webskitters/camera/fujiflim/m1.webp',
      prod_img2: '../../assets/project image webskitters/camera/fujiflim/m2.webp',
      prod_img3: '../../assets/project image webskitters/camera/fujiflim/m3.webp',
    },
    {
      prod_id: 'SONY Alpha ILCE-6100L',
      prod_name: 'SONY Alpha ILCE-6100L',
      prod_price: 66990,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc: '',
      prod_img: '../../assets/project image webskitters/camera/sony/m4.webp/',
      prod_img2: '../../assets/project image webskitters/camera/sony/m5.webp/',
      prod_img3: '../../assets/project image webskitters/camera/sony/m6.webp/',
    },
    {
      prod_id: 'Nikon D850',
      prod_name: 'Nikon D850',
      prod_price: 250000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc: '',
      prod_img: '../../assets/project image webskitters/camera/nikon/d4.webp',
      prod_img2: '../../assets/project image webskitters/camera/nikon/d5.webp',
      prod_img3: '../../assets/project image webskitters/camera/nikon/d6.webp',
    },
    {
      prod_id: 'Canon EOS M200',
      prod_name: 'Canon EOS M200',
      prod_price: 35000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/canon/m4.webp',
      prod_img2: '../../assets/project image webskitters/camera/canon/m5.webp',
      prod_img3: '../../assets/project image webskitters/camera/canon/m6.webp',
    },
    {
      prod_id: 'NIKON Z5',
      prod_name: 'NIKON Z5',
      prod_price: 110000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/nikon/m2.webp',
      prod_img2: '../../assets/project image webskitters/camera/nikon/m1.webp',
      prod_img3: '../../assets/project image webskitters/camera/nikon/m3.webp',
    },
    {
      prod_id: 'NIKON Z50',
      prod_name: 'NIKON Z50',
      prod_price: 55000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/nikon/m4.webp',
      prod_img2: '../../assets/project image webskitters/camera/nikon/m5.webp',
      prod_img3: '../../assets/project image webskitters/camera/nikon/m6.webp',
    },
    {
      prod_id: 'Canon200DII',
      prod_name: 'Canon200DII',
      prod_price: 65000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/canon/d1.webp',
      prod_img2: '../../assets/project image webskitters/camera/canon/d2.webp',
      prod_img3: '../../assets/project image webskitters/camera/canon/d3.webp',
    },
    {
      prod_id: 'Canon3000D',
      prod_name: 'Canon3000D',
      prod_price: 25000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/canon/d4.webp',
      prod_img2: '../../assets/project image webskitters/camera/canon/d5.webp',
      prod_img3: '../../assets/project image webskitters/camera/canon/d6.webp',
    },
    {
      prod_id: 'Canon EOS 1500D',
      prod_name: 'Canon EOS 1500D',
      prod_price: 35000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/canon/d7.webp',
      prod_img2: '../../assets/project image webskitters/camera/canon/d8.webp',
      prod_img3: '../../assets/project image webskitters/camera/canon/d9.webp',
    },
    {
      prod_id: 'Canon EOS M30',
      prod_name: 'Canon EOS M30',
      prod_price: 34000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/canon/m4.webp',
      prod_img2: '../../assets/project image webskitters/camera/canon/m5.webp',
      prod_img3: '../../assets/project image webskitters/camera/canon/m6.webp',
    },
    {
      prod_id: 'Canon EOS R10',
      prod_name: 'Canon EOS R10',
      prod_price: 115000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/canon/m7.webp',
      prod_img2: '../../assets/project image webskitters/camera/canon/m8.webp',
      prod_img3: '../../assets/project image webskitters/camera/canon/m9.webp',
    },
    {
      prod_id: 'NIKON Z30',
      prod_name: 'NIKON Z30',
      prod_price: 58200,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/nikon/m7.webp',
      prod_img2: '../../assets/project image webskitters/camera/nikon/m8.webp',
      prod_img3: '../../assets/project image webskitters/camera/nikon/m9.webp',
    },
    {
      prod_id: 'NIKON Z6 II',
      prod_name: 'NIKON Z6 II',
      prod_price: 210000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/nikon/m10.webp',
      prod_img2: '../../assets/project image webskitters/camera/nikon/m11.webp',
      prod_img3: '../../assets/project image webskitters/camera/nikon/m12.webp',
    },
    {
      prod_id: 'NIKON Z6 II',
      prod_name: 'NIKON Z7 II',
      prod_price: 260000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/nikon/m13.webp',
      prod_img2: '../../assets/project image webskitters/camera/nikon/m14.webp',
      prod_img3: '../../assets/project image webskitters/camera/nikon/m16.webp',
    },
    {
      prod_id: 'NIKON D7500',
      prod_name: 'NIKON D7500',
      prod_price: 75000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/nikon/d1.webp',
      prod_img2: '../../assets/project image webskitters/camera/nikon/d2.webp',
      prod_img3: '../../assets/project image webskitters/camera/nikon/d3.webp',
    },
    {
      prod_id: 'SONY ALPHA III',
      prod_name: 'SONY ALPHA III',
      prod_price: 190000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/sony/m7.webp',
      prod_img2: '../../assets/project image webskitters/camera/sony/m8.webp',
      prod_img3: '../../assets/project image webskitters/camera/sony/m9.webp',
    },
    {
      prod_id: 'SONY ALPHA 7',
      prod_name: 'SONY ALPHA 7',
      prod_price: 90000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/sony/m10.webp',
      prod_img2: '../../assets/project image webskitters/camera/sony/m11.webp',
      prod_img3: '../../assets/project image webskitters/camera/sony/m13.webp',
    },
    {
      prod_id: 'SONY Alpha ILCE-6400M ',
      prod_name: 'SONY Alpha ILCE-6400M ',
      prod_price: 105990,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/sony/m14.webp',
      prod_img2: '../../assets/project image webskitters/camera/sony/m15.webp',
      prod_img3: '../../assets/project image webskitters/camera/sony/m16.webp',
    },
    {
      prod_id: 'SONY Alpha 7C',
      prod_name: 'SONY Alpha 7C',
      prod_price: 255000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/sony/m17.webp',
      prod_img2: '../../assets/project image webskitters/camera/sony/m18.webp',
      prod_img3: '../../assets/project image webskitters/camera/sony/m19.webp',
    },
    {
      prod_id: 'FUJIFILM XS10',
      prod_name: 'FUJIFILM XS10',
      prod_price: 155000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/fujiflim/m4.webp',
      prod_img2: '../../assets/project image webskitters/camera/fujiflim/m5.webp',
      prod_img3: '../../assets/project image webskitters/camera/fujiflim/m6.webp',
    },
    {
      prod_id: 'Canon EOS 90D',
      prod_name: 'Canon EOS 90D',
      prod_price: 88000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/canon/10.webp',
      prod_img2: '../../assets/project image webskitters/camera/canon/11.webp',
      prod_img3: '../../assets/project image webskitters/camera/canon/12.webp',
    },
    {
      prod_id: 'GoPro Hero11',
      prod_name: 'GoPro Hero11',
      prod_price: 45199,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/gopro/d1.webp',
      prod_img2: '../../assets/project image webskitters/camera/gopro/d2.webp',
      prod_img3: '../../assets/project image webskitters/camera/gopro/d3.webp',
    },
    {
      prod_id: 'GoPro Hero9',
      prod_name: 'GoPro Hero9',
      prod_price: 33200,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/gopro/g4.webp',
      prod_img2: '../../assets/project image webskitters/camera/gopro/g5.webp',
      prod_img3: '../../assets/project image webskitters/camera/gopro/g6.webp',
    },
    {
      prod_id: 'GoPro Hero8',
      prod_name: 'GoPro Hero8',
      prod_price: 30999,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/gopro/g7.webp',
      prod_img2: '../../assets/project image webskitters/camera/gopro/g8.webp',
      prod_img3: '../../assets/project image webskitters/camera/gopro/g9.webp',
    },
    {
      prod_id: 'dji Mavic 2',
      prod_name: 'dji Mavic 2',
      prod_price: 220000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/dji/m1.jpg',
      prod_img2: '../../assets/project image webskitters/camera/dji/m2.jpg',
      prod_img3: '../../assets/project image webskitters/camera/dji/m3.jpg',
    },
    {
      prod_id: 'dji Mavic pro',
      prod_name: 'dji Mavic pro',
      prod_price: 265000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/dji/m4.png',
      prod_img2: '../../assets/project image webskitters/camera/dji/m5.jpg',
      prod_img3: '../../assets/project image webskitters/camera/dji/m6.jpg',
    },
    {
      prod_id: 'dji Phantom 4',
      prod_name: 'dji Phantom 4',
      prod_price: 180000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/camera/dji/m8.jpg',
      prod_img2: '../../assets/project image webskitters/camera/dji/m7.jpg',
      prod_img3: '../../assets/project image webskitters/camera/dji/m8.jpg',
    },
  
  ];
  product1 = [
     {
        brand_id: 'gimbal',
        brand_name: 'gimbal',
        brand_img: '../../assets/project image webskitters/accessories/gimbal/04.jpg',
        prod:[
          {
            prod_id: 'DJI RSC  Gimbal',
            prod_name: 'DJI RSC  Gimbal',
            prod_price: 23890,
            prod_rating:"⭐⭐⭐⭐⭐",
            prod_img: '../../assets/project image webskitters/accessories/gimbal/01.jpg',
          
            prod_desc: 'xxxxxxxxxx',
          },
          {
            prod_id: 'E-Image Horizon Pro 3-Axis Handheld Gimbal',
            prod_name: 'E-Image Horizon Pro 3-Axis Handheld Gimbal',
            prod_price: 28299,
            prod_rating:"⭐⭐⭐⭐⭐",
            prod_img: '../../assets/project image webskitters/accessories/gimbal/02.jpg',
            prod_desc: 'ancvfd',
          },
          {
            prod_id: 'Zhiyun 3 Axis Camera stabilizer',
            prod_name: 'Zhiyun 3 Axis Camera stabilizer',
            prod_img: '../../assets/project image webskitters/accessories/gimbal/03.jpg',
            prod_desc: 'bvgcdf',
            prod_rating:"⭐⭐⭐⭐⭐",
            prod_price: 22999,
          },
        ]
    },
    {
      brand_id: 'flashlight',
      brand_name: 'flashlight',
      brand_rating:"⭐⭐⭐⭐⭐",
      brand_img: '../../assets/project image webskitters/accessories/flashlight/03.jpg',
      prod:[
        {
          prod_id: 'GODOX TT 685II',
          prod_name: 'GODOX TT 685II',
          prod_price: 10999,
          prod_rating:"⭐⭐⭐⭐⭐",
          prod_img: '../../assets/project image webskitters/accessories/flashlight/01.jpg',
          prod_desc: 'lorem ipsum',
        },
        {
          prod_id: 'Godox TT520',
          prod_name: 'Godox TT520',
          prod_price: 4500,
          prod_rating:"⭐⭐⭐⭐⭐",
          prod_img: '../../assets/project image webskitters/accessories/flashlight/02.jpg',
          prod_desc: 'lorem ipsum',
        },
        {
          prod_id: 'GODOX TT 860III',
          prod_name: 'GODOX TT 860III',
          prod_price: 13999,
          prod_rating:"⭐⭐⭐⭐⭐",
          prod_img: '../../assets/project image webskitters/accessories/flashlight/03.jpg',
          prod_desc: 'lorem ipsum',
        },
        {
          prod_id: 'Godox V1-S Round Head Camera Flash',
          prod_name: 'Godox V1-S Round Head Camera Flash',
          prod_price: 18390,
          prod_rating:"⭐⭐⭐⭐⭐",
          prod_img: '../../assets/project image webskitters/accessories/flashlight/04.jpg',
          prod_desc: 'lorem ipsum',
        },
        {
          prod_id: 'NEEWER S621 Camera Speed Flash',
          prod_name: 'NEEWER S621 Camera Speed Flash',
          prod_price: 3999,
          prod_rating:"⭐⭐⭐⭐⭐",
          prod_img: '../../assets/project image webskitters/accessories/flashlight/07.jpg',
          prod_desc: 'lorem ipsum',
        },
        {
          prod_id: 'DIGITEK® (DFL-088) Universal Electronic Flash',
          prod_name: 'DIGITEK® (DFL-088) Universal Electronic Flash',
          prod_price: 2499,
          prod_rating:"⭐⭐⭐⭐⭐",
          prod_img: '../../assets/project image webskitters/accessories/flashlight/06.jpg',
          prod_desc: 'lorem ipsum',
        },

      ]
  },
  {
    brand_id: 'mic',
    brand_name: 'mic',
    brand_img: '../../assets/project image webskitters/accessories/mic/02.jpg',
    prod:[
      {
        prod_id: 'Boya ByM1 Auxiliary Omnidirectional Lavalier',
        prod_name: 'Boya ByM1 Auxiliary Omnidirectional Lavalier',
        prod_price: 659,
        prod_rating:"⭐⭐⭐⭐⭐",
        prod_img: '../../assets/project image webskitters/accessories/mic/01.mic.jpg',
        prod_desc: 'xxxxxxxxxx',
      },
      {
        prod_id: 'Boya by-MM1 Super-Cardioid Shotgun Auxiliary Microphone',
        prod_name: 'Boya by-MM1 Super-Cardioid Shotgun Auxiliary Microphone',
        prod_price: 1999,
        prod_rating:"⭐⭐⭐⭐⭐",
        prod_img: '../../assets/project image webskitters/accessories/mic/02.jpg',
        prod_desc: 'ancvfd',
      },
      {
        prod_id: 'Rode VMGO Video Mic GO Lightweight On-Camera Microphone',
        prod_name: 'Rode VMGO Video Mic GO Lightweight On-Camera Microphone',
        prod_price: 6999,
        prod_rating:"⭐⭐⭐⭐⭐",
        prod_img: '../../assets/project image webskitters/accessories/mic/03.jpg',
        prod_desc: 'bvgcdf',
      },
      {
        prod_id: 'Rode VideoMic Directional Video Condenser Microphone',
        prod_name: 'Rode VideoMic Directional Video Condenser Microphone',
        prod_img: '../../assets/project image webskitters/accessories/mic/04.jpg',
        prod_desc: 'bvgcdf',
        prod_price: 22499,
        prod_rating:"⭐⭐⭐⭐⭐",
      }, {
        prod_id: 'Sennheiser MKE 200, Directional on-Camera Microphone',
        prod_name: 'Sennheiser MKE 200, Directional on-Camera Microphone',
        prod_img: '../../assets/project image webskitters/accessories/mic/05.jpg',
        prod_desc: 'bvgcdf',
        prod_price: 4990,
        prod_rating:"⭐⭐⭐⭐⭐",
      }, {
        prod_id: 'Sennheiser MKE 400-New Directional Compact Shotgun Auxiliary Unidirectional Microphone ',
        prod_name: 'Sennheiser MKE 400-New Directional Compact Shotgun Auxiliary Unidirectional Microphone ',
        prod_img: '../../assets/project image webskitters/accessories/mic/06.jpg',
        prod_desc: 'bvgcdf',
        prod_price: 15000,
        prod_rating:"⭐⭐⭐⭐⭐",
      }
    ]
},
{
  brand_id: 'tripod',
  brand_name: 'tripod',
  brand_img: '../../assets/project image webskitters/accessories/tripod/01.jpg',
  prod:[
    {
      prod_id: 'Digitek DTR 520 BH (60 Inch)(152cm) Professional Aluminum Tripod',
      prod_name: 'Digitek DTR 520 BH (60 Inch)(152cm) Professional Aluminum Tripod',
      prod_img: '../../assets/project image webskitters/accessories/tripod/01.jpg',
      prod_desc: 'xxxxxxxxxx',
      prod_price: 5700,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'Digitek DTR 550 LW (67 Inch) Tripod For DSLR, Camera',
      prod_name: 'Digitek DTR 550 LW (67 Inch) Tripod For DSLR, Camera',
      prod_img: '../../assets/project image webskitters/accessories/tripod/02.jpg',
      prod_desc: 'ancvfd',
      prod_price: 1499,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'DIGITEK Platinum (DPTR 890 VD) (178 cm) Aluminum Light Weight Tripod',
      prod_name: 'DIGITEK Platinum (DPTR 890 VD) (178 cm) Aluminum Light Weight Tripod',
      prod_img: '../../assets/project image webskitters/accessories/tripod/03.jpg',
      prod_desc: 'bvgcdf',
      prod_price: 2798,
      prod_rating:"⭐⭐⭐⭐⭐",
    }
  ]
},
{
  brand_id: 'memorycard',
  brand_name: 'memorycard',
  brand_img: '../../assets/project image webskitters/accessories/memorycard/03.jpg',
  prod:[
    {
      prod_id: 'SanDisk Ultra SDHC UHS-I Card',
      prod_name: 'SanDisk Ultra SDHC UHS-I Card',
      prod_img: '../../assets/project image webskitters/accessories/memorycard/01.jpg',
      prod_desc: 'xxxxxxxxxx',
      prod_price: 449,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'SanDisk Extreme SD UHS I 64GB Card ',
      prod_name: 'SanDisk Extreme SD UHS I 64GB Card ',
      prod_img: '../../assets/project image webskitters/accessories/memorycard/02.jpg',
      prod_desc: 'ancvfd',
      prod_price: 849,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'SanDisk Extreme SD UHS I 128GB Card',
      prod_name: 'SanDisk Extreme SD UHS I 128GB Card',
      prod_img: '../../assets/project image webskitters/accessories/memorycard/03.jpg',
      prod_desc: 'bvgcdf',
      prod_price: 1499,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'SanDisk Ultra SDXC UHS-I Card 128GB ',
      prod_name: 'SanDisk Ultra SDXC UHS-I Card 128GB ',
      prod_img: '../../assets/project image webskitters/accessories/memorycard/04.jpg',
      prod_desc: 'bvgcdf',
      prod_price: 1349,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'SanDisk Extreme Pro SD UHS I 128GB Card',
      prod_name: 'SanDisk Extreme Pro SD UHS I 128GB Card',
      prod_img: '../../assets/project image webskitters/accessories/memorycard/05.jpg',
      prod_desc: 'bvgcdf',
      prod_price: 1999,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'Samsung PRO Plus 128GB, SDXC, UHS-I, U3,',
      prod_name: 'Samsung PRO Plus 128GB, SDXC, UHS-I, U3,',
      prod_img: '../../assets/project image webskitters/accessories/memorycard/06.jpg',
      prod_desc: 'bvgcdf',
      prod_price: 1999,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
  ]
},
{
  brand_id: 'bags',
  brand_name: 'bags',
  brand_img: '../../assets/project image webskitters/accessories/bags/04.jpg',
  prod:[
    {
      prod_id: 'URBANFIX Waterproof Camera Bag Backpack Lens Carry Case',
      prod_name: 'URBANFIX Waterproof Camera Bag Backpack Lens Carry Case',
      prod_img: '../../assets/project image webskitters/accessories/bags/01.jpg',
      prod_desc: 'xxxxxxxxxx',
      prod_price: 999,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'Xsquare Waterproof DSLR Backpack Camera Bag, Lens Accessories Carry Case',
      prod_name: 'Xsquare Waterproof DSLR Backpack Camera Bag, Lens Accessories Carry Case',
      prod_img: '../../assets/project image webskitters/accessories/bags/02.jpg',
      prod_desc: 'ancvfd',
      prod_price: 699,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'SIDRUM Camera Backpack Bag Laptop Case for DSLR/SLR Camera',
      prod_name: 'SIDRUM Camera Backpack Bag Laptop Case for DSLR/SLR Camera',
      prod_img: '../../assets/project image webskitters/accessories/bags/03.jpg',
      prod_desc: 'bvgcdf',
      prod_price: 1999,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'BLUEWAY Waterproof Camera Black Bag',
      prod_name: 'BLUEWAY Waterproof Camera Black Bag',
      prod_img: '../../assets/project image webskitters/accessories/bags/04.jpg',
      prod_desc: 'bvgcdf',
      prod_price: 1159,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'Osaka Pro Series-11 Waterproof DSLR Backpack Camera Bag,',
      prod_name: 'Osaka Pro Series-11 Waterproof DSLR Backpack Camera Bag,',
      prod_img: '../../assets/project image webskitters/accessories/bags/05.jpg',
      prod_desc: 'bvgcdf',
      prod_price: 2999,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id: 'FUR JADEN Anti Theft Camera Bag for DSLR SLR Lens Accessories Waterproof Bag ',
      prod_name: 'FUR JADEN Anti Theft Camera Bag for DSLR SLR Lens Accessories Waterproof Bag ',
      prod_img: '../../assets/project image webskitters/accessories/bags/06.jpg',
      prod_desc: 'bvgcdf',
      prod_price: 3990,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
  ]
}
  ];
  product2=[
    {
      prod_id:'SONY SEL200600G Lens',
      prod_name:'SONY SEL200600G Lens  (White, 200 - 600 mm)',
      prod_desc:'Sony',
      prod_img:'../../assets/project image webskitters/lenses/s1.webp',
      prod_price:110000,
      prod_rating:"⭐⭐⭐⭐⭐",
    },
    {
      prod_id:'SONY SELP18105G Lens',
      prod_name:'SONY SELP18105G Lens  (Black, 50 mm)',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/sa1.webp',
      prod_price:96000
    },
    {
      prod_id:'SONY SEL1224GM Lens',
      prod_name:'SONY SEL1224GM Lens  (Black, 12 mm)',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/s3.webp',
      prod_price:118000
    },
    {
      prod_id:'Canon RF 24 - 105',
      prod_name:'Canon RF 24 - 105 mm F4 L IS USM Lens  (Black, 24 - 105 mm)',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/c4.webp',
      prod_price:86000
    },
    {
      prod_id:'Nikon af p Dx 70-300mm',
      prod_name:'Nikon af p Dx 70-300mm',
      prod_img:'../../assets/project image webskitters/lenses/n1.webp',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_price:16000
    },
    {
      prod_id:'NIKON AF-S DX ',
      prod_name:'NIKON AF-S DX NIKKOR 18-140mm',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/n2.webp',
      prod_price:35000
    },
    {
      prod_id:'NIKON AF-S DX Nikkor 18 - 105 mm ',
      prod_name:'NIKON AF-S DX Nikkor 18 - 105 mm ',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/n3.jpg',
      prod_price:42000
    },
    {
      prod_id:'NIKON Nikkor',
      prod_name:'NIKON Nikkor Z 85mm f/1.8',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/n4.webp',
      prod_price:97000
    },
    {
      prod_id:'NIKON Z 70-200MM',
      prod_name:'NIKON Z 70-200MM',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/n5.webp',
      prod_price:110000
    },
    {
      prod_id:'NIKON Nikkor Z 24-70mm ',
      prod_name:'NIKON Nikkor Z 24-70mm ',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/n6.webp',
      prod_price:101000
    },
    {
      prod_id:'NIKON NIKKOR Z 18-24MM',
      prod_name:'NIKON NIKKOR Z 18-24MM',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/n1.webp',
      prod_price:14000
    },
    {
      prod_id:'NIKON NIKKOR Z1 50MM',
      prod_name:'NIKON NIKKOR Z1 50MM',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/n2.webp',
      prod_price:84000
    },
    {
      prod_id:'NIKON Z 24-200MM F/4-6.3 VR Lens',
      prod_name:'NIKON Z 24-200MM F/4-6.3 VR Lens',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/n5.webp',
      prod_price:10000
    },
    {
      prod_id:'SONY SEL124GM Lens',
      prod_name:'SONY SEL124GM Lens',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/s4.webp',
      prod_price:210000
    },
    {
      prod_id:'Canon EF 85 mm f/1.8 USM Lens',
      prod_name:'Canon EF 85 mm f/1.8 USM Lens',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/s5.webp',
      prod_price:97000
    },
    {
      prod_id:'Canon EFS 10-18mm f/4.5-5.6 IS STM Lens',
      prod_name:'Canon EF-S 10-18mm f/4.5-5.6 IS STM Lens',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/sa1.webp',
      prod_price:82000
    },
    {
      prod_id:'Canon EF 50mm L I II USM',
      prod_name:'Canon EF 50mm L IS II USM',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/s2.webp',
      prod_price:59000
    },
    {
      prod_id:'SONY SELP1810G Lens',
      prod_name:'SONY SELP18105G Lens',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img:'../../assets/project image webskitters/lenses/s3.webp',
      prod_price:180666
    },
  ]
  newProducts=[
    {
      prod_name: 'SONY Alpha 9II',
      prod_id: 'SONY Alpha 9II',
      prod_img: '../../assets/project image webskitters/featured/02.webp',
      prod_price:270000
    }, 
    {
      prod_name: 'NIKON Z5',
      prod_id: 'NIKON Z5',
      prod_img: '../../assets/project image webskitters/featured/02.jpg',
      prod_price:110000
    },
    {
      prod_name: 'DJI Mavic mini',
      prod_id: 'DJI Mavic mini',
      prod_img: '../../assets/project image webskitters/featured/03.jpg',
      prod_price:170000
    }, {
      prod_name: 'Canon EOS R6',
      prod_id: 'Canon EOS R6',
      prod_img: '../../assets/project image webskitters/featured/05.jpg',
      prod_price:105000
    }, 
    // {
    //   prod_name: 'a5',
    //   prod_id: 'd1',
    //   prod_img: '../../assets/project image webskitters/banimg/p1.jpg',
    // },
    //  {
    //   prod_name: 'a6',
    //   prod_id: 'd1',
    //   prod_img: '../../assets/project image webskitters/banimg/p1.jpg',
    // },
    // {
    //   prod_name: 'a6',
    //   prod_id: 'd1',
    //   prod_img: '../../assets/project image webskitters/camera/nikon/m2.webp',
    // },
    // {
    //   prod_name: 'a6',
    //   prod_id: 'd1',
    //   prod_img: '../../assets/project image webskitters/camera/nikon/m2.webp',
    // },
  ]

  saleProducts=[
    {
      prod_name: 'NIKON Z 6 ',
      prod_id: 'NIKON Z 6 ',
      prod_price:177000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc:"A perfect moment or an unimaginable disaster happens in a fraction of a second, and if you want to capture the charm of life-defining moments then buy this Nikon Z 6 Mirrorless Camera. This high-end 24.5 Megapixels camera features a 5-axis Image Sensor Shift, EXPEED 6 Processor, and an 8 cm (3.2-in), Tilting Touch-Sensitive TFT Display to click crystal clear photos and stunning videos.",
      prod_img: '../../assets/project image webskitters/banimg/p2.jpg',
    }, 
    {
      prod_name: 'DJI Mavic Pro',
      prod_id: 'Mavic Pro',
      prod_price:177000,
      prod_rating:"⭐⭐⭐⭐⭐",

      prod_img: '../../assets/project image webskitters/banimg/p1.jpg',
      prod_desc:"DJI Mavic 3 is a powerful flagship camera drone equipped with a 4/3 CMOS Hasselblad camera to facilitate professional-level imaging.",
      
    },
    {
      prod_name: 'GO PRO HERO 11',
      prod_id: 'GO PRO HERO 11',
      prod_img: '../../assets/project image webskitters/banimg/p3.web.webp',
      prod_price:177000,
      prod_rating:"⭐⭐⭐⭐",
      prod_desc:"SuperPhoto, HDR, Changing the FOV (Field of View) to Linear or Narrow, Digital Zoom, Time-lapse Photo and Night Lapse Photo when the Interval is Less than 5 Seconds",
    }, {
      prod_name: 'DJI RSC',
      prod_id: 'DJI RSC',
      prod_img: '../../assets/project image webskitters/banimg/p4.jpg',
      prod_price:177000,
      prod_rating:"⭐⭐⭐⭐",
      prod_desc:"DJI RSC  Lightweight and Compact, Superior Stabilization, 3-Axis Gimbal Stabilizer for Mirrorless Cameras, Nikon, Sony, Panasonic, Canon, 360 Degree Movement, 2kg Tested Payload, Axis Locks, Black",
    }, 
    {
      prod_name: 'Canon RF 24',
      prod_id: 'Canon RF 24',
      prod_img: '../../assets/project image webskitters/lenses/sa1.webp',
      prod_price:177000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc:"A perfect moment or an unimaginable disaster happens in a fraction of a second, and if you want to capture the charm of life-defining moments then buy this Nikon . This high-end 24.5 Megapixels camera features a 5-axis Image Sensor Shift, EXPEED 6 Processor, and an 8 cm (3.2-in), Tilting Touch-Sensitive TFT Display to click crystal clear photos and stunning videos.",
    },
     {
      prod_name: 'GODOX TTL 685',
      prod_id: 'GODOX TTL 685',
      prod_img: '../../assets/project image webskitters/accessories/flashlight/03.jpg',
      prod_price:177000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc:"TTL Li-ion Round Head Camera flash V1 adopts round flash head to offer studio-level soft and even light effects. With powerful functions and plentiful accessories, it is suitable for portrait photography, wedding photography, event photography, travel photography, still life photography, etc.",
    },
    {
      prod_name: 'Rode VMGOII',
      prod_id: 'Rode VMGOII',
      prod_img: '../../assets/project image webskitters/accessories/mic/03.jpg',
      prod_price:177000,
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_desc:"The RØDE VideoMic is a professional grade 1/2 inch condenser shotgun microphone designed for use with consumer video cameras and personal audio recorders The integrated Rycote Lyre based shock mounting system isolates the VideoMic capsule and electronics from its all-metal shoe mount, providing isolation from external physical factors that may cause unwanted rumble and vibrations in the microphone. Constructed from a single piece of hard-wearing thermoplastic, the Lyre provides superior acoustic suspension to traditional elastic solutions, and will never wear out, sag or sna.",
    },
    {
      prod_name: 'DIGITEK(DCB 001)bag',
      prod_id: 'DIGITEK® (DCB 001)',
      prod_rating:"⭐⭐⭐⭐⭐",
      prod_img: '../../assets/project image webskitters/accessories/bags/03.jpg',
      prod_price:177000,
      prod_desc:"DIGITEK Waterproof Camera Bag Backpack Lens Carry Case Gadget Accessories With Tripod Holder For SLR/DSLR Mirrorless Cameras Professional Photographer (Black and Red, Made in India)",
    },
  ]

  

  constructor() {}
}
