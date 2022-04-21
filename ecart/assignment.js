document.addEventListener("DOMContentLoaded", function(event) {
   let single_row=document.getElementById("product_card");
    // let product_image=document.createElement("img");
    // product_image.classList.add="src";
   var value; 
   let url= "https://mocki.io/v1/46351079-0933-4329-978b-8d1fc3ec6c69";
   options={
    method:"GET",
   }
   fetch(url)
//   .then(response => response.json())
//   .then(function(jsonData) {
//         for(var  k in)
//   })
    // value=data.length,
    // console.log(data));
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
        for(var k in jsonData){
            let product_card=document.createElement("div");
            product_card.classList.add('product_details_card');

            let discount_tag=document.createElement('p');
            discount_value=Math.ceil(30+(Math.random()*10));
            discount_tag.innerHTML=discount_value+'%'+' off';
            discount_tag.classList.add('discount_tag');
            product_card.appendChild(discount_tag);
             
            let product_image=document.createElement("img");
            product_image.setAttribute('src',jsonData[k].product_image);  
            product_image.style.margin='5px';
            product_image.classList.add('image_size');
            product_card.appendChild(product_image);

            let heading_div=document.createElement("div");
            heading_div.classList.add('d-flex','flex-row','justify-content-between','align-items-center');
            let product_heading=document.createElement("h1");
            product_heading.classList.add("heading");
            product_heading.textContent=jsonData[k].company_name;
            let heading_font=document.createElement('i');
            heading_font.classList.add('fa','fa-heart','heading_font');
            heading_div.appendChild(product_heading);
            heading_div.appendChild(heading_font);
            product_card.appendChild(heading_div);
            
            let paragraph_text=document.createElement('p');
            paragraph_text.classList.add('paragraph_text');
            paragraph_text.innerHTML=jsonData[k].product_desc;
            product_card.appendChild(paragraph_text);

            let price_wrapper=document.createElement("div");
            price_wrapper.classList.add('d-flex','flex-row','align-items-center');
            let price_tag=document.createElement('p');
            price_tag.classList.add('price_text');
            price_tag.innerHTML='Rs.'+jsonData[k].product_price;
            let original_price=document.createElement('p');
            original_price.classList.add('original_price','price_text');
            let original_value=Math.ceil((100*jsonData[k].product_price)/(100-discount_value));
            original_price.innerHTML='Rs.'+original_value;
            price_wrapper.appendChild(price_tag);
            price_wrapper.appendChild(original_price);

            product_card.appendChild(price_wrapper);

            let wrapper_div=document.createElement("div");
            wrapper_div.classList.add('d-flex','flex-row','align-items-center','ml-1');
            let rating_value=document.createElement('p');
            let rating_box=document.createElement("div");
            rating_box.classList.add('ratingbox','d-flex','flex-row','justify-content-center','align-items-center');
            rating_value.classList.add('price_text');
            rating_value.innerHTML=jsonData[k].product_average_rating;
            
            let star=document.createElement('i');
            star.classList.add('fa','fa-star','star');
            rating_box.appendChild(rating_value);
            rating_box.appendChild(star);
            
            let reviews=document.createElement("p");
            reviews.innerHTML=' ('+jsonData[k].product_reviews_count+')';
            
            wrapper_div.appendChild(rating_box);
            wrapper_div.appendChild(reviews)
            product_card.appendChild(wrapper_div);
            single_row.appendChild(product_card);

        }
    })
    
});
