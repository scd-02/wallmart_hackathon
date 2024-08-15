const mongoose = require('mongoose');
require('dotenv').config()

const ProductSchema = new mongoose.Schema(
    {
      brand: {
        type: String,
        required: true,
      },
      productURL: {
        type: String,
        required: true,
        unique: true,
      },
      productName: {
        type: String,
        required: true,
      },
      productDescription: {
        type: String,
        required: true,
      },
      productSpecification: {
        type: [String],
        required: true,
      },
      productImageURL: {
        type: [String],
        required: true,
      },
      generatedURL: {
        type: [String],
        required: false
      }
    },
    {
      timestamps: true, 
    }
  );
  
  const Product = mongoose.model("Product", ProductSchema);

const products = [
    {
        brand: "No Boundaries",
        productName: "No Boundaries Men's and Big Men's Multi Pocket Cargo Pants, Sizes XS-3XL",
        productURL: "No-Boundaries-Juniors-Synthetic-Cargo-Pant/5423106273",
        productDescription: "Description 1",
        productSpecification: ["Spec 1", "Spec 2"],
        productImageURL: ["https://i5.walmartimages.com/seo/No-Boundaries-Juniors-Synthetic-Cargo-Pant_212c5677-28ff-4448-b63a-95d85593740c.e7ab8475dfef7f216b3cd8db382e323b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", "Image URL 2"],
        generatedURL: [
            "https://imgur.com/7OfvdZa.jpeg", 
            "https://imgur.com/C05e1nL.jpeg",
            "https://imgur.com/6kQ2k3o.jpeg",
            "https://imgur.com/6YyuEye.jpeg"
        ]
    },
    {
        brand: "Apple",
        productName: "Straight Talk Apple iPhone 13, 128GB, Midnight - Prepaid Smartphone [Locked to Straight Talk]",
        productURL: "Straight-Talk-Apple-iPhone-13-128GB-Midnight-Prepaid-Smartphone-Locked-to-Straight-Talk/454408250",
        productDescription: "Description 2",
        productSpecification: ["Spec 3", "Spec 4"],
        productImageURL: [
            "https://i5.walmartimages.com/seo/Straight-Talk-Apple-iPhone-13-128GB-Midnight-Prepaid-Smartphone-Locked-to-Straight-Talk_f7161c65-ec39-4243-a60d-1773db232445.4668f08e8c56be046a8c3c7b636c2e3c.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", 
            "Image URL 4"
        ],
        generatedURL: [
            "https://imgur.com/vqTsZhK.jpeg", 
            "https://imgur.com/JNcyVhR.jpeg",
            "https://imgur.com/4xiuuQQ.jpeg"
        ]
    },
    {
        brand: "Hanes Store",
        productName: "Hanes Authentic Men's Short Sleeve Crewneck T-Shirt, Big and Tall Sizes Available S-5XL",
        productURL: "Hanes-Men-s-and-Big-Men-s-Essentials-Short-Sleeve-Tee-Up-To-Size-6XL/40234817",
        productDescription: "Description 3",
        productSpecification: ["Spec 3", "Spec 4"],
        productImageURL: [
            "https://i5.walmartimages.com/seo/Hanes-Authentic-Men-s-T-Shirt-Big-Tall-Sizes-Available-Black-L_9f094c43-13ad-43a1-b429-532c1603950a.0dcb02f2e2f24b141339fe7bb03ab61b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", 
            "Image URL 4"
        ],
        generatedURL: [
            "https://imgur.com/MBs53zb.jpeg", 
            "https://imgur.com/4g2pHCk.jpeg",
            "https://imgur.com/BRjoW87.jpeg"
        ]
    },
    {
        brand: "Homall",
        productName: "Homall Convertible Sectional Sofa Couch, Modern Linen Fabric L-Shaped Couch 3-Seat Sofa Sectional with Reversible Chaise for Small Living Room, Apartment and Small Space, Dark Gray",
        productURL: "Homall-Convertible-Sectional-Sofa-Couch-Modern-Linen-Fabric-L-Shaped-Couch-3-Seat-Reversible-Chaise-Small-Living-Room-Apartment-Space-Dark-Gray/1056943221",
        productDescription: "Description 4",
        productSpecification: ["Spec 3", "Spec 4"],
        productImageURL: [
            "https://i5.walmartimages.com/seo/Homall-Convertible-Sectional-Sofa-Couch-Modern-Linen-Fabric-L-Shaped-Couch-3-Seat-Reversible-Chaise-Small-Living-Room-Apartment-Space-Dark-Gray_580e12a9-825b-4586-87df-e275ea527e67.78b035bcf5754d1e6b0f1aa872ff576a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", 
            "Image URL 4"
        ],
        generatedURL: [
            "https://imgur.com/TqdUPke.jpeg", 
            "https://imgur.com/Wl4UgUn.jpeg",
            "https://imgur.com/fYanqYi.jpeg"
        ]
    },
];

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        // Insert products
        return Product.insertMany(products);
    })
    .then(() => {
        console.log("Data inserted successfully");
        // Disconnect from MongoDB
        return mongoose.disconnect();
    })
    .then(() => {
        console.log("Disconnected from MongoDB");
    })
    .catch((error) => {
        console.error("Error:", error);
    });